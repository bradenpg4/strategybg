import "./navigation.css";

function Navigation() {
    return (
        <nav className="main-nav" aria-label="Main navigation">
            <ul>
                <li>
                    <a className="active" href="home.html">
                        Home
                    </a>
                </li>
                <li>
                    <a href="about.html">About Us</a>
                </li>
                <li>
                    <a href="methodology.html">Methodology</a>
                </li>
                <li>
                    <a href="services.html">Services</a>
                </li>
                <li>
                    <a href="insights.html">Insights</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;