import VideoEmbed from '../../components/VideoEmbed';
import NewsletterForm from '../../components/NewsletterForm';

export default function ContentCreation() {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-black text-[#6B2C91] mb-4">Content Creation</h1>
        <p className="text-lg text-gray-700 mb-8">
          Create engaging, high-performing content for social and web.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="md:col-span-2">
            <VideoEmbed embedUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Content Strategy Overview" />
          </div>
          <div className="md:col-span-1">
            <NewsletterForm title="Content tips by email" subtitle="Sign up for prompts, scripts, and editing workflows." />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <VideoEmbed embedUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Ideation & Scripting" />
          <VideoEmbed embedUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Filming Basics" />
          <VideoEmbed embedUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Editing & Repurposing" />
        </div>
      </div>
    </div>
  );
}
