function SectionIntro({ eyebrow, title, description, align = 'left' }) {
  const className = align === 'center' ? 'section-intro section-intro-center' : 'section-intro';

  return (
    <div className={className}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export default SectionIntro;
