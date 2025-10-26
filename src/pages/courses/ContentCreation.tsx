export default function ContentCreation() {
  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-black text-[#6B2C91] mb-6">Content Creation</h1>
        <p className="text-gray-700 mb-8">
          Tips and frameworks for producing short-form and long-form content. Replace these example embeds with your real lessons.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-[#6B2C91] mb-2">Hook, Story, Offer</h2>
            <div className="aspect-video rounded-xl overflow-hidden shadow">
              <iframe
                src="https://player.vimeo.com/video/357274789"
                allow="autoplay; fullscreen; picture-in-picture"
                className="w-full h-full"
                title="Vimeo placeholder"
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#6B2C91] mb-2">Editing Basics</h2>
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

