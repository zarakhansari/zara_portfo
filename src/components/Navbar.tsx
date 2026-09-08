import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <header className="border-b border-gray-200 bg-white">
            <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">

                {/* Name */}
                <Link
                    to="/"
                    className="text-xl font-bold tracking-tight text-gray-900"
                >
                    Zahra Khansari
                </Link>

                {/* Navigation */}
                <div className="flex items-center gap-8">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-sm transition ${isActive
                                ? "font-bold text-black"
                                : "font-medium text-gray-600 hover:text-black"
                            }`
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/About"
                        className={({ isActive }) =>
                            `text-sm transition ${isActive
                                ? "font-bold text-black"
                                : "font-medium text-gray-600 hover:text-black"
                            }`
                        }
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/Projects"
                        className={({ isActive }) =>
                            `text-sm transition ${isActive
                                ? "font-bold text-black"
                                : "font-medium text-gray-600 hover:text-black"
                            }`
                        }
                    >
                        Projects
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `text-sm transition ${isActive
                                ? "font-bold text-black"
                                : "font-medium text-gray-600 hover:text-black"
                            }`
                        }
                    >
                        Contact
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;