import "./header.css";
import Navigation from "./navigation";

function Header() {
    return (
        <header className="main-header">
            <div className="header-content">
                <h1>The Strategy Bridge Group</h1>

                <Navigation />

                <a className="consultation-button" href="contacts.html">
                    Book a Consultation
                </a>
            </div>
        </header>
    );
}

export default Header;