import { useState } from 'react';
import { Play, Image as ImageIcon, Youtube, Facebook, Instagram } from 'lucide-react';
import DecorativeCircle from '../components/DecorativeCircle';

type MediaType = 'all' | 'videos' | 'photos';

interface GalleryItem {
  id: string;
  type: 'video' | 'photo';
  title: string;
  description: string;
  thumbnail: string;
  videoUrl?: string;
  category: string;
}

export default function Gallery() {
  const [filter, setFilter] = useState<MediaType>('all');

  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      type: 'video',
      title: 'We Took Street Kids to a Mall — What Happened Melted My Heart 💔',
      description: 'We took underprivileged kids to a mall and told them — “Get whatever you want.” The smiles, the hugs, the pure joy… it’s something you’ll never forget.',
      thumbnail: '/sl_shoping.jpg',
      // store only the YouTube video ID so the embed iframe works: https://www.youtube.com/watch?v=9WT-MwF3L7w
      videoUrl: '9WT-MwF3L7w',
      category: 'Education',
    },
    {
      id: '2',
      type: 'photo',
      title: 'Hearts in Action: Multi-Generational Care',
      description: 'Spreading joy to children and elders in our community',
      thumbnail: '/sl_shoping_2.jpg',
      category: 'Community',
    },
    {
      id: '3',
      type: 'photo',
      title: 'Partnership with Bidyanondo Foundation',
      description: 'Providing educational support and meals to children in need',
      thumbnail: '/sl_3.jpg',
      category: 'Partnership',
    },
    {
      id: '4',
      type: 'photo',
      title: 'Hope for Street Children',
      description: 'Reaching out with warm meals and school supplies',
      thumbnail: '/sl_4.jpg',
      category: 'Outreach',
    },
    {
      id: '5',
      type: 'photo',
      title: 'Community Impact',
      description: 'Creating lasting change through gratitude and action',
      thumbnail: '/COVER.png',
      category: 'Community',
    },
    {
      id: '6',
      type: 'video',
      title: 'Our Mission in Action',
      description: 'See how we are helping children experience the joy of childhood',
      thumbnail: '/sl_1.jpg',
      videoUrl: '',
      category: 'Mission',
    },
    {
      id: '2',
      type: 'photo',
      title: 'Hearts in Action: Multi-Generational Care',
      description: 'Spreading joy to children and elders in our community',
      thumbnail: '/sl_2.jpg',
      category: 'Community',
    },
    {
      id: '2',
      type: 'photo',
      title: '',
      description: '',
      thumbnail: '/sl_6.jpg',
      category: 'Community',
    },
    {
      id: '2',
      type: 'photo',
      title: '',
      description: '',
      thumbnail: '/sl_8.jpg',
      category: 'Community',
    },
    {
      id: '2',
      type: 'photo',
      title: '',
      description: '',
      thumbnail: '/sl_9.jpg',
      category: 'Community',
    },
    {
      id: '2',
      type: 'photo',
      title: '',
      description: '',
      thumbnail: '/sl_10.jpg',
      category: 'Community',
    },
    {
      id: '2',
      type: 'photo',
      title: '',
      description: '',
      thumbnail: '/sl_11.jpg',
      category: 'Community',
    },
    {
      id: '2',
      type: 'photo',
      title: '',
      description: '',
      thumbnail: '/sl_12.jpg',
      category: 'Community',
    },
    {
      id: '2',
      type: 'photo',
      title: '',
      description: '',
      thumbnail: '/sl_13.jpg',
      category: 'Community',
    },
    {
      id: '2',
      type: 'photo',
      title: '',
      description: '',
      thumbnail: '/sl_14.jpg',
      category: 'Community',
    },
    {
      id: '2',
      type: 'photo',
      title: '',
      description: '',
      thumbnail: '/sl_15.jpg',
      category: 'Community',
    },
    {
      id: '2',
      type: 'photo',
      title: '',
      description: '',
      thumbnail: '/sl_16.jpg',
      category: 'Community',
    },
    {
      id: '2',
      type: 'photo',
      title: '',
      description: '',
      thumbnail: '/sl_17.jpg',
      category: 'Community',
    },
    {
      id: '2',
      type: 'photo',
      title: '',
      description: '',
      thumbnail: '/sl_19.jpg',
      category: 'Community',
    },
    {
      id: '2',
      type: 'photo',
      title: '',
      description: '',
      thumbnail: '/sl_20.jpg',
      category: 'Community',
    },
    {
      id: '2',
      type: 'photo',
      title: '',
      description: '',
      thumbnail: '/sl_21.jpg',
      category: 'Community',
    },
    
  ];

  const filteredItems = galleryItems.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'videos') return item.type === 'video';
    if (filter === 'photos') return item.type === 'photo';
    return true;
  });

  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-[#6B2C91] to-[#8B3CB1] overflow-hidden">
        <DecorativeCircle color="gold" size="large" position="top-0 -left-20" />
        <DecorativeCircle color="gold" size="medium" position="bottom-0 -right-10" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Our Impact Gallery
          </h1>
          <p className="text-xl md:text-2xl text-white font-medium max-w-3xl mx-auto leading-relaxed">
            See the faces, stories, and moments that showcase our mission in action
          </p>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { value: 'all', label: 'All Media', icon: ImageIcon },
              { value: 'videos', label: 'Videos', icon: Play },
              { value: 'photos', label: 'Photos', icon: ImageIcon },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value as MediaType)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-lg transition-all transform hover:scale-105 ${
                  filter === tab.value
                    ? 'bg-[#6B2C91] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <tab.icon size={20} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <DecorativeCircle color="purple" size="large" position="top-0 right-0" />
        <DecorativeCircle color="gold" size="medium" position="bottom-0 left-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 ${
                  index % 5 === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <div className="relative group cursor-pointer">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    style={{
                      height: index % 5 === 0 ? '500px' : '300px',
                      minHeight: index % 5 === 0 ? '500px' : '300px'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {item.type === 'video' && item.videoUrl && (
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      onClick={() => setSelectedVideo(item.videoUrl ?? null)}
                    >
                      <div className="bg-[#E8C547] w-20 h-20 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-2xl">
                        <Play className="text-[#6B2C91] ml-1" size={32} fill="currentColor" />
                      </div>
                    </div>
                  )}

                  <div className="absolute top-4 right-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg ${
                      item.type === 'video'
                        ? 'bg-[#E8C547] text-[#6B2C91]'
                        : 'bg-white/90 text-[#6B2C91]'
                    }`}>
                      {item.category}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <h3 className="text-xl font-black mb-2">{item.title}</h3>
                    <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-500 font-medium">No media found in this category</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#6B2C91] to-[#8B3CB1] relative overflow-hidden">
        <DecorativeCircle color="gold" size="large" position="top-10 left-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Follow Our Journey
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed">
            Stay connected and see our latest updates on social media
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 px-4">
            <a
              href="https://www.youtube.com/@TheGratefulTribe"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-6 rounded-full hover:bg-white/20 transition-all transform hover:scale-110 backdrop-blur-sm"
              aria-label="YouTube"
            >
              <Youtube size={36} className="text-white" />
            </a>
            <a
              href="https://www.facebook.com/TheGratefulTribe"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-6 rounded-full hover:bg-white/20 transition-all transform hover:scale-110 backdrop-blur-sm"
              aria-label="Facebook"
            >
              <Facebook size={36} className="text-white" />
            </a>
            <a
              href="#"
              className="bg-white/10 p-6 rounded-full hover:bg-white/20 transition-all transform hover:scale-110 opacity-50 cursor-not-allowed backdrop-blur-sm"
              aria-label="Instagram"
            >
              <Instagram size={36} className="text-white" />
            </a>
            <a
              href="#"
              className="bg-white/10 p-6 rounded-full hover:bg-white/20 transition-all transform hover:scale-110 opacity-50 cursor-not-allowed backdrop-blur-sm"
              aria-label="TikTok"
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a
              href="https://t.me/TheGratefulTribe"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-6 rounded-full hover:bg-white/20 transition-all transform hover:scale-110 backdrop-blur-sm"
              aria-label="Telegram"
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
              </svg>
            </a>
          </div>

          <a
            href="https://t.me/TheGratefulTribe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#E8C547] text-[#6B2C91] px-12 py-5 rounded-full font-black text-xl hover:bg-[#F5D76E] transform hover:scale-105 transition-all shadow-2xl"
          >
            Join Our Community
          </a>
        </div>
      </section>

      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white text-4xl font-bold hover:text-[#E8C547] transition-colors"
            >
              ×
            </button>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* <footer className="bg-[#6B2C91] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <img src="/TGT-LOGO-1.png" alt="TGT Logo" className="h-20 w-20 mx-auto mb-6" />
            <h3 className="text-3xl font-black mb-3">The Grateful Tribe</h3>
            <p className="text-lg text-gray-300 mb-8">Creating positive change through gratitude and action</p>

            <div className="flex justify-center gap-6 mb-8">
              <a
                href="https://www.youtube.com/@TheGratefulTribe"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-all transform hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube size={28} />
              </a>
              <a
                href="https://www.facebook.com/TheGratefulTribe"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-all transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={28} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-all transform hover:scale-110 opacity-50 cursor-not-allowed"
                aria-label="Instagram"
              >
                <Instagram size={28} />
              </a>
              <a
                href="https://t.me/TheGratefulTribe"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-all transform hover:scale-110"
                aria-label="Telegram"
              >
                <svg width="28" height="28" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M120 0C53.729 0 0 53.729 0 120s53.729 120 120 120 120-53.729 120-120S186.271 0 120 0z" fill="#2AABEE"/>
                  <path d="M48 124.5l30.5 11.5 12 38 19-27 48 29L48 124.5z" fill="#fff" opacity="0.9"/>
                  <path d="M48 124.5L192 72l-48 52-19 27-12-38L48 124.5z" fill="#fff" opacity="0.6"/>
                </svg>
              </a>
      
              
            </div>

            <p className="text-sm text-gray-400">&copy; 2024 The Grateful Tribe. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
      {/* Footer removed - now using global footer component */}
    </div>
  );
}
