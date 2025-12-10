import { motion } from 'framer-motion';
import { ExternalLink, Github, Server, Database, Code } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Serah - A Healthcare AI',
            description: 'Developed a full-stack web application that allows users to talk and get to know about their health and get advice.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'Gemini API'],
            icon: Server,
            github: 'https://github.com/udithsandaruwan2/serah--care-plus-ai',
            demo: '',
            color: 'from-blue-500/20 to-purple-500/20'
        },
        {
            title: 'Care Plus',
            description: 'Developed a full-stack web application that allows users to find a caregiver, request them, chat with them and monitor the progress.',
            technologies: ['Django', 'Python', 'HTML', 'CSS', 'JavaScript', 'Gemini API', 'PostgreSQL'],
            icon: Code,
            github: 'https://github.com/udithsandaruwan2/care-plus',
            demo: '',
            color: 'from-green-500/20 to-teal-500/20'
        },
        {
            title: 'GWUIM - Leave MS',
            description: 'Developed a full-stack web application that allows users/staff to manage the leaves of their employees.',
            technologies: ['Django', 'Python', 'HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Django Rest API'],
            icon: Database,
            github: 'https://github.com/udithsandaruwan2/gwuim-8000',
            demo: '',
            color: 'from-orange-500/20 to-red-500/20'
        },
        {
            title: 'Health-sync 2.0',
            description: 'Developed a full-stack web application that allows users to find a suitable doctor and book appointments as they wish and manage the progress.',
            technologies: ['Spring Boot', 'Java', 'React', 'Vite', 'JavaScript', 'MySQL', 'Rest API'],
            icon: Server,
            github: 'https://github.com/udithsandaruwan2/health-sync-2.0',
            demo: '',
            color: 'from-pink-500/20 to-purple-500/20'
        },
        {
            title: 'GWUIM - Attendance MS',
            description: 'Developed a full-stack web application that allows users/staff to manage the attendance of their employees.',
            technologies: ['Django', 'Python', 'HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Django Rest API'],
            icon: Database,
            github: 'https://github.com/udithsandaruwan2/gwuim-8001',
            demo: '',
            color: 'from-blue-500/20 to-cyan-500/20'
        },
        {
            title: 'Animarc - BTTH',
            description: 'Developed a full-stack web application that allows users to watch the battle through the heaven anime series without any ads by scraping from luciferdonghua.in.',
            technologies: ['Django', 'Python', 'HTML', 'CSS', 'JavaScript', 'Web Scraping'],
            icon: Code,
            github: 'https://github.com/udithsandaruwan2/animearc',
            demo: '',
            color: 'from-purple-500/20 to-pink-500/20'
        }
    ];

    return (
        <section id="projects" className="py-20 px-4 bg-black relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Featured Projects</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A selection of my recent work focusing on backend development and fullstack applications
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="h-full bg-gradient-to-br from-dark-card to-black border border-dark-border rounded-xl p-6 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2">
                                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <project.icon className="h-8 w-8 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded-full border border-white/10"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                                        >
                                            <Github className="h-5 w-5" />
                                            <span>Code</span>
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                                        >
                                            <ExternalLink className="h-5 w-5" />
                                            <span>Demo</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
