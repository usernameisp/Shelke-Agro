import SectionIntro from './SectionIntro';

const defaultVideoEmbedUrl = 'https://www.youtube-nocookie.com/embed/hRZ6oQwvS0g?si=5Rr_ffXkY8gOBQZa';

function FeaturedVideo({
  className = '',
  compact = false,
  description = 'See the farm, the fields, and the spirit behind our harvest in this featured video.',
  eyebrow = 'Farm Video',
  poster,
  showIntro = true,
  title = 'Watch a closer look at Shelke Agro',
  videoTitle = 'Shelke Agro YouTube video',
  videoUrl = defaultVideoEmbedUrl,
}) {
  const isDirectVideo =
    videoUrl.includes('/download/video/') || /\.(mp4|webm|ogg)(\?.*)?$/i.test(videoUrl);

  return (
    <div className={`video-showcase${compact ? ' video-showcase-compact' : ''} ${className}`.trim()}>
      {showIntro ? <SectionIntro eyebrow={eyebrow} title={title} description={description} /> : null}

      <div className="video-frame">
        {isDirectVideo ? (
          <video
            controls
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
            playsInline
            preload="metadata"
            poster={poster}
            onContextMenu={(event) => event.preventDefault()}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        ) : (
          <iframe
            src={videoUrl}
            title={videoTitle}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}

export default FeaturedVideo;
