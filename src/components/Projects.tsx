import { Link } from "react-router-dom";

function Projects() {
    const projects = [
        {
            title: "Zizo Couture",
            description: "A responsive e-commerce website built with React and TypeScript.",
            image: "/images/zizo-couture.webp",
            link: "/",
        },
        {
            title: "Zaravia Travel Planner",
            description: "A responsive travel planner website built with React and TypeScript.",
            image: "/images/zaravia.webp",
            link: "/",
        },
        {
            title: "Mehdi Zoufan Artworks",
            description: "A responsive artworks gallery website built with React and TypeScript.",
            image: "/images/mehdi-zoufan.webp",
            link: "/",
        }
    ];
    return (
        <section className="px-6 py-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                    My Projects
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="rounded-xl overflow-hidden shadow-md bg-white"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 mb-5">
                                    {project.description}
                                </p>

                                <Link
                                    to={project.link}
                                    className="inline-block px-5 py-2 rounded-lg bg-black text-white hover:bg-gray-800"
                                >
                                    View Project
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
