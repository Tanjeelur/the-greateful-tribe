import { Heart, Users, Globe, ArrowRight } from 'lucide-react';
import DecorativeCircle from '../components/DecorativeCircle';

export default function HomePage() {
  return (
    <div className="pt-20">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#6B2C91] to-[#8B3CB1]">
        <DecorativeCircle color="gold" size="large" position="top-10 -right-32" />
        <DecorativeCircle color="gold" size="medium" position="bottom-20 -left-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-5xl md:text-7xl font-black leading-tight text-shadow">
                Changing Lives Through Gratitude
              </h1>
              <p className="text-xl md:text-2xl font-medium">
                Join our mission to create lasting impact in communities around the world
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-[#E8C547] text-[#6B2C91] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#F5D76E] transform hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2">
                  Get Involved <ArrowRight size={20} />
                </button>
                <button className="bg-white text-[#6B2C91] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/COVER.png"
                alt="Community Impact"
                className="rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <DecorativeCircle color="purple" size="large" position="top-0 right-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#6B2C91] mb-4">
              Our Impact Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We focus on creating sustainable change in communities through targeted initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Food Security',
                description: 'Providing nutritious meals and sustainable food solutions to families in need',
                color: 'bg-[#6B2C91]',
              },
              {
                icon: Users,
                title: 'Community Development',
                description: 'Building stronger communities through education and empowerment programs',
                color: 'bg-[#E8C547]',
              },
              {
                icon: Globe,
                title: 'Global Outreach',
                description: 'Extending our reach to underserved communities across the globe',
                color: 'bg-[#6B2C91]',
              },
            ].map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-gray-100"
              >
                <div className={`${area.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                  <area.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-black text-[#6B2C91] mb-4">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#6B2C91] to-[#8B3CB1] relative overflow-hidden">
        <DecorativeCircle color="gold" size="medium" position="top-10 left-10" />
        <DecorativeCircle color="gold" size="small" position="bottom-10 right-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Our Impact in Numbers
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '1M+', label: 'Meals Provided' },
              { number: '50+', label: 'Communities Served' },
              { number: '100K+', label: 'Lives Changed' },
              { number: '25+', label: 'Partner Organizations' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-black text-[#E8C547] mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-bold text-white">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#6B2C91] to-[#8B3CB1] rounded-3xl p-12 md:p-16 text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Join thousands of supporters who are helping us create lasting change in communities worldwide
            </p>
            <button className="bg-[#E8C547] text-[#6B2C91] px-12 py-5 rounded-full font-black text-xl hover:bg-[#F5D76E] transform hover:scale-105 transition-all shadow-lg">
              Join Our Tribe
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-[#6B2C91] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img src="/TGT-LOGO-1.png" alt="TGT Logo" className="h-16 w-16 mx-auto mb-4" />
            <h3 className="text-2xl font-black mb-2">The Grateful Tribe</h3>
            <p className="text-gray-300 mb-4">Creating positive change through gratitude and action</p>
            <p className="text-sm text-gray-400">&copy; 2024 The Grateful Tribe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
