import Projects from "../components/Projects";

function ProjectsPage() {
    return (
        <main>
            <section className="px-6 pt-20 text-center">
                <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gray-500">
                    My Work
                </p>

                <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
                    Projects
                </h1>

                <p className="mx-auto mt-5 max-w-2xl text-gray-600">
                    Here are some of the projects I have built using modern
                    frontend technologies.
                </p>
            </section>

            <Projects />
        </main>
    );
}

export default ProjectsPage;