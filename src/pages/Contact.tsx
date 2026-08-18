const Contact = () => {
    return (
        <main className="mx-auto max-w-7xl px-6 py-16">

            {/* Header */}
            <section className="mb-12">
                <h1 className="mb-4 text-4xl font-bold text-gray-900">
                    Contact Me
                    <span className="ml-3 inline-block h-3 w-3 rounded-full bg-purple-500"></span>
                </h1>

                <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
                    I'd love to hear from you. Whether you have a question,
                    an opportunity, or just want to say hello, feel free to reach out.
                </p>
            </section>

            {/* Contact content */}
            <section className="grid gap-12 md:grid-cols-2">

                {/* Contact Information */}
                <div>
                    <h2 className="mb-6 text-2xl font-bold text-gray-900">
                        Get in Touch
                    </h2>

                    <p className="mb-8 max-w-lg leading-relaxed text-gray-600">
                        I'm currently open to junior frontend development opportunities
                        and interesting projects. Feel free to contact me through email
                        or connect with me on LinkedIn and GitHub.
                    </p>

                    <div className="space-y-6">

                        {/* Email */}
                        <div>
                            <h3 className="font-semibold text-gray-900">
                                Email
                            </h3>

                            <a
                                href="mailto:your@email.com"
                                className="text-gray-600 transition hover:text-purple-600"
                            >
                                zarakhansari@Getmail.com
                            </a>
                        </div>

                        {/* LinkedIn */}
                        <div>
                            <h3 className="font-semibold text-gray-900">
                                LinkedIn
                            </h3>

                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 transition hover:text-purple-600"
                            >
                                https://www.linkedin.com/in/zahra-khansari-31471362/
                            </a>
                        </div>

                        {/* GitHub */}
                        <div>
                            <h3 className="font-semibold text-gray-900">
                                GitHub
                            </h3>

                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 transition hover:text-purple-600"
                            >
                                https://github.com/zarakhansari
                            </a>
                        </div>

                    </div>
                </div>

                {/* Contact Form */}
                <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

                    <h2 className="mb-6 text-2xl font-bold text-gray-900">
                        Send Me a Message
                    </h2>

                    <form className="space-y-6">

                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block font-medium text-gray-700"
                            >
                                Name
                            </label>

                            <input
                                id="name"
                                type="text"
                                placeholder="Your name"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block font-medium text-gray-700"
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                type="email"
                                placeholder="your@email.com"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label
                                htmlFor="message"
                                className="mb-2 block font-medium text-gray-700"
                            >
                                Message
                            </label>

                            <textarea
                                id="message"
                                rows={5}
                                placeholder="Your message..."
                                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                            />
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-purple-600 px-6 py-3 font-medium text-white transition hover:bg-purple-700"
                        >
                            Send Message
                        </button>

                    </form>
                </div>

            </section>

        </main>
    );
};

export default Contact;