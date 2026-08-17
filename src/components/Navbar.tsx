import { Link } from "react-router-dom";


function Navbar() {
    return (<nav className='flex items-center justify-between px-6 py-6 md:px-12' >
        {/* name section */}
        <Link to="/">
            <p className="font-bold text-2xl">Zahra Khansari </p>
        </Link>
        {/* menu items */}
        <div>
            <Link to="/"
                className="text-gray-700 transition hover:text-black">Home</Link>
            <Link to="/about"
                className="text-gray-700 transition hover:text-black">About</Link>
            <Link to="/portfolio"
                className="text-gray-700 transition hover:text-black">Projects</Link>
            <Link to="/contact" className="text-gray-700 transition hover:text-black">Contact</Link>
        </div>

    </nav>

    );
}
export default Navbar;