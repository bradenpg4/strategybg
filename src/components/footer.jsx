import "./footer.css";

function Footer({ currentPage }) {
    const links = [
        ["home", "Home"], ["about", "About Us"],
        ["methodology", "Methodology"], ["services", "Services"],
        ["insights", "Insights"], ["contacts", "Contact Us"]
    ];

    return (
        <footer className="main-footer">
            {currentPage === "home" && (
                <section className="footer-callout">
                    <h2>Ready to Move Forward?</h2>
                    <p>Start a conversation about the challenges facing your organization.</p>
                    <a className="button gold-button" href="#/contacts">Book a Consultation</a>
                </section>
            )}
            <div className="content columns footer-details">
                <div>
                    <h2>The Strategy Bridge Group</h2>
                    <p className="gold-text">From Problem to Possibility.</p>
                    <p>Helping leaders uncover real challenges and move forward with practical, effective action.</p>
                </div>
                <div>
                    <h3>Explore</h3>
                    <ul>
                        {links.map(([page, label]) => (
                            <li key={page}>
                                <a href={`#/${page}`}
                                    aria-current={currentPage === page ? "page" : undefined}>
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3>Connect With Us</h3>
                    <p>Follow for strategy insights, leadership ideas, and updates.</p>
                    <p className="socials" aria-hidden="true"><span></span><span></span><span></span></p>
                </div>
            </div>
            <p className="copyright">© 2026 The Strategy Bridge Group. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
