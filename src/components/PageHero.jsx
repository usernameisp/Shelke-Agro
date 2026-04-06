function PageHero({ eyebrow, title, description, image, children }) {
  return (
    <section className="section page-hero-section">
      <div className="container page-hero">
        <div className="page-hero-copy">
          <div className="page-hero-panel">
            <span className="eyebrow">{eyebrow}</span>
            <h1>{title}</h1>
            <p>{description}</p>
            {children}
          </div>
        </div>
        <div className="page-hero-image">
          <img src={image.url} alt={image.alt} loading="eager" />
        </div>
      </div>
    </section>
  );
}

export default PageHero;
