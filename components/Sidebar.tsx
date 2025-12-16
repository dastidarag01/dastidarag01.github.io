
import React, { useState } from 'react';
import { Home, Library } from 'lucide-react';
import { SKILLS } from '../constants';

interface SidebarProps {
  scrollToTop: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ scrollToTop }) => {
  const [filter, setFilter] = useState('All');

  const filteredSkills = SKILLS.filter(skill => {
    if (filter === 'All') return true;
    // Map aesthetic categories to actual data categories if needed, or assume they match
    // Capitalize first letter to match data if needed, but data has "Backend", "Frontend" etc.
    // Data has "Tools", "Cloud"
    return skill.category === filter;
  });
  return (
    <div className="w-0 md:w-[350px] bg-black flex flex-col h-full flex-shrink-0 text-[#b3b3b3] p-2 gap-2 hidden md:flex font-sans">
      {/* Top Controls (Home) */}
      <div className="bg-[#121212] rounded-lg p-5 flex flex-col gap-5">
        <button
          onClick={scrollToTop}
          className="flex items-center gap-5 text-[#b3b3b3] hover:text-white transition-colors font-bold"
        >
          <Home size={24} className="text-[#b3b3b3] group-hover:text-white" />
          <span className="text-base">Home</span>
        </button>

      </div>

      {/* Your Library Area */}
      <div className="bg-[#121212] rounded-lg flex-1 flex flex-col overflow-hidden relative">

        {/* Library Header */}
        <div className="px-4 pt-4 pb-2">
          <div className="flex items-center justify-between mb-4">
            <button
              className="flex items-center gap-2 text-[#b3b3b3] hover:text-white transition-colors group cursor-pointer"
              onClick={() => setFilter('All')}
            >
              <Library size={24} className="group-hover:text-white transition-colors" />
              <span className="text-base font-bold">Technical Skills</span>
            </button>

          </div>

          {/* Pill Filters */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 mask-gradient">
            {['All', 'Backend', 'Frontend', 'Cloud', 'ML', 'Tools'].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${filter === cat
                  ? 'bg-white text-black'
                  : 'bg-[#232323] text-white hover:bg-[#2a2a2a]'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>



        {/* Scrollable List */}
        <div className="flex-1 overflow-y-auto custom-scrollbar hover:overflow-y-scroll pl-2">
          {filteredSkills.map((skill, i) => (
            <div key={i} className="flex items-center gap-3 p-2 rounded-md hover:bg-[#1a1a1a] cursor-default group transition-colors mx-2">
              <div className="w-12 h-12 rounded-sm bg-[#333] flex-shrink-0 overflow-hidden shadow-lg relative group-hover:shadow-xl transition-all">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-full h-full object-cover p-2 opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex flex-col flex-1 min-w-0 justify-center">
                <span className={`font-medium text-[15px] truncate ${filter === 'All' && skill.proficiency > 90 ? 'text-[#1ed760]' : 'text-white'}`}>
                  {skill.name}
                </span>
                <div className="flex items-center gap-1.5 text-[#b3b3b3] text-[13px] truncate">
                  <span className="px-1 rounded bg-[#2a2a2a] text-[10px] uppercase font-bold tracking-wider">{skill.category}</span>
                  {/* <span className="text-xs">• {skill.proficiency}%</span> */}
                  <div className="w-32 h-1 bg-[#333] rounded-full ml-1 overflow-hidden">
                    <div className="h-full bg-[#888] group-hover:bg-[#1ed760] transition-colors duration-300" style={{ width: `${skill.proficiency}%` }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
