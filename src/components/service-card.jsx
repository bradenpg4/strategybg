import "./service-card.css";

function ServiceCard({ title, category, duration, audience, description, image }) {
    return (
        <article className="service-card">
            <img src={process.env.PUBLIC_URL + "/" + image} alt={title} />
            <div className="service-card-content">
                <p className="eyebrow">{category}</p>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul>
                    <li><strong>Duration:</strong> {duration}</li>
                    <li><strong>For:</strong> {audience}</li>
                </ul>
            </div>
        </article>
    );
}

export default ServiceCard;
