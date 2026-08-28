
// import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";



// const navigate = useNavigate();


function Hero() {

    return (
        <section className='bg-[#F8F7F3] px-6 py-20 md:py-28">' >
            <div className='mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2' >

                <div>
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                        Hello, I'm
                    </p>

                    <h1 className="mb-3 text-5xl font-bold tracking-[-0.03em] text-gray-900 md:text-6xl lg:text-7xl">
                        Zahra Khansari
                    </h1>

                    <h2 className="mb-6 text-3xl font-semibold text-gray-700 md:text-4xl">
                        Frontend Developer
                    </h2>

                    <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-600">
                        I build clean, responsive, and user-friendly web applications
                        with React, TypeScript, and modern web technologies.
                    </p>
                    <div className="mb-10 flex flex-wrap gap-2">
                        <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
                            React
                        </span>

                        <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
                            TypeScript
                        </span>

                        <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
                            Tailwind CSS
                        </span>

                        <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
                            JavaScript
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <button className="rounded-lg bg-blue-600 px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700">
                            <Link to="/projects"> View My Projects </Link>
                        </button>

                        <a
                            href=""
                            download="CV"
                            className="flex items-center gap-2 rounded-lg border-2 border-gray-900 bg-white px-6 py-3.5 font-semibold text-gray-900 transition duration-300 hover:-translate-y-0.5 hover:bg-gray-900 hover:text-white"
                        >
                            Download CV

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="h-5 w-5"
                            >
                                <path d="M12 3v12" />
                                <path d="m7 10 5 5 5-5" />
                                <path d="M5 21h14" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* profile picture */}
                <div className="relative flex justify-center md:justify-end">

                    {/* Decorative shape */}
                    <div className="absolute h-72 w-72 rounded-full bg-blue-100 md:h-96 md:w-96" />

                    <div className="absolute -right-2 top-4 h-20 w-20 rounded-2xl bg-purple-200 md:right-4" />

                    {/* Image */}
                    <div className="relative h-72 w-72 overflow-hidden rounded-[2rem] border-8 border-white shadow-xl md:h-96 md:w-96">
                        <img
                            src="/images/zarakhansari.jpeg"
                            alt="Zahra Khansari"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>


        </section>
    );
}

export default Hero;