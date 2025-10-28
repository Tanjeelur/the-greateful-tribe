import VideoEmbed from '../../components/VideoEmbed';
import NewsletterForm from '../../components/NewsletterForm';

export default function SEO() {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-black text-[#6B2C91] mb-4">SEO Fundamentals</h1>
        <p className="text-lg text-gray-700 mb-8">
          Understand how search engines work and how to rank higher with white-hat strategies.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="md:col-span-2">
            <VideoEmbed embedUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" title="SEO Overview" />
          </div>
          <div className="md:col-span-1">
            <NewsletterForm title="Get SEO lessons" subtitle="Receive new lessons and checklists in your inbox." />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <VideoEmbed embedUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Keyword Research" />
          <VideoEmbed embedUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" title="On-Page SEO" />
          <VideoEmbed embedUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Technical SEO Basics" />
        </div>
      </div>
    </div>
  );
}
