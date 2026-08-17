import { Link } from "react-router-dom";


function Navbar() {
    return (<nav className='mx-auto mt-6 max-w-6xl rounded-xl border border-gray-200 bg-white px-8 py-5 shadow-sm' >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">


            {/* name section */}
            <Link to="/">
                <p className="text-xl font-bold text-gray-900 transition hover:text-blue-600">Zahra Khansari </p>
            </Link>
            {/* menu items */}
            <div className="flex gap-6 ">
                <Link to="/"
                    className="text-gray-700 transition hover:text-black">Home</Link>
                <Link to="/about"
                    className="text-gray-700 transition hover:text-black">About</Link>
                <Link to="/portfolio"
                    className="text-gray-700 transition hover:text-black">Projects</Link>
                <Link to="/contact" className="text-gray-700 transition hover:text-black">Contact</Link>
            </div>
        </div>

    </nav>

    );
}
export default Navbar;