import { ArrowRight } from 'lucide-react';

export default function Courses() {
  const courses = [
    { id: 'courses/digital-marketing', title: 'Digital Marketing', blurb: 'Grow audiences and revenue with modern tactics.' },
    { id: 'courses/seo', title: 'SEO Fundamentals', blurb: 'Rank higher and drive organic traffic.' },
    { id: 'courses/content-creation', title: 'Content Creation', blurb: 'Create engaging content that converts.' },
  ];

  const handleNavigate = (page: string) => {
    const event = new CustomEvent('navigate', { detail: page });
    window.dispatchEvent(event);
  };

  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-black text-[#6B2C91] mb-4">Courses</h1>
          <p className="text-lg md:text-xl text-gray-700">
            Learn practical skills to create income and impact. Pick a track to start watching.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((c) => (
            <div key={c.id} className="rounded-2xl p-6 shadow-lg bg-[#F9F5FF] border border-[#E9D8FD]">
              <h3 className="text-2xl font-black text-[#6B2C91] mb-2">{c.title}</h3>
              <p className="text-gray-700 mb-4">{c.blurb}</p>
              <button
                onClick={() => handleNavigate(c.id)}
                className="inline-flex items-center gap-2 bg-[#6B2C91] text-white px-5 py-3 rounded-full font-bold hover:bg-[#8B3CB1] transition-transform hover:scale-105"
              >
                View Lessons <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

