import { Megaphone } from 'lucide-react';

interface PromoBarProps {
  onNavigate: (page: string) => void;
}

export default function PromoBar({ onNavigate }: PromoBarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-[#E8C547] to-[#F5D76E] text-[#6B2C91] shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-10 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <Megaphone size={18} className="shrink-0" />
            <span className="font-semibold text-sm sm:text-base truncate">
              Current impact projects are live — get involved today!
            </span>
          </div>
          <button
            onClick={() => onNavigate('projects')}
            className="whitespace-nowrap text-xs sm:text-sm font-extrabold underline underline-offset-2 hover:opacity-90"
          >
            Explore projects
          </button>
        </div>
      </div>
    </div>
  );
}

