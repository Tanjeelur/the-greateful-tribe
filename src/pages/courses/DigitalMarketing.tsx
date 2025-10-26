export default function DigitalMarketing() {
  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-black text-[#6B2C91] mb-6">Digital Marketing</h1>
        <p className="text-gray-700 mb-8">
          Starter videos to help you understand funnels, audience building, and paid social. Replace these with your own Vimeo or Google Drive links.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-[#6B2C91] mb-2">Intro to Digital Marketing</h2>
            <div className="aspect-video rounded-xl overflow-hidden shadow">
              <iframe
                src="https://player.vimeo.com/video/76979871?h=bf6b14eb5b"
                allow="autoplay; fullscreen; picture-in-picture"
                className="w-full h-full"
                title="Vimeo placeholder"
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#6B2C91] mb-2">Google Drive Example</h2>
            <div className="aspect-video rounded-xl overflow-hidden shadow">
              {/* Replace FILE_ID with your Drive video file id */}
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

