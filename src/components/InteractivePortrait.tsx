import { useState } from "react";

const images = [
    {
        time: "1:00",
        src: "/images/poses/clean/1-00.webp",
        angle: 30,
    },
    {
        time: "3:00",
        src: "/images/poses/clean/3-00.webp",
        angle: 90,
    },
    {
        time: "4:30",
        src: "/images/poses/clean/4-30.webp",
        angle: 135,
    },
    {
        time: "6:00",
        src: "/images/poses/clean/6-00.webp",
        angle: 180,
    },
    {
        time: "7:30",
        src: "/images/poses/clean/7-30.webp",
        angle: 225,
    },
    {
        time: "9:00",
        src: "/images/poses/clean/9-00.webp",
        angle: 270,
    },
    {
        time: "10:30",
        src: "/images/poses/clean/10-30.webp",
        angle: 315,
    },
    {
        time: "12:00",
        src: "/images/poses/clean/12-00.webp",
        angle: 0,
    },
];

function InteractivePortrait() {
    const [currentImage, setCurrentImage] = useState(images[7]);

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

        setCurrentImage(closestImage);
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            className="relative flex h-72 w-72 items-center justify-center md:h-96 md:w-96"
        >
            <img
                src={currentImage.src}
                alt="Portrait"
                draggable={false}
                className="h-[85%] w-[85%] object-contain"
            />
        </div>
    );
}

export default InteractivePortrait;