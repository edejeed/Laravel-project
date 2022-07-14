import { Link } from "react-router-dom";
import '../../../../css/nav.css';

const Navbar = () => {
    return (
            <nav className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <ul>
                    <li><button className="navni"><Link className="link" to='/login'>Login</Link></button></li>
                    <li><button className="navni"><Link className="link" to='/sign-up'>Sign Up</Link></button></li>
                </ul>
            </nav>
    );
}

export default Navbar;