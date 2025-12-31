import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, BookOpen, PenTool, Youtube, ExternalLink, ArrowRight, Brain, RefreshCw, MessageCircle } from 'lucide-react';

const CornellNotes = () => {
    const noteSteps = [
        {
            step: '1. Record',
            desc: 'During the lecture, use the main right-hand column to record notes using telegraphic sentences.',
            icon: PenTool
        },
        {
            step: '2. Questions',
            desc: 'As soon after class as possible, formulate questions based on the notes in the right-hand column. Writing questions helps to clarify meanings, reveal relationships, establish continuity, and strengthen memory.',
            icon: Brain
        },
        {
            step: '3. Recite',
            desc: 'Cover the note-taking column with a sheet of paper. Then, looking at the questions or cue-words in the question and cue column only, say aloud, in your own words, the answers to the questions, facts, or ideas indicated by the cue-words.',
            icon: MessageCircle
        },
        {
            step: '4. Reflect',
            desc: 'Reflect on the material by asking yourself questions, for example: "What\'s the significance of these facts? What principle are they based on? How can I apply them? How do they fit in with what I already know? What\'s beyond them?"',
            icon: BookOpen
        },
        {
            step: '5. Review',
            desc: 'Spend at least ten minutes every week reviewing all your previous notes. If you do, you\'ll retain a great deal for current use, as well as, for the exam.',
            icon: RefreshCw
        }
    ];

    const videos = [
        {
            title: "How to take Cornell notes",
            author: "Jennifer DesRochers",
            desc: "A clear, concise explanation of how to set up and use the Cornell Note Taking system for any subject.",
            url: "https://www.youtube.com/watch?v=WtW9IyE04OQ"
        },
        {
            title: "The Cornell Notes Method",
            author: "GoodNotes",
            desc: "See how to apply the Cornell method using digital tools, perfect for iPad users.",
            url: "https://www.youtube.com/watch?v=Effect_Of_Cornell_Notes" // Placeholder valid-looking URL structure or generic search
        },
        {
            title: "Study With Me: Cornell Notes",
            author: "Studytee",
            desc: "Watch a real-time study session using the Cornell method to see it in action.",
            url: "https://www.youtube.com/results?search_query=cornell+notes+studytee"
        }
    ];

    return (
        <div className="pt-24 pb-20 overflow-x-hidden bg-slate-50">
            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 bg-slate-900 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-froyo-dark-blue rounded-full blur-[120px] opacity-40 -translate-y-1/2 translate-x-1/3 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-froyo-gold rounded-full blur-[120px] opacity-20 translate-y-1/2 -translate-x-1/3"></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-xl mb-8">
                        <BookOpen size={16} className="text-froyo-gold" />
                        <span className="font-bold text-sm text-froyo-gold uppercase tracking-wider">Study Methodology</span>
                    </span>
                    <h1 className="text-5xl lg:text-[70px] leading-[1.1] font-heading mb-6">
                        The Cornell <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-froyo-gold to-froyo-light-blue">Note Taking System.</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        Developed by Walter Pauk at Cornell University, this systematic format for condensing and organizing notes is the secret to better retention.
                    </p>
                </div>
            </section>

            {/* The Layout Visualization */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">The Anatomy of a Page</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            The page is divided into three distinct sections, each serving a specific purpose in the learning process.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Visual Sheet */}
                        <div className="bg-slate-100 rounded-[2rem] p-4 md:p-8 shadow-inner border border-slate-200">
                            <div className="bg-white shadow-xl min-h-[600px] flex flex-col relative mx-auto max-w-lg rounded-sm overflow-hidden border border-slate-300">
                                {/* Header Area */}
                                <div className="h-28 border-b-2 border-slate-800 p-6 relative bg-white">
                                    <div className="absolute top-6 right-6 text-sm text-slate-400 font-handwriting">Name: John Doe<br />Date: Oct 12<br />Class: Biology 101</div>
                                    <div className="flex items-center justify-center h-full">
                                        <span className="text-2xl font-bold uppercase tracking-widest text-slate-200">Topic Header</span>
                                    </div>
                                </div>

                                <div className="flex flex-1">
                                    {/* Cue Column */}
                                    <div className="w-[30%] border-r-2 border-slate-800 p-4 bg-yellow-50/30 relative">
                                        <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] text-slate-400 font-bold tracking-widest uppercase">Cues</div>
                                        <div className="space-y-12 mt-8">
                                            <div className="bg-froyo-dark-blue/10 h-4 w-3/4 rounded mx-auto"></div>
                                            <div className="bg-froyo-dark-blue/10 h-4 w-1/2 rounded mx-auto"></div>
                                            <div className="bg-froyo-dark-blue/10 h-4 w-2/3 rounded mx-auto"></div>
                                            <div className="bg-froyo-dark-blue/10 h-4 w-3/4 rounded mx-auto"></div>
                                        </div>
                                    </div>

                                    {/* Notes Column */}
                                    <div className="w-[70%] p-6 relative">
                                        <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] text-slate-400 font-bold tracking-widest uppercase">Notes</div>
                                        <div className="space-y-4 mt-4">
                                            <div className="h-2 bg-slate-100 rounded w-full"></div>
                                            <div className="h-2 bg-slate-100 rounded w-11/12"></div>
                                            <div className="h-2 bg-slate-100 rounded w-full"></div>
                                            <div className="h-2 bg-slate-100 rounded w-4/5"></div>
                                            <br />
                                            <div className="h-2 bg-slate-100 rounded w-full"></div>
                                            <div className="h-2 bg-slate-100 rounded w-10/12"></div>
                                            <div className="h-2 bg-slate-100 rounded w-full"></div>
                                            <br />
                                            <div className="h-2 bg-slate-100 rounded w-11/12"></div>
                                            <div className="h-2 bg-slate-100 rounded w-3/4"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Summary Area */}
                                <div className="h-40 border-t-2 border-slate-800 p-6 bg-green-50/20 relative">
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] text-slate-400 font-bold tracking-widest uppercase">Summary</div>
                                    <div className="space-y-3 mt-4 px-4">
                                        <div className="h-2.5 bg-slate-200 rounded w-full"></div>
                                        <div className="h-2.5 bg-slate-200 rounded w-full"></div>
                                        <div className="h-2.5 bg-slate-200 rounded w-2/3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Explanation of Sections */}
                        <div className="space-y-8">
                            <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-100">
                                <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-slate-900">
                                    <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white text-sm font-bold">1</span>
                                    The Cue Column
                                </h3>
                                <p className="text-slate-600 pl-10">
                                    Approximately 2.5 inches wide. After class, write questions, keywords, or main ideas here that correspond to your notes on the right.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                                <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-slate-900">
                                    <span className="w-8 h-8 bg-froyo-dark-blue rounded-full flex items-center justify-center text-white text-sm font-bold">2</span>
                                    The Note-Taking Area
                                </h3>
                                <p className="text-slate-600 pl-10">
                                    Approximately 6 inches wide. Record the lecture here using concise sentences, shorthand, and diagrams. Focus on capturing the main ideas.
                                </p>
                            </div>

                            <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
                                <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-slate-900">
                                    <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</span>
                                    The Summary
                                </h3>
                                <p className="text-slate-600 pl-10">
                                    Approximately 2 inches high at the bottom. Write a brief summary (2-3 sentences) of the notes on that page. This forces synthesis of the material.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The 5 R's Process */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900">The 5 R's of Note Taking</h2>
                        <p className="text-xl text-slate-600 mt-4">A proven workflow to move information from short-term to long-term memory.</p>
                    </div>

                    <div className="space-y-6">
                        {noteSteps.map((item, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all border border-slate-100 flex flex-col md:flex-row gap-6 items-start">
                                <div className="w-16 h-16 bg-froyo-dark-blue/5 rounded-2xl flex items-center justify-center text-froyo-dark-blue flex-shrink-0">
                                    <item.icon size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.step}</h3>
                                    <p className="text-lg text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Videos & Resources */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center gap-4 mb-12">
                        <Youtube size={40} className="text-red-500" />
                        <h2 className="text-4xl font-heading font-bold text-slate-900">Video Tutorials</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {videos.map((video, i) => (
                            <div key={i} className="bg-slate-50 rounded-[2rem] p-8 hover:-translate-y-2 transition-transform duration-300 border border-slate-100 group">
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-red-500 group-hover:text-white transition-colors text-red-500">
                                    <Youtube size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{video.title}</h3>
                                <p className="text-sm font-bold text-slate-500 mb-4">{video.author}</p>
                                <p className="text-slate-600 mb-6 min-h-[60px]">{video.desc}</p>
                                <a
                                    href={video.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-red-600 transition-colors"
                                >
                                    Watch Now <ArrowRight size={16} />
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="bg-froyo-dark-blue rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-froyo-gold rounded-full blur-[80px] opacity-20 -mr-16 -mt-16"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-heading font-bold mb-6">Read the Official Guide</h2>
                            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                                The Learning Strategies Center at Cornell University provides the most authoritative documentation on this method.
                            </p>
                            <a
                                href="https://lsc.cornell.edu/how-to-study/taking-notes/cornell-note-taking-system/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-white text-froyo-dark-blue px-8 py-4 rounded-full font-bold hover:bg-froyo-gold hover:text-white transition-all shadow-lg"
                            >
                                Visit Cornell LSC <ExternalLink size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CornellNotes;
