import "./preview-card.css";

function PreviewCard({ image, alt, title, category, description, href, linkText, compact = false }) {
    return (
        <article className={`preview-card${compact ? " compact-card" : ""}`}>
            <img src={process.env.PUBLIC_URL + "/" + image} alt={alt} />
            {category && <p className="eyebrow">{category}</p>}
            <h3>{title}</h3>
            {description && <p>{description}</p>}
            <a href={href}>{linkText}</a>
        </article>
    );
}

export default PreviewCard;
