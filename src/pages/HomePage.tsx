import { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, ArrowRight, Heart, DollarSign, Youtube, Facebook, Instagram } from 'lucide-react';
import CountUp from 'react-countup';
import DecorativeCircle from '../components/DecorativeCircle';

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hasStartedCounting, setHasStartedCounting] = useState(false);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isMuted) {
        videoRef.current.muted = false;
        setIsMuted(false);
      } else {
        videoRef.current.muted = true;
        setIsMuted(true);
      }
    }
  };

  useEffect(() => {
    setHasStartedCounting(true); // Start counter immediately since it's on the hero section

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStartedCounting(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div className="pt-20">
      <section className="relative flex items-center justify-center overflow-hidden bg-black">
        <div className="w-full relative min-h-[220px] sm:min-h-[320px]" style={{ aspectRatio: '16/9' }}>
          <div
            className="absolute inset-0 cursor-pointer group"
            onClick={handleVideoClick}
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-80"
              src="/website-intro.mp4"
            >
              <source src="/website-intro.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
            <button className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-black/50 p-3 sm:p-4 rounded-full hover:bg-black/70 transition-all backdrop-blur-sm z-30">
              {isMuted ? <VolumeX className="text-white" size={20} /> : <Volume2 className="text-white" size={20} />}
            </button>
          </div>

          <div 
            ref={counterRef}
            className="absolute inset-0 z-20 flex items-center justify-center"
          >
            <div className="w-full max-w-[90%] lg:max-w-[80%] mx-auto px-4 sm:px-0 py-4 sm:py-6">
              <div className="text-center">
                <div className="mb-4 sm:mb-6">
                  <div className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black text-white tracking-tight leading-none break-words">
                    {hasStartedCounting && (
                      <CountUp
                        start={0}
                        end={1000000}
                        duration={3}
                        separator=","
                        enableScrollSpy={false}
                        delay={0}
                        preserveValue={true}
                      />
                    )}
                  </div>
                  <p className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold text-white/90 mx-auto leading-tight mt-4 whitespace-normal break-words">
                    The Grateful Tribe aims to use 1st world opportunities in the digital economy to uplift causes and kids in 3rd world countries.
                  </p>
                </div>
                <div className="w-full max-w-2xl mx-auto">
                  {/* Progress bar container */}
                  <div className="h-3 sm:h-4 md:h-5 bg-[#6B2C91] rounded-full p-[3px] sm:p-1 backdrop-blur-sm mb-2">
                    {/* Progress bar fill - width is calculated as (current/total * 100) */}
                    <div 
                      className="h-full bg-gradient-to-r from-[#F5D76E] to-[#E8C547] rounded-full transition-all duration-1000 ease-out shadow-sm"
                      style={{ width: `${(5 / 1000000) * 100}%` }}
                    />
                  </div>
                  {/* Progress text */}
                  <p className="text-xs sm:text-sm md:text-base font-medium text-white/80 whitespace-normal break-words">
                    (5 of 1,000,000 children inspired so far)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 text-shadow">
            Changing Lives<br />Through Gratitude
          </h1>
          <p className="text-xl md:text-3xl font-medium mb-8 max-w-4xl mx-auto">
            Join our mission to create lasting impact in communities around the world
          </p>
          <a
            href="https://t.me/TheGratefulTribe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#E8C547] text-[#6B2C91] px-10 py-5 rounded-full font-black text-xl hover:bg-[#F5D76E] transform hover:scale-105 transition-all shadow-2xl">
            Get Involved <ArrowRight size={24} />
          </a>
        </div> */}
      </section>

      

      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <DecorativeCircle color="purple" size="medium" position="top-20 right-20" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-[#6B2C91] mb-6">
              
              What is The Grateful Tribe?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Join our projects and earn money while helping children in need. By being part of The Grateful Tribe, you create opportunities for yourself while supporting a mission to give kids the childhood they deserve. Make an impact and grow your income at the same time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-[#6B2C91] to-[#8B3CB1] rounded-2xl p-8 text-white text-center transform hover:scale-105 transition-all shadow-xl">
              <div className="bg-[#E8C547] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-[#6B2C91]" size={40} />
              </div>
              <h3 className="text-2xl font-black mb-3">Uplifting Children</h3>
              <p className="text-lg leading-relaxed">
                We use our profits to bring joys of childhood back to kids.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#E8C547] to-[#F5D76E] rounded-2xl p-8 text-[#6B2C91] text-center transform hover:scale-105 transition-all shadow-xl">
              <div className="bg-[#6B2C91] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="text-[#E8C547]" size={40} />
              </div>
              <h3 className="text-2xl font-black mb-3">Empowering Everyone </h3>
              <p className="text-lg leading-relaxed">
                We learn and share the skills needed to create part time to full time to live changing income.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                const event = new CustomEvent('navigate', { detail: 'projects' });
                window.dispatchEvent(event);
              }}
              className="inline-flex items-center gap-2 bg-[#6B2C91] text-white px-12 py-6 rounded-full font-black text-xl hover:bg-[#8B3CB1] transform hover:scale-105 transition-all shadow-2xl"
            >
              Join the Projects <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <DecorativeCircle color="purple" size="large" position="top-0 right-0" />
        <DecorativeCircle color="gold" size="medium" position="bottom-0 left-0" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-black text-[#6B2C91] mb-8">
              A Global Tribe Making A Global Impact
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              As a community we come together online to earn and share the skills and income opportunities that help us make money from our phones using the latest and greatest in financial tech, content creation and Ai tools. By being a member of The Grateful Tribe, you open opportunities and connections for yourself while supporting a mission to give kids in need a brighter and more joyful childhood.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-gradient-to-r from-[#6B2C91] to-[#8B3CB1] relative overflow-hidden">
        <DecorativeCircle color="gold" size="large" position="top-0 left-0" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* On mobile: image first, then description, then button last. On md+ screens: text left, image right */}
            <div className="order-1 md:order-2">
              <img
                src="/sl_founder.jpg"
                alt="Sal Khan - Founder"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
            <div className="text-white order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Meet Our Founder
              </h2>
              <p className="text-lg md:text-xl leading-relaxed mb-8">
                Sal Khan's vision and dedication have shaped The Grateful Tribe into a force for positive change. Learn more about the journey and the inspiration behind our mission.
              </p>
              <div className="flex justify-start md:justify-start">
                <button
                  onClick={() => {
                    const event = new CustomEvent('navigate', { detail: 'founder' });
                    window.dispatchEvent(event);
                  }}
                  className="bg-[#E8C547] text-[#6B2C91] px-10 py-4 rounded-full font-black text-lg hover:bg-[#F5D76E] transform hover:scale-105 transition-all shadow-xl"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer removed - now using global footer component */}
    </div>
  );
}
