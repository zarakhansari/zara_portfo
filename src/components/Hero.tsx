
// import { useNavigate } from "react-router-dom";


// const navigate = useNavigate();


function Hero() {

    return (
        <section className='flex min-h-[30vh] items-center px-6' >
            <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center ' >

                <div>
                    <p className="mb-3 text-lg font-medium text-blue-600">
                        Hello, I'm
                    </p>

                    <h1 className="mb-4 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
                        Zahra Khansari
                    </h1>

                    <h2 className="mb-6 text-2xl font-semibold text-gray-700 md:text-3xl">
                        Frontend Developer
                    </h2>

                    <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-600">
                        I'm a passionate Frontend Developer focused on creating
                        responsive, user-friendly web applications with React,
                        TypeScript, and modern web technologies.
                    </p>
                </div>

                {/* profile picture */}
                <div className="flex justify-center">
                    <img src={"/images/zarakhansari.jpeg"} alt="Zahra Khansari" className="h-80 w-80 rounded-full object-cover" />
                </div>

            </div>
            <div>
                <button
                    className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
                >
                    View My Projects
                </button>

            </div>
        </section>
    );
}

export default Hero;