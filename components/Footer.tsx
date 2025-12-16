
import React, { useState } from 'react';
import { MapPin, Heart } from 'lucide-react';
import { STRINGS } from '../config/strings';

interface FooterProps {
  progress?: number;
}

const Footer: React.FC<FooterProps> = ({ progress = 0 }) => {
  const [isLiked, setIsLiked] = useState(false);



  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="h-24 bg-[#181818] border-t border-[#282828] px-4 flex items-center justify-between z-50 text-[#b3b3b3] relative">

      {/* Left: Info */}
      <div className="flex items-center gap-4 w-1/3 min-w-[180px]">
        {/* Location "Album Art" */}
        <div className="hidden sm:flex items-center justify-center w-16 h-16 bg-[#282828] rounded shadow-lg group flex-shrink-0 hover:bg-[#333] transition-colors cursor-default">
          <MapPin size={28} className="text-[#1ed760] group-hover:scale-110 transition-transform duration-300" />
        </div>

        <div className="flex flex-col justify-center min-w-0">
          <span className="text-white text-base font-bold truncate">
            {STRINGS.IDENTITY.LOCATION}
          </span>
          <span className="text-sm text-[#b3b3b3] truncate">
            {STRINGS.IDENTITY.COUNTRY}
          </span>
        </div>

      </div>

      {/* Center: Contact CTA & Reading Progress */}
      <div className="flex flex-col items-center w-1/3 max-w-[722px] gap-2">
        <div className="flex items-center gap-6">
          <button
            onClick={toggleLike}
            className={`transition-colors hover:scale-110 active:scale-90 transform duration-200 ${isLiked ? 'text-[#1ed760]' : 'text-[#b3b3b3] hover:text-white'}`}
            aria-label="Save to Your Library"
          >
            <Heart size={32} fill={isLiked ? "#1ed760" : "none"} />
          </button>
        </div>

        {/* Scroll/Reading Progress Bar */}
        <div className="w-full flex items-center gap-2 text-xs font-mono mt-1">
          <div className="h-1 bg-[#4d4d4d] rounded-full flex-1 group relative overflow-hidden">
            <div
              className="h-full bg-[#1ed760] rounded-full transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Right: Spacer to balance layout */}
      <div className="flex items-center justify-end gap-3 w-1/3 min-w-[180px]">
      </div>
    </div >
  );
};

export default Footer;
