import "./quick-fixes.css";


function QuickFixes() {
    return (
        <main className="quick-fixes-page" id="main-content">
            <section className="article-hero">
                <div className="content">
                    <p className="eyebrow">
                        Strategy
                    </p>
                    <h2>
                        Why Quick Fixes Often Fail
                    </h2>
                    <p>
                        Better results begin with understanding the real problem, not only responding to the visible symptom.
                    </p>
                </div>
            </section>
            <article className="article-content">
                <div className="content">
                    <img src={process.env.PUBLIC_URL + "/images/image-012.jpg"} alt="Business leader reviewing a report" />
                    <p className="article-introduction">
                        When a challenge appears, it is tempting to move quickly toward the first available answer. But quick fixes often treat the symptom while the real cause continues to affect the organization.
                    </p>
                    <h2>
                        Symptoms Are Not Always the Problem
                    </h2>
                    <p>
                        Missed deadlines, unclear communication, and low team morale can all be visible signs of a deeper issue. If leaders only react to what they can immediately see, the same problem is likely to return.
                    </p>
                    <p>
                        Taking time to understand the people, processes, priorities, and expectations involved helps leaders make better decisions. It creates the clarity needed to solve the right problem.
                    </p>
                    <h2>
                        Start With Better Questions
                    </h2>
                    <p>
                        Before choosing a solution, ask what is causing the challenge, who it affects, and what success should look like. These questions move the conversation from reaction to meaningful action.
                    </p>
                    <div className="article-quote">
                        <p>
                            “Lasting progress starts when leaders understand the real challenge beneath the surface.”
                        </p>
                    </div>
                    <h2>
                        Turn Understanding Into Action
                    </h2>
                    <p>
                        Once the root cause is clear, leaders can build a plan that includes focused priorities, practical next steps, and ways to measure progress. This creates a stronger path forward than any quick fix.
                    </p>
                </div>
            </article>
            <section className="article-callout">
                <div className="content">
                    <h2>
                        Ready to Solve the Right Problem?
                    </h2>
                    <p>
                        Start a conversation about the challenges facing your organization.
                    </p>
                    <a className="button gold-button" href="#/contacts">
                        Book a Consultation
                    </a>
                </div>
            </section>
        </main>
    );
}

export default QuickFixes;
