import "./services.css";
import ServiceCard from "../components/service-card";

function Services() {
    return (
        <main className="services-page" id="main-content">
            <section className="services-hero">
                <div className="content columns">
                    <div>
                        <p className="eyebrow">
                            Our Services
                        </p>
                        <h2>
                            Services Designed for Real Progress
                        </h2>
                        <p>
                            Focused support for leaders who are ready to strengthen their organizations and move from challenge to action.
                        </p>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/images/image-006.jpg"} alt="Business leader leading a strategy meeting" />
                </div>
            </section>
            <section className="json-services">
                <div className="content">
                    <p className="eyebrow">
                        How We Can Help
                    </p>
                    <h2>
                        Explore Our Services
                    </h2>
                    <p className="section-intro">
                        Explore the focused support we provide for leaders and organizations ready to move forward.
                    </p>
                    <div className="json-services-grid">
                        <ServiceCard title="Strategic Planning" category="Strategy" duration="4-8 weeks" audience="Business owners and leadership teams" description="Create a focused plan that connects goals, priorities, and practical next steps." image="images/image-008.jpg" />
                        <ServiceCard title="Organizational Improvement" category="Operations" duration="6-10 weeks" audience="Organizations improving internal systems" description="Identify process challenges and improve the systems that support your team." image="images/image-012.jpg" />
                        <ServiceCard title="Leadership Development" category="Leadership" duration="Ongoing support" audience="New and experienced leaders" description="Build confidence, communication, and decision-making skills for leaders." image="images/image-010.jpg" />
                        <ServiceCard title="Team Alignment" category="Teams" duration="3-6 weeks" audience="Teams needing stronger collaboration" description="Help teams establish shared priorities, responsibilities, and ways of working." image="images/image-014.jpg" />
                        <ServiceCard title="Process Review" category="Operations" duration="2-4 weeks" audience="Teams with inefficient workflows" description="Review workflows to locate bottlenecks and opportunities for improvement." image="images/image-006.jpg" />
                        <ServiceCard title="Goal Setting Workshops" category="Strategy" duration="1-2 sessions" audience="Leadership teams" description="Bring leadership teams together to define meaningful and measurable goals." image="images/image-004.jpg" />
                        <ServiceCard title="Change Management Support" category="Leadership" duration="Based on your needs" audience="Organizations navigating change" description="Guide leaders and teams through organizational change with clarity and care." image="images/image-002.jpg" />
                        <ServiceCard title="Progress Measurement" category="Performance" duration="2-5 weeks" audience="Organizations measuring results" description="Create simple ways to track results, accountability, and meaningful progress." image="images/image-016.jpg" />
                    </div>
                </div>
            </section>
            <section className="services-callout">
                <div className="content">
                    <h2>
                        Let’s Build a Strategy That Works
                    </h2>
                    <p>
                        Start a conversation about the support your organization needs most.
                    </p>
                    <a className="button gold-button" href="#/contacts">
                        Book a Consultation
                    </a>
                </div>
            </section>
        </main>
    );
}

export default Services;
