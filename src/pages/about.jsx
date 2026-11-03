import "./about.css";
import InfoCard from "../components/info-card";

function About() {
    return (
        <main className="about-page" id="main-content">
            <section className="about-hero">
                <div className="content columns">
                    <div className="about-hero-text">
                        <p className="eyebrow">
                            About The Strategy Bridge Group
                        </p>
                        <h2>
                            Strategy Starts With Understanding
                        </h2>
                        <p>
                            We help business owners and organizational leaders uncover what is holding them back, then build clear strategies that create meaningful progress.
                        </p>
                        <a className="button gold-button" href="#/about/founder">
                            Meet the Founder
                        </a>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/images/image-016.jpg"} alt="Founder of The Strategy Bridge Group" />
                </div>
            </section>
            <section id="founder" className="founder-biography">
                <div className="content columns">
                    <img src={process.env.PUBLIC_URL + "/images/image-010.jpg"} alt="Founder of The Strategy Bridge Group" />
                    <div>
                        <p className="eyebrow">
                            Founder Biography
                        </p>
                        <h2>
                            Leadership Rooted in Clarity and Action
                        </h2>
                        <p>
                            The Strategy Bridge Group was founded on the belief that real progress begins with understanding the true problem. Through thoughtful guidance and practical strategy, we help leaders build stronger teams, clearer priorities, and lasting results.
                        </p>
                        <div className="gold-line"></div>
                    </div>
                </div>
            </section>
            <section className="gray-section values-section">
                <div className="content">
                    <h2>
                        The Values Behind Our Work
                    </h2>
                    <p>
                        Every engagement is guided by a commitment to clear thinking and meaningful progress.
                    </p>
                    <div className="columns value-cards">
                        <InfoCard title="Clarity" description="We look beyond surface-level symptoms to understand what truly needs attention." badge="" badgeClass="circle" />
                        <InfoCard title="Practical Action" description="We create strategies that leaders can use with confidence in the real world." badge="" badgeClass="circle" />
                        <InfoCard title="Lasting Progress" description="We focus on improvements that support meaningful change over time." badge="" badgeClass="circle" />
                    </div>
                </div>
            </section>
            <section className="partner-section">
                <div className="content columns">
                    <div>
                        <p className="eyebrow">
                            How We Partner With Leaders
                        </p>
                        <h2>
                            A Thoughtful Partner for Meaningful Change
                        </h2>
                        <p>
                            We create a focused space for leaders to step back, identify what matters most, and move forward with a strategy built for their organization.
                        </p>
                        <ul className="partner-list">
                            <li>
                                Listen before recommending
                            </li>
                            <li>
                                Focus on practical next steps
                            </li>
                            <li>
                                Build confidence for long-term progress
                            </li>
                        </ul>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/images/image-006.jpg"} alt="Business leader presenting to a team" />
                </div>
            </section>
            <section className="about-callout">
                <div className="content">
                    <h2>
                        Ready to Build a Better Path Forward?
                    </h2>
                    <p>
                        Start a conversation about the challenges and possibilities within your organization.
                    </p>
                    <a className="button gold-button" href="#/contacts">
                        Book a Consultation
                    </a>
                </div>
            </section>
        </main>
    );
}

export default About;
