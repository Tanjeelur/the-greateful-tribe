import { Play } from 'lucide-react';
import DecorativeCircle from '../components/DecorativeCircle';

export default function OurWork() {
  return (
    <div className="pt-20">
      <section
        className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/COVER.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#6B2C91] opacity-70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight">
            ACTIVE CAMPAIGNS
          </h1>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-white"
          style={{
            clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 50%)',
          }}
        ></div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <DecorativeCircle color="purple" size="large" position="top-0 right-0" />
        <DecorativeCircle color="gold" size="medium" position="bottom-20 left-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-24">
            {[
              {
                title: 'Community Kitchen Initiative',
                subtitle: 'Feeding Families, Building Hope',
                description: 'We established 15 community kitchens in underserved neighborhoods, providing hot meals daily while creating jobs and teaching culinary skills to local residents. This program goes beyond just feeding people—it creates opportunities for economic empowerment and community building.',
                stats: [
                  { value: '5,000+', label: 'Meals Served Daily' },
                  { value: '50', label: 'Jobs Created' },
                  { value: '200', label: 'Volunteers Trained' },
                ],
              },
              {
                title: 'Back to School Drive',
                subtitle: 'Empowering Education for Every Child',
                description: 'Annual program providing backpacks, school supplies, and technology to students from low-income families, ensuring they start the school year prepared. We believe every child deserves the tools they need to succeed in the classroom and beyond.',
                stats: [
                  { value: '10,000+', label: 'Students Equipped' },
                  { value: '500', label: 'Laptops Distributed' },
                  { value: '100%', label: 'Graduation Rate Increase' },
                ],
              },
              {
                title: 'Clean Water Project',
                subtitle: 'Bringing Life-Saving Resources',
                description: 'Building sustainable water infrastructure in communities without reliable access to clean water, including wells, filtration systems, and hygiene education. Access to clean water is a fundamental human right, and we are working to make it a reality for all.',
                stats: [
                  { value: '30+', label: 'Wells Installed' },
                  { value: '50,000', label: 'People Served' },
                  { value: '80%', label: 'Reduction in Waterborne Illness' },
                ],
              },
            ].map((campaign, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="relative group">
                    <img
                      src="/COVER.png"
                      alt={campaign.title}
                      className="w-full h-[400px] object-cover rounded-3xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#6B2C91]/80 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                      <button className="bg-[#E8C547] text-[#6B2C91] px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <Play size={20} fill="currentColor" />
                        WATCH THE VIDEO
                      </button>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-4xl md:text-5xl font-black text-[#6B2C91] mb-2 leading-tight">
                        {campaign.title}
                      </h2>
                      <p className="text-xl font-bold text-[#E8C547]">{campaign.subtitle}</p>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed">
                      {campaign.description}
                    </p>

                    <div className="grid grid-cols-3 gap-4 pt-6">
                      {campaign.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-3xl md:text-4xl font-black text-[#6B2C91]">
                            {stat.value}
                          </div>
                          <div className="text-sm font-bold text-gray-600 mt-1">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <button className="bg-[#6B2C91] text-white px-10 py-4 rounded-full font-black text-lg hover:bg-[#8B3CB1] transform hover:scale-105 transition-all shadow-lg">
                        DONATE NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#6B2C91] to-[#8B3CB1] relative overflow-hidden">
        <DecorativeCircle color="gold" size="large" position="top-10 right-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              PAST CAMPAIGNS
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Completed projects that have made lasting impact in communities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Holiday Food Drive',
                impact: '100,000 meals distributed',
                year: '2023',
              },
              {
                title: 'Disaster Relief Fund',
                impact: '5,000 families supported',
                year: '2023',
              },
              {
                title: 'School Rebuild Project',
                impact: '3 schools renovated',
                year: '2022',
              },
            ].map((past, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-2xl"
              >
                <img
                  src="/COVER.png"
                  alt={past.title}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6B2C91] via-[#6B2C91]/60 to-transparent flex flex-col justify-end p-8">
                  <span className="text-[#E8C547] font-bold text-sm mb-2">{past.year}</span>
                  <h3 className="text-2xl font-black text-white mb-2">{past.title}</h3>
                  <p className="text-white font-medium">{past.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#6B2C91] mb-6">
            Want to Support Our Work?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
            Every contribution helps us launch new campaigns and expand our impact in communities that need it most
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#6B2C91] text-white px-12 py-5 rounded-full font-black text-xl hover:bg-[#8B3CB1] transform hover:scale-105 transition-all shadow-lg">
              DONATE TODAY
            </button>
            <button className="bg-[#E8C547] text-[#6B2C91] px-12 py-5 rounded-full font-black text-xl hover:bg-[#F5D76E] transform hover:scale-105 transition-all shadow-lg">
              BECOME A VOLUNTEER
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
