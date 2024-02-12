import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
    return (
        <div>
            <nav>
                <div className="navbar">
                    <Link to="/">
                        <h6>Home Page</h6>
                    </Link>
                </div>
            </nav>
        </div>
    )

}

export default Navbar;