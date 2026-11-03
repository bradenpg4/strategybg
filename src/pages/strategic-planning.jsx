import "./strategic-planning.css";
import InfoCard from "../components/info-card";

function StrategicPlanning() {
    return (
        <main className="strategic-planning-page" id="main-content">
            <section className="strategic-hero">
                <div className="content">
                    <p className="eyebrow">
                        Strategic Planning
                    </p>
                    <h2>
                        Strategic Planning That Creates Direction
                    </h2>
                    <p>
                        Turn competing priorities into a clear, practical plan for meaningful progress.
                    </p>
                    <a className="button gold-button" href="#/contacts">
                        Book a Consultation
                    </a>
                </div>
            </section>
            <section className="planning-help">
                <div className="content">
                    <p className="eyebrow">
                        What We Help You Do
                    </p>
                    <h2>
                        Move From Uncertainty to Clear Direction
                    </h2>
                    <div className="columns planning-cards">
                        <InfoCard title="Clarify Goals" description="Create a shared understanding of what success looks like." />
                        <InfoCard title="Align Priorities" description="Focus time and energy on the work that matters most." />
                        <InfoCard title="Build an Action Plan" description="Turn strategy into specific, practical next steps." />
                        <InfoCard title="Measure Progress" description="Track meaningful movement and stay accountable." />
                    </div>
                </div>
            </section>
            <section className="planning-process">
                <div className="content">
                    <p className="eyebrow">
                        What to Expect
                    </p>
                    <h2>
                        A Focused Path to Progress
                    </h2>
                    <div className="columns planning-steps">
                        <InfoCard title="Discover" description="Clarify goals, challenges, and priorities." badge="01" badgeClass="step-number" />
                        <InfoCard title="Plan" description="Build a practical strategy and action roadmap." badge="02" badgeClass="step-number" />
                        <InfoCard title="Act" description="Support focused implementation and progress." badge="03" badgeClass="step-number" />
                    </div>
                </div>
            </section>
            <section className="planning-callout">
                <div className="content">
                    <h2>
                        Ready to Create a Clear Direction?
                    </h2>
                    <p>
                        Let’s build a strategy that connects your goals, people, and next steps.
                    </p>
                    <a className="button gold-button" href="#/contacts">
                        Book a Consultation
                    </a>
                </div>
            </section>
        </main>
    );
}

export default StrategicPlanning;
