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
                        <div className="flex items-start gap-4"> <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-50"> <svg className="h-5 w-5 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" > <rect width="20" height="16" x="2" y="4" rx="2" /> <path d="m22 7-8.97 5.7a1.99 1.99 0 0 1-2.06 0L2 7" /> </svg> </div> <div> <h3 className="mb-1 font-semibold text-gray-900"> Email </h3> <a href="mailto:zarakhansari@gmail.com" className="text-blue-600 transition hover:text-blue-800 hover:underline" > zarakhansari@gmail.com </a> </div> </div>

                        {/* LinkedIn */}
                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                                <svg
                                    className="h-5 w-5 text-blue-600"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.54 20.45h3.56V9H3.54v11.45z" />
                                </svg>
                            </div>

                            <div>
                                <h3 className="mb-1 font-semibold text-gray-900">
                                    LinkedIn
                                </h3>

                                <a
                                    href="https://www.linkedin.com/in/zahra-khansari-31471362/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 transition hover:text-blue-800 hover:underline"
                                >
                                    linkedin.com/in/zahra-khansari-31471362
                                </a>
                            </div>
                        </div>

                        {/* GitHub */}
                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100">
                                <svg
                                    className="h-5 w-5 text-gray-800"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.13c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.35.77 1.04.77 2.1v3.11c0 .3.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                                </svg>
                            </div>

                            <div>
                                <h3 className="mb-1 font-semibold text-gray-900">
                                    GitHub
                                </h3>

                                <a
                                    href="https://github.com/zarakhansari"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 transition hover:text-blue-800 hover:underline"
                                >
                                    github.com/zarakhansari
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Contact Form */}
                <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

                    <h2 className="mb-6 text-2xl font-bold text-gray-900">
                        Send Me a Message
                    </h2>

                    <form
                        action="https://formspree.io/f/xvkoweqb"
                        method="POST"
                        className="space-y-6"
                    >

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
                                name="name"
                                type="text"
                                placeholder="Your name"
                                required
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
                                name="email"
                                type="email"
                                placeholder="your@email.com"
                                required
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
                                name="message"
                                rows={5}
                                placeholder="Your message..."
                                required
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