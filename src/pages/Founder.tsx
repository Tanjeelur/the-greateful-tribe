import { Sparkles, Globe2, Heart, Users2, TrendingUp, ArrowRight } from 'lucide-react';
import DecorativeCircle from '../components/DecorativeCircle';

export default function Founder() {
  const navigateToWhoWeAre = () => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: 'who-we-are' }));
  };
  return (
    <div className="pt-20">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#6B2C91] to-[#8B3CB1]">
        <DecorativeCircle color="gold" size="large" position="top-10 -right-32" />
        <DecorativeCircle color="gold" size="medium" position="bottom-20 -left-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#E8C547] rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <img
                src="/sl_founder.jpg"
                alt="Sal Khan - Founder"
                className="relative rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-white space-y-6">
              <div className="inline-block">
                <div className="flex items-center gap-3 bg-[#E8C547] text-[#6B2C91] px-6 py-3 rounded-full font-bold text-sm mb-4">
                  <Sparkles size={20} />
                  <span>Founder & Visionary</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-tight text-shadow">
                Meet Sal Khan
              </h1>
              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                From medical school aspirations to global digital entrepreneur and philanthropic leader
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={navigateToWhoWeAre}
                  className="bg-[#E8C547] text-[#6B2C91] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#F5D76E] transform hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  Learn About Our Mission <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <DecorativeCircle color="purple" size="medium" position="top-20 right-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-[#6B2C91] mb-6">
                A Journey of Purpose
              </h2>
              <div className="w-24 h-1 bg-[#E8C547] mx-auto mb-8"></div>
            </div>

            <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
              <p className="text-xl font-medium text-[#6B2C91]">
                Sal Khan's story is one of transformation, vision, and unwavering commitment to making a difference in the world.
              </p>

              <p>
                What began as a path toward medical school evolved into something far more impactful. Recognizing the boundless potential of digital entrepreneurship, Sal pivoted from traditional medicine to the digital realm, where he could heal communities on a global scale.
              </p>

              <div className="bg-gradient-to-r from-[#6B2C91] to-[#8B3CB1] rounded-2xl p-8 text-white my-12">
                <p className="text-2xl font-bold italic text-center leading-relaxed">
                  "Success isn't measured by what we accumulate, but by what we give back and the lives we transform along the way."
                </p>
                <p className="text-center mt-4 text-[#E8C547] font-bold">- Sal Khan</p>
              </div>

              <p>
                Through dedication, innovation, and strategic vision, Sal built a thriving international business that spans over 36 countries. His work has connected him with clients and partners across continents, from bustling metropolises to emerging markets, establishing him as a respected voice in digital entrepreneurship and social impact.
              </p>

              <p>
                But success in business was never the end goal—it was the means to a greater purpose. As Sal's professional achievements grew, so did his commitment to addressing the stark inequalities he witnessed between first-world opportunities and third-world realities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <DecorativeCircle color="gold" size="large" position="bottom-0 left-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#6B2C91] mb-4">
              Global Impact & Achievement
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building bridges between opportunity and need across the globe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Globe2,
                number: '36+',
                label: 'Countries Reached',
                color: 'bg-[#6B2C91]',
              },
              {
                icon: Users2,
                number: '1000+',
                label: 'Global Clients',
                color: 'bg-[#E8C547]',
              },
              {
                icon: TrendingUp,
                number: '15+',
                label: 'Years Experience',
                color: 'bg-[#6B2C91]',
              },
              
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={stat.color === 'bg-[#6B2C91]' ? 'text-white' : 'text-[#6B2C91]'} size={32} />
                </div>
                <div className="text-4xl font-black text-[#6B2C91] mb-2">{stat.number}</div>
                <div className="text-gray-600 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'International Business Leader',
                description: 'Built a successful digital enterprise spanning 36+ countries with a diverse global client base',
                icon: TrendingUp,
              },
              {
                title: 'Sought-After Speaker',
                description: 'Shares insights on entrepreneurship, social impact, and bridging economic divides at international conferences',
                icon: Award,
              },
              {
                title: 'Strategic Visionary',
                description: 'Combines business acumen with social consciousness to create sustainable models for change',
                icon: Sparkles,
              },
            ].map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-100 hover:border-[#E8C547] transition-all"
              >
                <div className="bg-[#6B2C91] w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <achievement.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-black text-[#6B2C91] mb-4">{achievement.title}</h3>
                <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <DecorativeCircle color="purple" size="large" position="top-10 right-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#E8C547] w-16 h-16 rounded-full flex items-center justify-center">
                  <Heart className="text-[#6B2C91]" size={32} />
                </div>
                <h2 className="text-4xl font-black text-[#6B2C91]">The Grateful Tribe</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                From this vision of bridging worlds, The Grateful Tribe was born. More than an organization, it's a movement dedicated to creating lasting change by connecting first-world resources with third-world needs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Sal's philanthropic initiative focuses on community development, education, and sustainable empowerment programs, with particular emphasis on underserved regions including Bangladesh and other developing nations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The Grateful Tribe operates on the principle that true gratitude is expressed through action—by lifting others up, providing opportunities, and creating pathways to self-sufficiency.
              </p>
            </div>
            <div className="relative">
              <img
                src="/sl_5.png"
                alt="Community Impact"
                className="rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-20 bg-gradient-to-br from-[#6B2C91] to-[#8B3CB1] relative overflow-hidden">
        <DecorativeCircle color="gold" size="medium" position="top-10 left-10" />
        <DecorativeCircle color="gold" size="small" position="bottom-10 right-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Core Values & Vision
            </h2>
            <div className="w-24 h-1 bg-[#E8C547] mx-auto mb-8"></div>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Guiding principles that drive every decision and initiative
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'Education First',
                description: 'Believing education is the most powerful tool for breaking cycles of poverty and creating opportunities',
              },
              {
                icon: Users2,
                title: 'Community Empowerment',
                description: 'Working alongside communities to build sustainable solutions that create lasting independence',
              },
              {
                icon: Globe2,
                title: 'Global Social Impact',
                description: 'Leveraging international networks and resources to address inequalities and create meaningful change',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 hover:bg-opacity-20 transition-all transform hover:-translate-y-2"
              >
                <div className="bg-[#E8C547] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="text-[#6B2C91]" size={32} />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">{value.title}</h3>
                <p className="text-white text-opacity-90 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/sl_1.jpg"
                alt="Community Work"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6B2C91] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-black mb-2">Community Development</h3>
                <p className="text-sm">Building sustainable infrastructure and support systems</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/sl_2.jpg"
                alt="Education Programs"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6B2C91] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-black mb-2">Education Initiatives</h3>
                <p className="text-sm">Providing access to quality education and learning resources</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/sl_3.jpg"
                alt="Global Outreach"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6B2C91] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-black mb-2">Global Impact</h3>
                <p className="text-sm">Connecting resources across borders to where they're needed most</p>
              </div>
            </div>
          </div> */}

          <div className="bg-gradient-to-br from-[#6B2C91] to-[#8B3CB1] rounded-3xl p-12 md:p-16 text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Join Sal's Vision
            </h2>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
              Be part of a global movement that's bridging opportunity gaps and creating pathways to prosperity for communities in need. Your involvement can help turn vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/TheGratefulTribe"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E8C547] text-[#6B2C91] px-10 py-4 rounded-full font-black text-lg hover:bg-[#F5D76E] transform hover:scale-105 transition-all shadow-lg inline-block text-center"
              >
                Join Our Tribe
              </a>
              {/* <button className="bg-white text-[#6B2C91] px-10 py-4 rounded-full font-black text-lg hover:bg-gray-100 transform hover:scale-105 transition-all shadow-lg">
                Learn More About Our Work
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer removed - now using global footer component */}
    </div>
  );
}
