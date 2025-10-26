export default function SEO() {
  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-black text-[#6B2C91] mb-6">SEO Fundamentals</h1>
        <p className="text-gray-700 mb-8">
          Learn the basics of search engine optimization with placeholder videos. Swap in your own links when ready.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-[#6B2C91] mb-2">On-Page SEO</h2>
            <div className="aspect-video rounded-xl overflow-hidden shadow">
              <iframe
                src="https://player.vimeo.com/video/22439234"
                allow="autoplay; fullscreen; picture-in-picture"
                className="w-full h-full"
                title="Vimeo placeholder"
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#6B2C91] mb-2">Technical SEO</h2>
            <div className="aspect-video rounded-xl overflow-hidden shadow">
              <iframe
                src="https://drive.google.com/file/d/FILE_ID/preview"
                allow="autoplay"
                className="w-full h-full"
                title="Drive placeholder"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

