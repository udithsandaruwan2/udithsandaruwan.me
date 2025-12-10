import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
    const scrollToProjects = () => {
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [imgError, setImgError] = useState(false);

    return (
        <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden bg-black">
            {/* Enhanced Dynamic Background */}
            <div className="absolute inset-0">
                {/* Main gradient backdrop */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950"></div>

                {/* Animated gradient orbs */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl"></div>

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>

                {/* Subtle noise texture */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid md:grid-cols-[1fr_1.5fr] gap-8 items-center">
                    {/* Left content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-lg mb-4"
                        >
                            Hello, I'm
                        </motion.h2>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                        >
                            Udith Sandaruwan
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-2xl md:text-3xl text-gray-300 mb-6 space-y-2"
                        >
                            <p>Full Stack Developer</p>
                            <p className="text-xl text-gray-400">Software Engineer</p>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-gray-400 text-lg mb-8 leading-relaxed"
                        >
                            I am a highly motivated and versatile individual, always eager to embrace new challenges and opportunities. With a deep passion for learning, I continuously seek to expand my skills and knowledge to stay ahead in a dynamic environment.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap gap-4 mb-8"
                        >
                            <a
                                href="#projects"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToProjects();
                                }}
                                className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-all transform hover:scale-105 font-semibold"
                            >
                                View My Work
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1of9KrHDy5HOBGd_65snI3_4YbsUrQTir/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-black transition-all transform hover:scale-105 font-semibold"
                            >
                                View CV
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="flex gap-6"
                        >
                            <a href="https://github.com/udithsandaruwan2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Github className="h-6 w-6" />
                            </a>
                            <a href="https://www.linkedin.com/in/udithsandaruwan/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a href="mailto:info.dev.udith@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                                <Mail className="h-6 w-6" />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right side - Photo */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex items-end justify-center h-full"
                    >
                        <div className="relative w-full ml-auto md:translate-x-12">
                            {/* Enhanced Decorative glow element */}
                            <motion.div
                                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-transparent rounded-full blur-3xl"
                                animate={{
                                    scale: [1, 1.15, 1],
                                    opacity: [0.3, 0.5, 0.3]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            ></motion.div>

                            {/* Direct image display - no card */}
                            {!imgError ? (
                                <div className="relative">
                                    {/* Subtle glow behind image */}
                                    <motion.div
                                        className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-500/10 to-transparent blur-2xl"
                                        animate={{
                                            opacity: [0.3, 0.6, 0.3]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    ></motion.div>

                                    <img
                                        src="/profile.png"
                                        alt="Udith Sandaruwan"
                                        onError={() => setImgError(true)}
                                        className="relative w-full h-auto max-h-[100vh] object-contain object-bottom drop-shadow-2xl scale-150"
                                    />
                                </div>
                            ) : (
                                <div className="aspect-[3/4] w-full bg-gradient-to-br from-gray-700/50 to-gray-900/50 rounded-2xl flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                                            <span className="text-6xl">👨‍💻</span>
                                        </div>
                                        <p className="text-gray-500 text-sm">Your Photo Here</p>
                                    </div>
                                </div>
                            )}

                            {/* Floating code brackets decoration */}
                            <motion.div
                                className="absolute -left-8 top-1/4 text-blue-400/15 text-7xl font-mono font-bold"
                                animate={{
                                    x: [-8, 0, -8],
                                    opacity: [0.1, 0.2, 0.1]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                {'<'}
                            </motion.div>
                            <motion.div
                                className="absolute -right-8 bottom-1/4 text-purple-400/15 text-7xl font-mono font-bold"
                                animate={{
                                    x: [8, 0, 8],
                                    opacity: [0.2, 0.1, 0.2]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                {'/>'}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="cursor-pointer"
                    onClick={scrollToProjects}
                >
                    <ChevronDown className="h-8 w-8 text-gray-400" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
