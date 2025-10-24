import { Target, Eye, CheckCircle } from 'lucide-react';
import DecorativeCircle from '../components/DecorativeCircle';

export default function WhoWeAre() {
  const navigateToProjects = () => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: 'projects' }));
  };

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-[#6B2C91] to-[#8B3CB1] overflow-hidden">
        <DecorativeCircle color="gold" size="large" position="top-0 -right-20" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Who We Are
          </h1>
          <p className="text-xl md:text-2xl text-white font-medium max-w-3xl mx-auto leading-relaxed">
            We're a community-driven organization dedicated to making a meaningful difference in the lives of those who need it most
          </p>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <DecorativeCircle color="purple" size="medium" position="top-20 left-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="/COVER.png"
                alt="Our Mission"
                className="rounded-3xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#6B2C91] w-16 h-16 rounded-full flex items-center justify-center">
                  <Target className="text-white" size={32} />
                </div>
                <h2 className="text-4xl font-black text-[#6B2C91]">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                At The Grateful Tribe, we believe in the power of gratitude and collective action. Our mission is to create sustainable, positive change in communities by addressing critical needs and empowering individuals to reach their full potential.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We work tirelessly to ensure that no one goes hungry, that children have access to education, and that communities have the resources they need to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#E8C547] w-16 h-16 rounded-full flex items-center justify-center">
                  <Eye className="text-[#6B2C91]" size={32} />
                </div>
                <h2 className="text-4xl font-black text-[#6B2C91]">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                We envision a world where every person has access to basic necessities, opportunities for growth, and the support of a caring community. Through strategic partnerships and innovative programs, we're building a future where gratitude and giving create ripples of positive change.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our approach is holistic, addressing immediate needs while building long-term solutions that empower communities to sustain themselves.
              </p>
            </div>
            <div className="relative order-1 md:order-2">
              <img
                src="/COVER.png"
                alt="Our Vision"
                className="rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <DecorativeCircle color="gold" size="large" position="bottom-0 right-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#6B2C91] mb-4">
              Our Impact Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every action we take is guided by core principles that ensure maximum impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Community-Centered',
                description: 'We listen to and work directly with communities to understand their unique needs and co-create solutions',
              },
              {
                title: 'Sustainable Solutions',
                description: 'Our programs are designed to create lasting change, not just temporary relief',
              },
              {
                title: 'Transparency',
                description: 'We maintain open communication about our work, impact, and how resources are utilized',
              },
              {
                title: 'Innovation',
                description: 'We continuously seek new and better ways to address complex challenges',
              },
              {
                title: 'Collaboration',
                description: 'We partner with local organizations, businesses, and individuals to amplify our impact',
              },
              {
                title: 'Accountability',
                description: 'We measure our impact rigorously and hold ourselves accountable to the communities we serve',
              },
            ].map((principle, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-100 hover:border-[#E8C547] transition-all hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-[#E8C547] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-black text-[#6B2C91] mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#6B2C91] to-[#8B3CB1]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Join Us in Our Mission
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed">
            Together, we can create a world where everyone has the opportunity to thrive
          </p>
          <button 
            onClick={navigateToProjects}
            className="bg-[#E8C547] text-[#6B2C91] px-12 py-5 rounded-full font-black text-xl hover:bg-[#F5D76E] transform hover:scale-105 transition-all shadow-lg"
          >
            Get Involved Today
          </button>
        </div>
      </section>

      {/* Footer removed - now using global footer component */}
    </div>
  );
}
