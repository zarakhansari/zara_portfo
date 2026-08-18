import ProfilePic from "../components/profilePic";


const About = () => {
    return (
        <main className="mx-auto max-w-6xl px-6 py-16">
            <section className="grid items-center gap-12 md:grid-cols-2">

                {/* Left side - Text */}
                <div>
                    <h1 className="mb-8 text-4xl font-bold text-gray-900">
                        About Me
                    </h1>

                    <h2 className="mb-4 text-xl font-semibold text-gray-900">
                        I'm a Junior Frontend Developer with a background in Product
                        Management.
                    </h2>

                    <p className="mb-6 text-lg leading-relaxed text-gray-600">
                        My experience working with users, business requirements and
                        product teams taught me to think beyond just writing code. I enjoy
                        turning ideas and requirements into clean, responsive and
                        intuitive interfaces.
                    </p>

                    <p className="mb-6 text-lg leading-relaxed text-gray-600">
                        I'm currently focused on React, TypeScript, JavaScript and modern
                        frontend development.
                    </p>

                    <p className="font-medium text-purple-600">
                        Based in the Netherlands 🇳🇱
                    </p>
                </div>

                {/* <ProfilePic /> */}
                {/* My Journey */}
                <section className="mt-20">
                    <h2 className="mb-8 text-3xl font-bold text-gray-900">
                        My Journey
                    </h2>

                    <div className="relative border-l-2 border-purple-200 pl-8">

                        {/* Frontend Developer */}
                        <div className="relative mb-10">
                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-purple-500"></div>

                            <p className="mb-1 text-sm font-medium text-purple-600">
                                2023 – Present
                            </p>

                            <h3 className="mb-2 text-xl font-semibold text-gray-900">
                                Frontend Developer
                            </h3>

                            <p className="leading-relaxed text-gray-600">
                                Transitioning into frontend development and building modern,
                                responsive web applications using React, TypeScript, JavaScript,
                                and Tailwind CSS.
                            </p>
                        </div>

                        {/* Product Manager - Clinic */}
                        <div className="relative mb-10">
                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-purple-500"></div>

                            <p className="mb-1 text-sm font-medium text-purple-600">
                                2021 – 2023
                            </p>

                            <h3 className="mb-2 text-xl font-semibold text-gray-900">
                                Product Manager
                            </h3>

                            <p className="leading-relaxed text-gray-600">
                                Managed a web application for a dermatology clinic, worked with
                                user requirements, designed interfaces in Figma, and helped improve
                                the digital experience for patients and staff.
                            </p>
                        </div>

                        {/* Product Manager - McKay */}
                        <div className="relative mb-10">
                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-purple-500"></div>

                            <p className="mb-1 text-sm font-medium text-purple-600">
                                2020 – 2021
                            </p>

                            <h3 className="mb-2 text-xl font-semibold text-gray-900">
                                Product Manager
                            </h3>

                            <p className="leading-relaxed text-gray-600">
                                Worked on product strategy, market research, competitor analysis,
                                and product lifecycle management.
                            </p>
                        </div>

                        {/* Organization & System Analysis */}
                        <div className="relative">
                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-purple-500"></div>

                            <p className="mb-1 text-sm font-medium text-purple-600">
                                2017 – 2019
                            </p>

                            <h3 className="mb-2 text-xl font-semibold text-gray-900">
                                Organization & System Analysis
                            </h3>

                            <p className="leading-relaxed text-gray-600">
                                Worked on process improvement, KPI development, benchmarking,
                                and business systems analysis.
                            </p>
                        </div>

                    </div>
                </section>

            </section>
            {/* What I Bring */}
            <section className="mt-20">
                <h2 className="mb-10 text-3xl font-bold text-gray-900">
                    What I Bring
                </h2>

                <div className="grid gap-6 md:grid-cols-3">

                    {/* Card 1 */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                        <h3 className="mb-3 text-xl font-semibold text-gray-900">
                            Technical Skills
                        </h3>

                        <p className="leading-relaxed text-gray-600">
                            I build responsive and user-friendly interfaces using React,
                            TypeScript, JavaScript, Tailwind CSS, HTML, and CSS.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                        <h3 className="mb-3 text-xl font-semibold text-gray-900">
                            Product Thinking
                        </h3>

                        <p className="leading-relaxed text-gray-600">
                            My Product Management background helps me understand user needs,
                            business goals, and how technology can create meaningful solutions.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                        <h3 className="mb-3 text-xl font-semibold text-gray-900">
                            Problem Solving
                        </h3>

                        <p className="leading-relaxed text-gray-600">
                            I enjoy breaking complex problems into smaller steps and finding
                            simple, practical solutions through both design and code.
                        </p>
                    </div>

                </div>
            </section>
            {/* Tech Stack */}
            <section className="mt-20">
                <h2 className="mb-10 text-3xl font-bold text-gray-900">
                    Tech Stack
                </h2>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

                    {/* HTML */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                        <h3 className="mb-2 text-xl font-semibold text-gray-900">
                            HTML
                        </h3>
                        <p className="text-gray-600">
                            Semantic & accessible markup
                        </p>
                    </div>

                    {/* CSS */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                        <h3 className="mb-2 text-xl font-semibold text-gray-900">
                            CSS
                        </h3>
                        <p className="text-gray-600">
                            Responsive & modern layouts
                        </p>
                    </div>

                    {/* JavaScript */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                        <h3 className="mb-2 text-xl font-semibold text-gray-900">
                            JavaScript
                        </h3>
                        <p className="text-gray-600">
                            Dynamic web applications
                        </p>
                    </div>

                    {/* TypeScript */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                        <h3 className="mb-2 text-xl font-semibold text-gray-900">
                            TypeScript
                        </h3>
                        <p className="text-gray-600">
                            Typed & maintainable code
                        </p>
                    </div>

                    {/* React */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                        <h3 className="mb-2 text-xl font-semibold text-gray-900">
                            React
                        </h3>
                        <p className="text-gray-600">
                            Component-based interfaces
                        </p>
                    </div>

                    {/* Tailwind CSS */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                        <h3 className="mb-2 text-xl font-semibold text-gray-900">
                            Tailwind CSS
                        </h3>
                        <p className="text-gray-600">
                            Utility-first styling
                        </p>
                    </div>

                    {/* Vite */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                        <h3 className="mb-2 text-xl font-semibold text-gray-900">
                            Vite
                        </h3>
                        <p className="text-gray-600">
                            Fast development tooling
                        </p>
                    </div>

                    {/* Git & GitHub */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                        <h3 className="mb-2 text-xl font-semibold text-gray-900">
                            Git & GitHub
                        </h3>
                        <p className="text-gray-600">
                            Version control & collaboration
                        </p>
                    </div>

                </div>
            </section>
            {/* Currently Learning */}
            <section className="mt-20">
                <h2 className="mb-8 text-3xl font-bold text-gray-900">
                    Currently Learning
                </h2>

                <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                    <div className="flex flex-wrap gap-4">
                        <span className="rounded-full bg-purple-100 px-4 py-2 font-medium text-purple-700">
                            Advanced TypeScript
                        </span>

                        <span className="rounded-full bg-purple-100 px-4 py-2 font-medium text-purple-700">
                            REST APIs
                        </span>

                        <span className="rounded-full bg-purple-100 px-4 py-2 font-medium text-purple-700">
                            Next.js
                        </span>

                        <span className="rounded-full bg-purple-100 px-4 py-2 font-medium text-purple-700">
                            State Management
                        </span>

                        <span className="rounded-full bg-purple-100 px-4 py-2 font-medium text-purple-700">
                            Testing
                        </span>
                    </div>
                </div>
            </section>
            {/* Call To Action */}
            <section className="mt-20 rounded-2xl bg-gray-900 px-8 py-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-white">
                    Interested in working together?
                </h2>

                <p className="mx-auto mb-8 max-w-xl text-lg text-gray-300">
                    I'm always open to new opportunities, interesting projects,
                    and opportunities to grow as a frontend developer.
                </p>

                <div className="flex justify-center gap-4">
                    <a
                        href="/CV-Zahra-Khansari.pdf"
                        download
                        className="rounded-lg bg-white px-6 py-3 font-medium text-gray-900 transition hover:bg-gray-100"
                    >
                        Download CV
                    </a>

                    <a
                        href="/contact"
                        className="rounded-lg border border-gray-600 px-6 py-3 font-medium text-white transition hover:bg-gray-800"
                    >
                        Contact Me
                    </a>
                </div>
            </section>
        </main>
    );
};

export default About;