import "./home.css";
import InfoCard from "../components/info-card";
import PreviewCard from "../components/preview-card";

function Home() {
    return (
        <main className="home-page" id="main-content">
            <section id="home" className="hero">
                <div className="content columns">
                    <div className="hero-text">
                        <p className="eyebrow">
                            Strategy With Purpose
                        </p>
                        <h2>
                            From Problem to Possibility
                        </h2>
                        <p>
                            We help leaders uncover the real challenges holding their organizations back and build practical strategies for lasting progress.
                        </p>
                        <p>
                            <a className="button gold-button" href="#/methodology">
                                Explore Our Approach
                            </a>
                            <a className="button light-button" href="#/contacts">
                                Book a Consultation
                            </a>
                        </p>
                    </div>
                    <div className="hero-image">
                        <img src={process.env.PUBLIC_URL + "/images/image-000.jpg"} alt="Business leaders discussing strategy" />
                    </div>
                </div>
            </section>
            <section id="about" className="difference">
                <div className="content columns">
                    <div>
                        <p className="eyebrow">
                            The Strategy Bridge Difference
                        </p>
                        <h2>
                            Better Decisions Start With Clearer Problems
                        </h2>
                        <p>
                            The fastest answer is not always the right answer. The Strategy Bridge Group helps business owners and organizational leaders identify the true root causes affecting people, processes, priorities, performance, and progress.
                        </p>
                        <div className="gold-line"></div>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/images/image-002.jpg"} alt="Team reviewing a business strategy" />
                </div>
            </section>
            <section className="help-section gray-section">
                <div className="content">
                    <h2>
                        Where We Help Organizations Move Forward
                    </h2>
                    <p>
                        We help leaders create stronger, more focused organizations in the areas that matter most.
                    </p>
                    <div className="columns help-cards">
                        <InfoCard title="People" description="Strengthen leadership, communication, and team alignment." badge="P" badgeClass="circle" />
                        <InfoCard title="Processes" description="Improve the systems that support everyday work." badge="P" badgeClass="circle" />
                        <InfoCard title="Priorities" description="Focus effort on the work that matters most." badge="R" badgeClass="circle" />
                        <InfoCard title="Performance" description="Build clearer goals, accountability, and results." badge="F" badgeClass="circle" />
                        <InfoCard title="Progress" description="Create practical actions that support lasting improvement." badge="G" badgeClass="circle" />
                    </div>
                </div>
            </section>
            <section id="methodology" className="methodology">
                <div className="content">
                    <p className="eyebrow">
                        Our Signature Methodology
                    </p>
                    <h2>
                        A Clear Path From Challenge to Action
                    </h2>
                    <p>
                        Our process helps leaders move from uncertainty to focused, effective action.
                    </p>
                    <div className="columns steps">
                        <InfoCard title="Discover" description="Identify the real issue beneath the surface." badge="01" badgeClass="step-number" />
                        <InfoCard title="Design" description="Build a focused and practical strategy." badge="02" badgeClass="step-number" />
                        <InfoCard title="Deliver" description="Turn strategy into meaningful action." badge="03" badgeClass="step-number" />
                    </div>
                </div>
            </section>
            <section id="services" className="services">
                <div className="content">
                    <p className="eyebrow">
                        How We Help
                    </p>
                    <h2>
                        Services Designed for Real Progress
                    </h2>
                    <p>
                        Practical support for leaders ready to move their organizations forward.
                    </p>
                    <div className="columns service-cards">
                        <PreviewCard image="images/image-004.jpg" alt="Team working on strategic planning" title="Strategic Planning" href="#/strategic-planning" linkText="Learn More →" description="Create a clear direction that connects your goals, people, and next steps." />
                        <PreviewCard image="images/image-006.jpg" alt="Team discussing organizational improvement" title="Organizational Improvement" href="#/contacts" linkText="Learn More →" description="Identify process challenges and build better systems for long-term success." />
                        <PreviewCard image="images/image-008.jpg" alt="Team developing leadership skills" title="Leadership & Team Development" href="#/contacts" linkText="Learn More →" description="Support leaders and teams with clarity, structure, and alignment." />
                    </div>
                </div>
            </section>
            <section className="founder">
                <div className="content columns">
                    <img src={process.env.PUBLIC_URL + "/images/image-010.jpg"} alt="Founder of The Strategy Bridge Group" />
                    <div>
                        <p className="eyebrow">
                            Meet The Founder
                        </p>
                        <h2>
                            Guidance Built on Experience
                        </h2>
                        <p>
                            Meet the leader behind The Strategy Bridge Group and learn how their experience helps organizations move forward with confidence.
                        </p>
                        <a className="button gold-button" href="#/about">
                            Meet the Founder
                        </a>
                    </div>
                </div>
            </section>
            <section id="insights" className="insights gray-section">
                <div className="content">
                    <p className="eyebrow">
                        Insights
                    </p>
                    <h2>
                        Ideas That Move Leaders Forward
                    </h2>
                    <p>
                        Practical perspectives for leaders working through complex challenges.
                    </p>
                    <div className="columns insight-cards">
                        <PreviewCard image="images/image-012.jpg" alt="Team talking through a strategy problem" title="Why Quick Fixes Often Fail" href="#/quick-fixes" linkText="Read More →" description="A better result begins with understanding the real problem." />
                        <PreviewCard image="images/image-014.jpg" alt="Team identifying root causes" title="Finding the Root Cause of Team Challenges" href="#/contacts" linkText="Read More →" description="Move beyond surface-level issues to create real team alignment." />
                        <PreviewCard image="images/image-016.jpg" alt="Team turning strategy into action" title="Turning Strategy Into Action" href="#/contacts" linkText="Read More →" description="How focused next steps turn strong ideas into meaningful progress." />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
