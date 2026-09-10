import { useState } from "react";

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

    const handleMouseMove = (
        event: React.MouseEvent<HTMLDivElement>
    ) => {
        const rect = event.currentTarget.getBoundingClientRect();

        const x =
            event.clientX - (rect.left + rect.width / 2);

        const y =
            event.clientY - (rect.top + rect.height / 2);

        let angle = Math.atan2(x, -y) * (180 / Math.PI);

        if (angle < 0) {
            angle += 360;
        }

        let closestImage = images[0];
        let smallestDifference = Infinity;

        images.forEach((image) => {
            let difference = Math.abs(angle - image.angle);

            difference = Math.min(
                difference,
                360 - difference
            );

            if (difference < smallestDifference) {
                smallestDifference = difference;
                closestImage = image;
            }
        });

        setCurrentImage(closestImage.src);
    };

    const handleMouseLeave = () => {
        setCurrentImage(defaultImage);
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative flex h-72 w-72 items-center justify-center md:h-96 md:w-96"
        >
            <div className="relative overflow-hidden rounded-3xl border-4 border-white bg-slate-50 shadow-xl transition-all duration-300 hover:shadow-2xl">
                <img
                    src={currentImage}
                    alt="Portrait"
                    draggable={false}
                    className="h-64 w-auto object-contain md:h-80 select-none"
                />
            </div>
        </div>
    );
}

export default InteractivePortrait;