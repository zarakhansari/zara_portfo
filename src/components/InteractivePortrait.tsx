import { useState, useRef } from "react";

const images = [
    {
        src: "/images/poses/clean/1-00.webp",
        angle: 30,
    },
    {
        src: "/images/poses/clean/3-00.webp",
        angle: 90,
    },
    {
        src: "/images/poses/clean/4-30.webp",
        angle: 135,
    },
    {
        src: "/images/poses/clean/6-00.webp",
        angle: 180,
    },
    {
        src: "/images/poses/clean/7-30.webp",
        angle: 225,
    },
    {
        src: "/images/poses/clean/9-00.webp",
        angle: 270,
    },
    {
        src: "/images/poses/clean/10-30.webp",
        angle: 315,
    },
    {
        src: "/images/poses/clean/12-00.webp",
        angle: 0,
    },
];

const defaultImage = "/images/poses/clean/default.webp";

function InteractivePortrait() {
    const [currentImage, setCurrentImage] = useState(defaultImage);
    const [isHovered, setIsHovered] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    const containerRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // Hardware-accelerated smooth cursor repositioning
        if (cursorRef.current) {
            cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
        if (ringRef.current) {
            ringRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }

        // Calculate angle for head-tracking portrait
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const diffX = event.clientX - (rect.left + centerX);
        const diffY = event.clientY - (rect.top + centerY);

        let angle = Math.atan2(diffX, -diffY) * (180 / Math.PI);
        if (angle < 0) angle += 360;

        let closestImage = images[0];
        let smallestDifference = Infinity;

        images.forEach((image) => {
            let difference = Math.abs(angle - image.angle);
            difference = Math.min(difference, 360 - difference);
            if (difference < smallestDifference) {
                smallestDifference = difference;
                closestImage = image;
            }
        });

        setCurrentImage(closestImage.src);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setCurrentImage(defaultImage);
    };

    const handleClick = () => {
        setClicked(true);
        setClickCount((c) => c + 1);
        setTimeout(() => setClicked(false), 1400);
    };

    const reactionEmojis = ["👋", "✨", "🚀", "💡", "💜", "🎉"];
    const reactionTexts = [
        "Hi there!",
        "Thanks for stopping by!",
        "Let's build something!",
        "Clean code lover!",
        "Glad you're here!",
    ];

    const currentEmoji = reactionEmojis[clickCount % reactionEmojis.length];
    const currentText = reactionTexts[clickCount % reactionTexts.length];

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            className="group relative flex h-72 w-72 items-center justify-center md:h-96 md:w-96 cursor-none select-none"
        >
            {/* Portrait Card */}
            <div className="relative overflow-hidden rounded-3xl border-4 border-white bg-slate-50 shadow-xl transition-all duration-300 group-hover:shadow-2xl">
                <img
                    src={currentImage}
                    alt="Portrait"
                    draggable={false}
                    className="h-64 w-auto object-contain md:h-80 select-none pointer-events-none"
                />
            </div>

            {/* Custom Interactive Follower Cursor */}
            <div
                className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                }`}
            >
                {/* Trailing Outer Glow Ring with Radar Effect */}
                <div
                    ref={ringRef}
                    className="absolute -left-6 -top-6 h-12 w-12 transition-transform duration-100 ease-out will-change-transform"
                >
                    <div className="relative h-full w-full">
                        {/* Soft ambient glow */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-sm" />
                        
                        {/* Dashed radar viewfinder ring */}
                        <div className="h-full w-full rounded-full border border-dashed border-blue-500/60 bg-blue-500/5 backdrop-blur-[2px] animate-[spin_10s_linear_infinite]" />
                        
                        {/* Viewfinder crosshair corner pips */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-0.5 h-1.5 w-0.5 bg-blue-500 rounded-full" />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-0.5 h-1.5 w-0.5 bg-blue-500 rounded-full" />
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-0.5 w-1.5 h-0.5 bg-blue-500 rounded-full" />
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-0.5 w-1.5 h-0.5 bg-blue-500 rounded-full" />
                    </div>
                </div>

                {/* Center Core Dot and Floating Pill Badge */}
                <div
                    ref={cursorRef}
                    className="absolute -left-2 -top-2 h-4 w-4 will-change-transform"
                >
                    {/* Glowing core dot */}
                    <div className="relative flex h-4 w-4 items-center justify-center">
                        <span className="absolute h-3 w-3 rounded-full bg-blue-600 animate-ping opacity-40" />
                        <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 shadow-[0_0_12px_rgba(37,99,235,0.8)] border border-white" />
                    </div>

                    {/* Floating Pill Tag */}
                    <div className="absolute left-4 -top-3 whitespace-nowrap transition-transform duration-200 group-hover:translate-x-0.5">
                        <div
                            className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold shadow-2xl backdrop-blur-md transition-all duration-300 border ${
                                clicked
                                    ? "scale-110 bg-purple-600 text-white border-purple-300 shadow-purple-500/40"
                                    : "bg-gray-900/90 text-white border-white/20 hover:border-white/40"
                            }`}
                        >
                            <span className="text-xs transition-transform duration-200">
                                {clicked ? currentEmoji : "👀"}
                            </span>
                            <span className="tracking-wide">
                                {clicked ? currentText : "Look at me"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InteractivePortrait;