import SectionIntro from './SectionIntro';

const defaultVideoEmbedUrl = 'https://www.youtube-nocookie.com/embed/hRZ6oQwvS0g?si=5Rr_ffXkY8gOBQZa';

function FeaturedVideo({
  className = '',
  compact = false,
  description = 'See the farm, the fields, and the spirit behind our harvest in this featured video.',
  eyebrow = 'Farm Video',
  showIntro = true,
  title = 'Watch a closer look at Shelke Agro',
  videoTitle = 'Shelke Agro YouTube video',
  videoUrl = defaultVideoEmbedUrl,
}) {
  return (
    <div className={`video-showcase${compact ? ' video-showcase-compact' : ''} ${className}`.trim()}>
      {showIntro ? <SectionIntro eyebrow={eyebrow} title={title} description={description} /> : null}

      <div className="video-frame">
        <iframe
          src={videoUrl}
          title={videoTitle}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default FeaturedVideo;
