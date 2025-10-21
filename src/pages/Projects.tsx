import { ArrowRight, Briefcase, Users, TrendingUp, CheckCircle } from 'lucide-react';
import DecorativeCircle from '../components/DecorativeCircle';

export default function Projects() {
  const projects = [
    {
      title: 'Luma Protocol',
      description: 'Luma Protocol is a DeFi 3.0 project built to help you make money in crypto. It offers staking, yield farming, and passive income rewards, so your money grows automatically with blockchain technology. Unlike complicated systems, Luma Protocol is simple, secure, and transparent, making it easy for anyone to start earning.',
      technologies: ['Earn 0.5%–1% daily and 15%–30% monthly', 'Start with just $100', 'Instant, unlimited withdrawals anytime','300% returns under $10K | 400% above $10K','50% principal withdraw anytime, rest as daily rewards','Team profit overrides for unlimited extra income'],
      status: 'Active',
      impact: '1000+ members earning daily',
      link: 'https://t.me/LumaProtocolTribe ',
      logo: 'luma_logo.jpg',
    },
    {
      title: 'Zionix Global',
      description: 'Zionix is an upcoming cryptocurrency AI trading platform that provides licensed, self-operating trading solutions for the modern investor. Designed to automate trades, optimize profits, and reduce risks, Zionix leverages advanced AI technology to make crypto trading simpler, smarter, and more efficient.Whether you’re a beginner or an experienced trader, Zionix is set to redefine the way people trade crypto, offering secure, reliable, and fully automated trading—making it easier than ever to grow your digital assets',
      technologies: ['Coming Soon'],
      status: 'In Progress',
      impact: '--',
      // link: '',
      logo: 'zionix_logo.png',
    },
    // {
    //   title: 'Education Sponsorship',
    //   description: 'Partner with schools and educational institutions to sponsor underprivileged children. Help provide books, uniforms, and school supplies.',
    //   technologies: ['Partnership Management', 'Fundraising', 'Event Planning'],
    //   status: 'Active',
    //   impact: '1,500+ students sponsored',
    // },
    // {
    //   title: 'Online Skills Training',
    //   description: 'Learn valuable digital skills including graphic design, video editing, and web development while contributing to our content creation needs.',
    //   technologies: ['Graphic Design', 'Video Editing', 'Web Development'],
    //   status: 'Active',
    //   impact: '300+ members trained',
    // },
    // {
    //   title: 'Healthcare Access Program',
    //   description: 'Work with healthcare providers to ensure children receive proper medical care, vaccinations, and regular health checkups.',
    //   technologies: ['Healthcare Coordination', 'Medical Partnerships', 'Data Management'],
    //   status: 'In Progress',
    //   impact: '2,000+ health checkups completed',
    // },
    // {
    //   title: 'Youth Mentorship Network',
    //   description: 'Become a mentor and guide young individuals toward personal and professional growth. Share your expertise and earn while making a difference.',
    //   technologies: ['Mentorship', 'Career Coaching', 'Personal Development'],
    //   status: 'Completed',
    //   impact: '500+ mentorship pairs',
    // },
  ];

  return (
    <div className="pt-20">
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#6B2C91] to-[#8B3CB1] overflow-hidden">
        <DecorativeCircle color="gold" size="large" position="top-0 right-0" />
        <DecorativeCircle color="gold" size="medium" position="bottom-0 left-0" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Join meaningful projects that create real impact. Earn income while helping children in need and developing valuable skills for your future.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <DecorativeCircle color="purple" size="medium" position="top-20 right-20" />
        <DecorativeCircle color="gold" size="medium" position="bottom-20 left-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#6B2C91] mb-6">
              Active & Upcoming Projects
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Choose a project that aligns with your skills and interests. Every contribution makes a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden">
                      {project.logo ? (
                        // image logos live in public/images
                        <img
                          src={`/images/${project.logo}`}
                          alt={`${project.title} logo`}
                          className="w-14 h-14 object-cover"
                          onError={(e) => {
                            // replace broken image with fallback image
                            // @ts-ignore
                            e.currentTarget.onerror = null;
                            // @ts-ignore
                            e.currentTarget.src = '/images/logo-fallback.png';
                          }}
                        />
                      ) : (
                        <div className="bg-gradient-to-br from-[#6B2C91] to-[#8B3CB1] w-14 h-14 rounded-full flex items-center justify-center">
                          <Briefcase className="text-white" size={28} />
                        </div>
                      )}
                    </div>
                    <span
                      className={`px-4 py-1 rounded-full text-sm font-bold ${
                        project.status === 'Active'
                          ? 'bg-green-100 text-green-700'
                          : project.status === 'In Progress'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-[#6B2C91] mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-sm font-bold text-gray-500 mb-2">Key Points:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-[#E8C547]/20 text-[#6B2C91] px-3 py-1 rounded-full text-xs font-bold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[#6B2C91] mb-6">
                    <Users size={20} />
                    <span className="text-sm font-bold">{project.impact}</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-[#6B2C91] to-[#8B3CB1] text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all flex items-center justify-center gap-2"
                  >
                    Join <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-gradient-to-br from-[#6B2C91] to-[#8B3CB1] relative overflow-hidden">
        <DecorativeCircle color="gold" size="large" position="top-0 left-0" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Why Join Our Projects?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white text-center">
              <div className="bg-[#E8C547] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-[#6B2C91]" size={32} />
              </div>
              <h3 className="text-2xl font-black mb-3">Earn Income</h3>
              <p className="text-lg leading-relaxed text-white/90">
                Get paid for your contributions and grow your financial freedom
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white text-center">
              <div className="bg-[#E8C547] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-[#6B2C91]" size={32} />
              </div>
              <h3 className="text-2xl font-black mb-3">Develop Skills</h3>
              <p className="text-lg leading-relaxed text-white/90">
                Learn valuable skills that enhance your professional portfolio
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white text-center">
              <div className="bg-[#E8C547] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-[#6B2C91]" size={32} />
              </div>
              <h3 className="text-2xl font-black mb-3">Make Impact</h3>
              <p className="text-lg leading-relaxed text-white/90">
                Directly contribute to changing children's lives worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <DecorativeCircle color="purple" size="large" position="top-0 right-0" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#6B2C91] mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Join thousands of Grateful Tribe members who are making a difference while building their future. Start your journey today.
          </p>
          <a
            href="https://t.me/TheGratefulTribe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6B2C91] to-[#8B3CB1] text-white px-12 py-6 rounded-full font-black text-xl hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            Join Our Projects <ArrowRight size={24} />
          </a>
        </div>
      </section>

      <footer className="bg-[#6B2C91] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img src="/TGT-LOGO-1.png" alt="TGT Logo" className="h-16 w-16 mx-auto mb-4" />
            <h3 className="text-2xl font-black mb-2">The Grateful Tribe</h3>
            <p className="text-gray-300 mb-4">Helping those with BIG hearts achieve BIG wallets.</p>
            <p className="text-sm text-gray-400">&copy; 2025 The Grateful Tribe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
