import "./info-card.css";

function InfoCard({ title, description, badge, badgeClass = "circle" }) {
    return (
        <article className="info-card">
            {badge !== undefined && <p className={badgeClass}>{badge}</p>}
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    );
}

export default InfoCard;
