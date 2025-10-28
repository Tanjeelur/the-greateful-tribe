import VideoEmbed from '../../components/VideoEmbed';
import NewsletterForm from '../../components/NewsletterForm';

export default function DigitalMarketing() {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-black text-[#6B2C91] mb-4">Digital Marketing</h1>
        <p className="text-lg text-gray-700 mb-8">
          Learn proven tactics for growing audiences and driving revenue across modern digital channels.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="md:col-span-2">
            <VideoEmbed embedUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Digital Marketing Overview" />
          </div>
          <div className="md:col-span-1">
            <NewsletterForm title="Stay in the loop" subtitle="Get lesson updates, resources, and recaps in your inbox." />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <VideoEmbed embedUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Audience Building" />
          <VideoEmbed embedUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Offer Strategy" />
          <VideoEmbed embedUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Ad Foundations" />
        </div>
      </div>
    </div>
  );
}
