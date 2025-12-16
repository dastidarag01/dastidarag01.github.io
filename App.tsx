

import React, { useState, useRef } from 'react';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './components/views/Home';

const App: React.FC = () => {
   const [headerOpacity, setHeaderOpacity] = useState(0);
   const [scrollProgress, setScrollProgress] = useState(0);
   const mainContentRef = useRef<HTMLDivElement>(null);

   const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
      const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;

      // Header Opacity: 0 at top, 1 after 200px scroll
      const opacity = Math.min(scrollTop / 200, 1);
      setHeaderOpacity(opacity);

      // Scroll Progress: 0 to 100 based on scroll position
      const maxScroll = scrollHeight - clientHeight;
      const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
      setScrollProgress(progress);
   };

   const scrollToTop = () => {
      if (mainContentRef.current) {
         mainContentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
   };

   return (
      <div className="h-screen w-screen bg-black flex flex-col overflow-hidden text-white font-sans selection:bg-[#1ed760] selection:text-black">
         <div className="flex-1 flex overflow-hidden p-0 md:p-2 md:gap-2 relative">
            <Sidebar scrollToTop={scrollToTop} />

            {/* Main Content Container */}
            <div className="flex-1 bg-[#121212] md:rounded-lg relative overflow-hidden flex flex-col">
               {/* Sticky Header */}
               <header
                  className="absolute top-0 left-0 right-0 h-16 px-6 flex items-center justify-between z-30 transition-colors duration-200"
                  style={{ backgroundColor: `rgba(18, 18, 18, ${headerOpacity})` }}
               >
                  <div className="flex gap-4">
                  </div>

                  <div className="flex items-center gap-4">
                  </div>
               </header>

               {/* Scrollable Single Page View */}
               <main
                  ref={mainContentRef}
                  className="flex-1 overflow-y-auto custom-scrollbar relative"
                  onScroll={handleScroll}
               >
                  <Home />
               </main>
            </div>
         </div>

         <Footer progress={scrollProgress} />
      </div>
   );
};

export default App;
