const Projects = () => {
    return (
        <main className="min-h-screen px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <h1 className="mb-12 text-4xl font-bold">
                    My Projects
                </h1>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {/* ZizoCouture */}
                    <div className="overflow-hidden rounded-xl border bg-white shadow-md">

                        {/* Project image */}
                        <img
                            src="/images/zizocouture.jpg"
                            alt="ZizoCouture shop"
                            className="h-56 w-full object-contain"
                        />

                        <div className="p-6">
                            <h2 className="mb-3 text-2xl font-semibold">
                                ZizoCouture
                            </h2>

                            <p className="mb-4 text-gray-600">
                                A responsive fashion e-commerce website built with
                                React, TypeScript and Tailwind CSS.
                            </p>

                            <p className="mb-6 text-sm text-gray-500">
                                React · TypeScript · Tailwind CSS · React Router · Context API
                            </p>

                            <a
                                href="https://zizocutoure.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block rounded-lg bg-black px-5 py-2 text-white transition hover:bg-gray-800"
                            >
                                Visit Store
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default Projects;