import React, { useState } from 'react';
import { WORK_EXPERIENCE, EDUCATION, CP_PROFILES, PERSONAL_PROJECTS } from '../../config/data';
import { STRINGS } from '../../config/strings';
import { IMAGES } from '../../config/assets';
import { BadgeCheck, Play, Clock, Github, Linkedin, ChevronUp } from 'lucide-react';

const Home: React.FC = () => {
    const [expandedWorkId, setExpandedWorkId] = useState<string | null>(null);
    const [expandedEduId, setExpandedEduId] = useState<string | null>(null);

    const toggleWorkAccordion = (id: string) => {
        setExpandedWorkId(expandedWorkId === id ? null : id);
    };

    const toggleEduAccordion = (id: string) => {
        setExpandedEduId(expandedEduId === id ? null : id);
    };

    const [expandedProjId, setExpandedProjId] = useState<string | null>(null);
    const toggleProjAccordion = (id: string) => {
        setExpandedProjId(expandedProjId === id ? null : id);
    };




    return (
        <div className="pb-24 bg-gradient-to-b from-[#1e3264] via-[#121212] to-[#121212] min-h-full font-sans">

            {/* 1. HERO HEADER */}
            <div className="flex flex-col md:flex-row items-end gap-6 p-6 md:p-8 pb-6 pt-24 md:pt-32 bg-gradient-to-b from-transparent to-[#121212]/60">
                {/* Profile Image */}
                <div className="w-48 h-48 md:w-60 md:h-60 shadow-[0_8px_40px_rgba(0,0,0,0.6)] rounded-full md:rounded-sm overflow-hidden flex-shrink-0 mx-auto md:mx-0 bg-[#333] group hover:scale-[1.02] transition-transform duration-300">
                    <img
                        src={IMAGES.PROFILE.MAIN}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex flex-col gap-3 w-full text-center md:text-left z-10 max-w-4xl">
                    <div className="flex items-center justify-center md:justify-start gap-2 text-white">
                        <BadgeCheck size={24} className="text-[#3d91f4] fill-white bg-[#3d91f4] rounded-full" />
                        <span className="text-sm font-bold tracking-widest uppercase flex items-center gap-1">{STRINGS.LABELS.VERIFIED_ARTIST}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-lg">
                        {STRINGS.IDENTITY.NAME}
                    </h1>
                    <p className="text-[#e0e0e0] font-semibold text-base md:text-lg drop-shadow-md opacity-90">
                        {STRINGS.IDENTITY.TAGLINE}
                    </p>
                    <p className="text-[#b3b3b3] font-normal text-sm md:text-base leading-relaxed mt-2 opacity-95 max-w-3xl">
                        {STRINGS.IDENTITY.BIO_SHORT}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-center md:justify-start gap-4 mt-2">
                        <a
                            href={`mailto:${STRINGS.IDENTITY.EMAIL}`}
                            className="flex items-center gap-2 bg-[#1ed760] text-black px-8 py-3.5 rounded-full font-bold hover:scale-105 hover:bg-[#1fdf64] transition-all uppercase tracking-widest text-sm shadow-lg"
                        >
                            <Play size={20} fill="black" />
                            LET'S CONNECT
                        </a>

                        <div className="flex gap-4 ml-4">
                            <a href={STRINGS.IDENTITY.GITHUB} target="_blank" rel="noreferrer" className="text-[#b3b3b3] hover:text-white hover:scale-110 transition-all"><Github size={32} /></a>
                            <a href={STRINGS.IDENTITY.LINKEDIN} target="_blank" rel="noreferrer" className="text-[#b3b3b3] hover:text-white hover:scale-110 transition-all"><Linkedin size={32} /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-6 md:px-8 space-y-12 mt-6 max-w-[1920px] mx-auto">

                {/* 2. ARTIST PICK (INTRO) */}
                <section>
                    <div className="flex items-start gap-4">
                        <div className="flex flex-col gap-3 max-w-5xl">
                            <h2 className="text-2xl font-bold text-white tracking-tight">{STRINGS.LABELS.ARTIST_PICK}</h2>
                            <div className="flex gap-4 items-start bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors cursor-default">
                                <div className="w-12 h-12 rounded-md bg-[#333] flex-shrink-0 overflow-hidden">
                                    <img src={IMAGES.PROFILE.INTRO} alt="Intro" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-5 h-5 rounded-full overflow-hidden">
                                            <img src={IMAGES.PROFILE.SMALL} alt="Avatar" />
                                        </div>
                                        <span className="text-[#b3b3b3] text-sm font-medium">{STRINGS.LABELS.POSTED_BY} {STRINGS.IDENTITY.NAME}</span>
                                    </div>
                                    <p className="text-white font-medium text-sm leading-relaxed">
                                        {STRINGS.IDENTITY.BIO_LONG}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. WORK EXPERIENCE (THE SETLIST) */}
                <section>
                    <div className="flex items-center justify-between mb-4 pt-4">
                        <h2 className="text-2xl font-bold text-white tracking-tight">{STRINGS.SECTIONS.WORK.TITLE}</h2>
                    </div>

                    {/* Table Header */}
                    <div className="grid grid-cols-[20px_4fr_3fr_1fr] md:grid-cols-[20px_6fr_4fr_3fr_1fr] gap-4 text-[#b3b3b3] border-b border-[#282828] px-4 py-2 text-sm uppercase mb-2 font-medium tracking-wider sticky top-16 bg-[#121212] z-10">
                        <span>{STRINGS.SECTIONS.WORK.HEADERS.NUM}</span>
                        <span>{STRINGS.SECTIONS.WORK.HEADERS.TITLE}</span>
                        <span className="hidden md:block">{STRINGS.SECTIONS.WORK.HEADERS.COMPANY}</span>
                        <span className="hidden md:block">{STRINGS.SECTIONS.WORK.HEADERS.LOCATION}</span>
                        <span className="text-right flex justify-end items-center gap-1"><Clock size={16} /></span>
                    </div>

                    <div className="flex flex-col">
                        {WORK_EXPERIENCE.map((exp, index) => {
                            const isExpanded = expandedWorkId === exp.id;
                            return (
                                <div key={exp.id} className="flex flex-col">
                                    <div
                                        onClick={() => toggleWorkAccordion(exp.id)}
                                        className={`group grid grid-cols-[20px_4fr_3fr_1fr] md:grid-cols-[20px_6fr_4fr_3fr_1fr] gap-4 items-center px-4 py-3 rounded-md transition-colors cursor-pointer ${isExpanded ? 'bg-[#2a2a2a]' : 'hover:bg-[#ffffff1a]'}`}
                                    >
                                        <span className={`text-[#b3b3b3] font-mono group-hover:hidden ${isExpanded ? 'text-[#1ed760]' : ''}`}>{index + 1}</span>
                                        <span className="hidden group-hover:block text-white">
                                            {isExpanded ? <ChevronUp size={16} className="text-[#1ed760]" /> : <Play size={14} fill="white" />}
                                        </span>

                                        <div className="flex flex-col pr-4 overflow-hidden">
                                            <span className={`font-medium text-base truncate ${isExpanded ? 'text-[#1ed760]' : 'text-white'}`}>{exp.title}</span>
                                            <span className="text-[#b3b3b3] text-sm truncate group-hover:text-white transition-colors">{exp.subtitle}</span>
                                        </div>

                                        <div className="hidden md:flex items-center gap-3 text-[#b3b3b3] hover:text-white transition-colors truncate">
                                            <img src={exp.imageUrl} alt={exp.role} className="w-6 h-6 object-contain opacity-80 group-hover:opacity-100" />
                                            <span className="font-medium text-white">{exp.role}</span>
                                        </div>

                                        <div className="hidden md:flex items-center text-[#b3b3b3] text-sm">
                                            <span>{exp.location}</span>
                                        </div>

                                        <div className="text-[#b3b3b3] text-sm text-right flex flex-col justify-center min-w-[80px]">
                                            <span className="font-medium text-white">{exp.startDate}</span>
                                            <span className="text-xs opacity-70">{exp.endDate}</span>
                                        </div>
                                    </div>

                                    {/* Lyrics / Details Accordion */}
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[600px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                                        <div className="px-8 py-6 text-[#e0e0e0] bg-[#1a1a1a] mx-2 rounded-b-md border-l-[3px] border-[#1ed760]">
                                            <h4 className="text-xs font-bold uppercase text-[#b3b3b3] mb-4 tracking-widest">Role Description</h4>
                                            <ul className="space-y-3 pl-2 text-[15px] leading-relaxed text-gray-200">
                                                {exp.bullets?.map((bullet, i) => (
                                                    <li key={i} className="flex gap-3">
                                                        <span className="text-[#1ed760] mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#1ed760]"></span>
                                                        <span>{bullet}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="mt-6 flex gap-2 flex-wrap">
                                                {exp.techStack.map(tech => (
                                                    <span key={tech} className="text-xs font-bold border border-[#333] px-3 py-1 rounded-full text-[#b3b3b3] hover:text-white hover:border-white transition-colors cursor-default">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>

                {/* 4. EDUCATION (ALBUMS) */}
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-white tracking-tight">{STRINGS.SECTIONS.EDUCATION.TITLE}</h2>
                        <span className="text-xs font-bold uppercase text-[#b3b3b3] tracking-wider">{STRINGS.SECTIONS.EDUCATION.SUBTITLE}</span>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                        {EDUCATION.map((edu) => {
                            const isExpanded = expandedEduId === edu.id;
                            return (
                                <div
                                    key={edu.id}
                                    onClick={() => toggleEduAccordion(edu.id)}
                                    className={`bg-[#181818] p-5 rounded-lg hover:bg-[#282828] transition-all duration-300 cursor-pointer group flex flex-col sm:flex-row gap-5 shadow-lg hover:shadow-xl ${isExpanded ? 'bg-[#282828]' : ''}`}
                                >
                                    {/* Album Art */}
                                    <div className="w-full sm:w-40 sm:h-40 flex-shrink-0 relative rounded-md overflow-hidden bg-[#000] shadow-2xl">
                                        <img
                                            src={edu.imageUrl}
                                            alt={edu.title}
                                            className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="bg-[#1ed760] rounded-full p-2 shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                                                <Play size={20} fill="black" className="ml-1 text-black" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col flex-1 min-w-0">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-bold text-white text-lg truncate pr-2">{edu.title}</h3>
                                                <p className="text-[#b3b3b3] text-sm font-medium">{edu.subtitle}</p>
                                            </div>
                                            <span className="text-[#1ed760] font-bold text-xs border border-[#1ed760] px-2 py-0.5 rounded uppercase">{edu.stats}</span>
                                        </div>

                                        {/* Date Range */}
                                        <div className="text-sm text-[#b3b3b3] mt-0.5 mb-2 font-mono">
                                            {edu.startDate} - {edu.endDate}
                                        </div>

                                        <p className="text-xs text-[#999] mt-2 mb-3 line-clamp-2">{edu.description}</p>

                                        {/* Coursework / Skills Tags */}
                                        {edu.techStack && edu.techStack.length > 0 && (
                                            <div className="flex flex-wrap gap-1.5 mb-3">
                                                {(isExpanded ? edu.techStack : edu.techStack.slice(0, 4)).map(t => (
                                                    <span key={t} className="text-[10px] bg-[#333] text-[#b3b3b3] px-1.5 py-0.5 rounded border border-transparent hover:border-[#555] transition-colors">{t}</span>
                                                ))}
                                            </div>
                                        )}

                                        {/* Bullets */}
                                        <ul className="text-xs text-[#b3b3b3] space-y-1 list-disc pl-4 mt-auto">
                                            {(isExpanded ? edu.bullets : edu.bullets?.slice(0, 2))?.map((b, i) => (
                                                <li key={i} className={isExpanded ? '' : 'line-clamp-1'}>{b}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>

                {/* 5. CP (ON TOUR) */}
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-white">{STRINGS.SECTIONS.CP.TITLE} <span className="text-[#b3b3b3] font-normal text-lg ml-1">{STRINGS.SECTIONS.CP.SUBTITLE}</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {CP_PROFILES.map((item) => (
                            <a
                                key={item.id}
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-4 bg-[#181818] hover:bg-[#282828] p-4 rounded-md transition-all group border-l-4 border-transparent hover:border-[#1ed760] shadow-md"
                            >
                                {/* Replaced Date Box with Logo */}
                                <div className="w-16 h-16 bg-[#333] rounded-md flex items-center justify-center overflow-hidden flex-shrink-0 shadow-lg">
                                    <img src={item.imageUrl} alt={item.role} className="w-full h-full object-cover p-3" />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <span className="font-bold text-white group-hover:underline text-lg">{item.title}</span>
                                    <span className="text-[#b3b3b3] text-sm">{item.subtitle}</span>
                                    <span className="text-[#1ed760] text-xs font-bold uppercase tracking-wider">{item.stats}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>


                {/* 7. PROJECTS (LATEST RELEASES) - MOVED TO BOTTOM */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">{STRINGS.SECTIONS.PROJECTS.TITLE}</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {PERSONAL_PROJECTS.map(proj => {
                            const isExpanded = expandedProjId === proj.id;
                            return (
                                <div key={proj.id} className={`bg-[#181818] rounded-md p-3 flex gap-4 hover:bg-[#282828] transition-all duration-300 group shadow-lg items-start ${isExpanded ? 'bg-[#282828]' : ''}`}>
                                    <div className="w-20 h-20 bg-[#333] shadow-lg flex-shrink-0 relative rounded-sm overflow-hidden group-hover:shadow-xl transition-shadow" onClick={() => toggleProjAccordion(proj.id)}>
                                        <img src={proj.imageUrl} alt={proj.title} className={`w-full h-full object-cover transition-all duration-300 ${isExpanded ? 'opacity-40 scale-105' : ''}`} />
                                        <div className={`absolute inset-0 flex items-center justify-center transition-opacity cursor-pointer ${isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 bg-black/40'}`}>
                                            <div className="bg-[#1ed760] rounded-full p-1.5 shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                                                {isExpanded ? (
                                                    <ChevronUp fill="black" className="text-black" size={16} />
                                                ) : (
                                                    <Play fill="black" className="ml-0.5 text-black" size={16} />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col flex-1 min-w-0 justify-between h-full">
                                        <div className="flex justify-between items-start">
                                            <div className="flex flex-col">
                                                <h3 className="text-base font-bold text-white truncate pr-2">{proj.title}</h3>
                                                <p className="text-[#b3b3b3] text-xs font-medium">{proj.subtitle}</p>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                {proj.link && (
                                                    <a href={proj.link} target="_blank" rel="noreferrer" className="text-[#b3b3b3] hover:text-white transition-colors">
                                                        <Github size={18} />
                                                    </a>
                                                )}
                                                <span className="text-[#b3b3b3] text-[10px] font-bold border border-[#333] px-1.5 py-0.5 rounded uppercase hidden sm:block tracking-wider">{proj.date}</span>
                                            </div>
                                        </div>

                                        {isExpanded && (
                                            <p className="text-[#999] text-xs mt-2 leading-relaxed animate-fadeIn">{proj.description}</p>
                                        )}

                                        <div className="flex gap-1.5 flex-wrap mt-1.5">
                                            {proj.techStack.map(tag => (
                                                <span key={tag} className="text-[9px] uppercase font-bold tracking-wider bg-[#2a2a2a] text-[#b3b3b3] px-1.5 py-0.5 rounded-sm group-hover:bg-[#333] transition-colors border border-transparent group-hover:border-[#444]">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Home;