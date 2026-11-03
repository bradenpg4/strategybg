import "./insights.css";
import PreviewCard from "../components/preview-card";

function Insights() {
    return (
        <main className="insights-page" id="main-content">
            <section className="insights-hero">
                <div className="content">
                    <p className="eyebrow">
                        Insights &amp; Resources
                    </p>
                    <h2>
                        Ideas for Leaders Ready to Move Forward
                    </h2>
                    <p>
                        Practical perspectives on strategy, leadership, and organizational progress.
                    </p>
                </div>
            </section>
            <section className="featured-insight">
                <div className="content columns">
                    <img src={process.env.PUBLIC_URL + "/images/image-012.jpg"} alt="Business leader reviewing a report" />
                    <div>
                        <p className="eyebrow">
                            Strategy
                        </p>
                        <h2>
                            Why Quick Fixes Often Fail
                        </h2>
                        <p>
                            When leaders focus only on the visible symptom, the real problem often remains. Better results begin with understanding the root cause.
                        </p>
                        <a href="#/quick-fixes">
                            Read Full Article →
                        </a>
                    </div>
                </div>
            </section>
            <section className="more-insights gray-section">
                <div className="content">
                    <h2>
                        More Insights
                    </h2>
                    <div className="columns insight-grid">
                        <PreviewCard image="images/image-014.jpg" alt="Team discussing a challenge" title="Finding the Root Cause of Team Challenges" href="#/contacts" linkText="Read More →" category="Leadership" compact />
                        <PreviewCard image="images/image-014.jpg" alt="Team planning together" title="Turning Strategy Into Action" href="#/contacts" linkText="Read More →" category="Strategy" compact />
                        <PreviewCard image="images/image-014.jpg" alt="Team reviewing priorities" title="How to Build Better Priorities" href="#/contacts" linkText="Read More →" category="Priorities" compact />
                        <PreviewCard image="images/image-014.jpg" alt="Team members collaborating" title="Creating Team Alignment" href="#/contacts" linkText="Read More →" category="Teamwork" compact />
                        <PreviewCard image="images/image-014.jpg" alt="Business team measuring progress" title="Measuring Meaningful Progress" href="#/contacts" linkText="Read More →" category="Performance" compact />
                        <PreviewCard image="images/image-014.jpg" alt="Leader working with a team" title="Leading Through Organizational Change" href="#/contacts" linkText="Read More →" category="Leadership" compact />
                    </div>
                </div>
            </section>
            <section className="subscribe-section">
                <div className="content">
                    <h2>
                        Stay Connected to Better Ideas
                    </h2>
                    <p>
                        Connect with us for practical strategy insights and leadership ideas.
                    </p>
                    <a className="button gold-button" href="#/contacts">
                        Start a Conversation
                    </a>
                </div>
            </section>
        </main>
    );
}

export default Insights;
