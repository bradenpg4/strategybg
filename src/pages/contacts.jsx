import "./contacts.css";


function Contacts() {
    return (
        <main className="contacts-page" id="main-content">
            <section className="contact-hero">
                <div className="content">
                    <p className="eyebrow">
                        Start the Conversation
                    </p>
                    <h2>
                        Let’s Build a Better Path Forward
                    </h2>
                    <p>
                        Tell us about the challenges and opportunities facing your organization.
                    </p>
                </div>
            </section>
            <section className="contact-section">
                <div className="content columns">
                    <div className="contact-details">
                        <p className="eyebrow">
                            Get in Touch
                        </p>
                        <h2>
                            Ready When You Are
                        </h2>
                        <p>
                            Whether you are working through a specific challenge or looking for a clearer direction, The Strategy Bridge Group is ready to help.
                        </p>
                        <h3>
                            Email
                        </h3>
                        <p>
                            <a href="mailto:hello@strategybridgegroup.com">
                                hello@strategybridgegroup.com
                            </a>
                        </p>
                        <h3>
                            What Happens Next
                        </h3>
                        <p>
                            We will review your message and follow up to schedule a conversation about your organization’s needs.
                        </p>
                    </div>
                    <aside className="contact-panel">
                        <h3>
                            Let’s Start a Conversation
                        </h3>
                        <p>
                            Email us about your organization and the challenges you would like to discuss.
                        </p>
                        <a className="button gold-button" href="mailto:hello@strategybridgegroup.com">
                            Email Us
                        </a>
                    </aside>
                </div>
            </section>
        </main>
    );
}

export default Contacts;
