import { DollarSign, Calendar, Users, Heart, Share2, HandHeart } from 'lucide-react';
import DecorativeCircle from '../components/DecorativeCircle';

export default function Supporters() {
  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-[#6B2C91] to-[#8B3CB1] overflow-hidden">
        <DecorativeCircle color="gold" size="large" position="top-0 -left-20" />
        <DecorativeCircle color="gold" size="medium" position="bottom-0 -right-10" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Join Our Community
          </h1>
          <p className="text-xl md:text-2xl text-white font-medium max-w-3xl mx-auto leading-relaxed">
            Every contribution, big or small, creates ripples of change. Discover how you can make a difference
          </p>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <DecorativeCircle color="purple" size="large" position="top-0 right-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#6B2C91] mb-4">
              Ways to Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the way that works best for you to join our mission
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: 'One-Time Donation',
                description: 'Make an immediate impact with a single contribution that goes directly to communities in need',
                cta: 'Donate Now',
              },
              {
                icon: Calendar,
                title: 'Monthly Giving',
                description: 'Become a sustaining member and provide consistent support that helps us plan long-term programs',
                cta: 'Join Monthly',
              },
              {
                icon: Users,
                title: 'Volunteer',
                description: 'Share your time, skills, and passion by volunteering at events or joining our community programs',
                cta: 'Get Involved',
              },
              {
                icon: Share2,
                title: 'Spread the Word',
                description: 'Amplify our impact by sharing our mission with your network and on social media',
                cta: 'Share Now',
              },
              {
                icon: HandHeart,
                title: 'Corporate Partnership',
                description: 'Partner with us to create meaningful corporate social responsibility initiatives',
                cta: 'Partner With Us',
              },
              {
                icon: Heart,
                title: 'Legacy Giving',
                description: 'Create lasting change through planned giving and ensure your values live on',
                cta: 'Learn More',
              },
            ].map((way, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-gray-100"
              >
                <div className="bg-[#6B2C91] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <way.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-black text-[#6B2C91] mb-4">{way.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{way.description}</p>
                <button className="bg-[#E8C547] text-[#6B2C91] px-6 py-3 rounded-full font-bold hover:bg-[#F5D76E] transition-all transform hover:scale-105">
                  {way.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="/COVER.png"
                alt="Community Impact"
                className="rounded-3xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black text-[#6B2C91]">
                Your Impact Matters
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every supporter plays a vital role in our mission. Whether you give $10 or $10,000, volunteer once a month or spread the word to your friends, your contribution creates real, measurable change in people's lives.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-[#E8C547] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#6B2C91] font-black">✓</span>
                  </div>
                  <p className="text-gray-700">
                    <strong className="text-[#6B2C91]">$50</strong> can provide a week of meals for a family
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#E8C547] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#6B2C91] font-black">✓</span>
                  </div>
                  <p className="text-gray-700">
                    <strong className="text-[#6B2C91]">$150</strong> can supply school materials for 10 children
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#E8C547] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#6B2C91] font-black">✓</span>
                  </div>
                  <p className="text-gray-700">
                    <strong className="text-[#6B2C91]">$500</strong> can fund a community workshop or training program
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <DecorativeCircle color="gold" size="medium" position="bottom-0 left-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#6B2C91] mb-4">
              Supporter Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from members of our tribe who are making a difference
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Monthly Supporter',
                quote: 'Being part of The Grateful Tribe has shown me how small consistent actions create huge impacts. I love seeing the updates on how my monthly donation helps families.',
              },
              {
                name: 'Michael Chen',
                role: 'Volunteer',
                quote: 'Volunteering with TGT has been one of the most rewarding experiences of my life. The team is passionate, organized, and truly committed to making a difference.',
              },
              {
                name: 'Emily Rodriguez',
                role: 'Corporate Partner',
                quote: 'Partnering with The Grateful Tribe aligned perfectly with our company values. Their transparency and community-focused approach make them an ideal partner.',
              },
            ].map((story, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#6B2C91] to-[#8B3CB1] rounded-2xl p-8 text-white shadow-lg"
              >
                <p className="text-lg leading-relaxed mb-6 italic">"{story.quote}"</p>
                <div className="border-t border-white/20 pt-4">
                  <p className="font-black text-[#E8C547]">{story.name}</p>
                  <p className="text-sm text-gray-200">{story.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#6B2C91] to-[#8B3CB1]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of supporters who are helping us create lasting change
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#E8C547] text-[#6B2C91] px-12 py-5 rounded-full font-black text-xl hover:bg-[#F5D76E] transform hover:scale-105 transition-all shadow-lg">
              Start Giving
            </button>
            <button className="bg-white text-[#6B2C91] px-12 py-5 rounded-full font-black text-xl hover:bg-gray-100 transform hover:scale-105 transition-all shadow-lg">
              Contact Us
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
