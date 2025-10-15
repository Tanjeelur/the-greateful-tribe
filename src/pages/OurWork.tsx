import { Utensils, GraduationCap, Home, HeartHandshake, Droplets, Zap } from 'lucide-react';
import DecorativeCircle from '../components/DecorativeCircle';

export default function OurWork() {
  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-[#6B2C91] to-[#8B3CB1] overflow-hidden">
        <DecorativeCircle color="gold" size="large" position="top-10 right-10" />
        <DecorativeCircle color="gold" size="medium" position="bottom-10 left-10" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Our Work
          </h1>
          <p className="text-xl md:text-2xl text-white font-medium max-w-3xl mx-auto leading-relaxed">
            Transforming communities through targeted programs and sustainable initiatives
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#6B2C91] mb-4">
              Program Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach addresses multiple aspects of community wellbeing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Utensils,
                title: 'Food Distribution',
                description: 'Providing nutritious meals and groceries to families facing food insecurity. We partner with local food banks and community kitchens.',
                impact: '500K+ meals distributed',
                color: 'bg-[#6B2C91]',
              },
              {
                icon: GraduationCap,
                title: 'Education Programs',
                description: 'Supporting students with school supplies, tutoring, and scholarship opportunities to ensure every child can succeed.',
                impact: '10K+ students supported',
                color: 'bg-[#E8C547]',
              },
              {
                icon: Home,
                title: 'Housing Support',
                description: 'Helping families secure and maintain safe, stable housing through rental assistance and home improvement programs.',
                impact: '2K+ families housed',
                color: 'bg-[#6B2C91]',
              },
              {
                icon: HeartHandshake,
                title: 'Healthcare Access',
                description: 'Connecting community members with healthcare services, medical supplies, and wellness programs.',
                impact: '15K+ healthcare connections',
                color: 'bg-[#E8C547]',
              },
              {
                icon: Droplets,
                title: 'Clean Water',
                description: 'Installing water filtration systems and wells in communities lacking access to clean, safe drinking water.',
                impact: '30+ water systems built',
                color: 'bg-[#6B2C91]',
              },
              {
                icon: Zap,
                title: 'Emergency Relief',
                description: 'Rapid response to natural disasters and crises, providing immediate aid and long-term recovery support.',
                impact: '50+ emergencies responded to',
                color: 'bg-[#E8C547]',
              },
            ].map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-gray-100"
              >
                <div className={`${program.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                  <program.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-black text-[#6B2C91] mb-4">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{program.description}</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-bold text-[#E8C547]">{program.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#6B2C91] to-[#8B3CB1] relative overflow-hidden">
        <DecorativeCircle color="gold" size="medium" position="top-0 left-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Impact by the Numbers
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Real results from our programs across communities
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '1.2M+', label: 'Total Meals', sublabel: 'Served to families' },
              { number: '25K+', label: 'People Helped', sublabel: 'Direct beneficiaries' },
              { number: '50+', label: 'Communities', sublabel: 'Across 12 countries' },
              { number: '100+', label: 'Active Programs', sublabel: 'Running currently' },
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-5xl md:text-6xl font-black text-[#E8C547] mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-bold text-white mb-1">{stat.label}</div>
                <div className="text-sm text-gray-200">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <DecorativeCircle color="purple" size="large" position="top-0 right-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#6B2C91] mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Spotlight on some of our most impactful initiatives
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: 'Community Kitchen Initiative',
                location: 'Urban Centers',
                description: 'We established 15 community kitchens in underserved neighborhoods, providing hot meals daily while creating jobs and teaching culinary skills to local residents.',
                results: ['5,000 meals served daily', '50 jobs created', '200 volunteers trained'],
                image: '/sl_1.jpg'
              },
              {
                title: 'Back to School Drive',
                location: 'Rural Communities',
                description: 'Annual program providing backpacks, school supplies, and technology to students from low-income families, ensuring they start the school year prepared.',
                results: ['10,000 students equipped', '500 laptops distributed', '100% graduation rate increase'],
                image: 'sl_2.jpg'
              },
              {
                title: 'Clean Water Project',
                location: 'International',
                description: 'Building sustainable water infrastructure in communities without reliable access to clean water, including wells, filtration systems, and hygiene education.',
                results: ['30 wells installed', '50,000 people served', '80% reduction in waterborne illness'],
                image: '/sl_3.jpg'
              },
            ].map((project, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-8 items-center bg-gray-50 rounded-3xl p-8 md:p-12 shadow-lg"
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="mb-4">
                    <span className="inline-block bg-[#E8C547] text-[#6B2C91] px-4 py-2 rounded-full text-sm font-bold">
                      {project.location}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-[#6B2C91] mb-4">{project.title}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="space-y-2">
                    <p className="font-bold text-[#6B2C91] mb-3">Key Results:</p>
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="bg-[#E8C547] w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-[#6B2C91] font-black text-sm">✓</span>
                        </div>
                        <p className="text-gray-700">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`rounded-2xl shadow-xl transform ${
                      index % 2 === 0 ? 'rotate-2' : '-rotate-2'
                    } hover:rotate-0 transition-transform duration-300`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#6B2C91] to-[#8B3CB1]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Want to Learn More?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed">
            Get detailed reports on our programs and see how your support creates real change
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#E8C547] text-[#6B2C91] px-12 py-5 rounded-full font-black text-xl hover:bg-[#F5D76E] transform hover:scale-105 transition-all shadow-lg">
              View Impact Report
            </button>
            <button className="bg-white text-[#6B2C91] px-12 py-5 rounded-full font-black text-xl hover:bg-gray-100 transform hover:scale-105 transition-all shadow-lg">
              Visit a Program
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
