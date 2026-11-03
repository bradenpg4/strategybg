import "./methodology.css";


function Methodology() {
    return (
        <main className="methodology-page" id="main-content">
            <section className="methodology-hero">
                <div className="content columns">
                    <div>
                        <p className="eyebrow">
                            The Signature Methodology
                        </p>
                        <h2>
                            A Better Way to Solve the Right Problem
                        </h2>
                        <p>
                            Our methodology helps leaders look beyond quick fixes, identify root causes, and create a clear path from challenge to action.
                        </p>
                        <a className="button gold-button" href="#/methodology/discover">
                            Explore the Process
                        </a>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/images/image-004.jpg"} alt="Business leaders planning together" />
                </div>
            </section>
            <section id="discover" className="methodology-step discover-step">
                <div className="content columns">
                    <img src={process.env.PUBLIC_URL + "/images/image-002.jpg"} alt="Leaders reviewing documents together" />
                    <div>
                        <p className="eyebrow">
                            01 - Discover
                        </p>
                        <h2>
                            Start With the Real Challenge
                        </h2>
                        <p>
                            Before creating solutions, we take time to understand what is happening beneath the surface. This creates clarity around the people, processes, and priorities involved.
                        </p>
                        <div className="gold-line"></div>
                    </div>
                </div>
            </section>
            <section className="methodology-step design-step gray-section">
                <div className="content columns">
                    <div>
                        <p className="eyebrow">
                            02 - Design
                        </p>
                        <h2>
                            Build a Strategy That Fits the Work
                        </h2>
                        <p>
                            Once the real challenge is clear, we design a focused strategy that connects priorities, people, and practical next steps.
                        </p>
                        <div className="gold-line"></div>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/images/image-002.jpg"} alt="Leaders building a business strategy" />
                </div>
            </section>
            <section className="methodology-step deliver-step">
                <div className="content columns">
                    <img src={process.env.PUBLIC_URL + "/images/image-002.jpg"} alt="Leaders turning plans into action" />
                    <div>
                        <p className="eyebrow">
                            03 - Deliver
                        </p>
                        <h2>
                            Turn Strategy Into Meaningful Action
                        </h2>
                        <p>
                            We help leaders move from planning to action with clear accountability, practical tools, and a focus on lasting progress.
                        </p>
                        <div className="gold-line"></div>
                    </div>
                </div>
            </section>
            <section className="methodology-callout">
                <div className="content">
                    <h2>
                        Ready to Move From Challenge to Action?
                    </h2>
                    <p>
                        Let’s start with a conversation about what is possible for your organization.
                    </p>
                    <a className="button gold-button" href="#/contacts">
                        Book a Consultation
                    </a>
                </div>
            </section>
        </main>
    );
}

export default Methodology;
