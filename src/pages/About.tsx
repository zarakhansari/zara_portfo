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

                <ProfilePic />

            </section>
        </main>
    );
};

export default About;