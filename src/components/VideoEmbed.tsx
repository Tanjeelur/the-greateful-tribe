type VideoEmbedProps = {
  embedUrl?: string; // e.g., https://www.youtube.com/embed/VIDEO_ID
  fallbackSrc?: string; // local mp4 fallback
  title?: string;
};

export default function VideoEmbed({ embedUrl, fallbackSrc = '/website-intro.mp4', title = 'Course Video' }: VideoEmbedProps) {
  return (
    <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-black">
      {embedUrl ? (
        <iframe
          className="w-full h-full"
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <video className="w-full h-full object-cover" controls>
          <source src={fallbackSrc} type="video/mp4" />
        </video>
      )}
    </div>
  );
}

