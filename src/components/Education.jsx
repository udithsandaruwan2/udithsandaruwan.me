import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
    const education = [
        {
            degree: 'Meta Back-End Developer Professional Certificate',
            institution: 'Meta Platforms, Inc.',
            period: '2024 - 2025',
            description: 'Currently pursuing a Meta Back-End Developer Professional Certificate, focusing on advanced backend development concepts and software development.',
            icon: GraduationCap,
            color: 'from-blue-500/20 to-purple-500/20'
        },
        {
            degree: 'BSc (Hons) Computing',
            institution: 'National Institute of Business Management',
            period: '2023 - 2026',
            description: 'Currently pursuing a BSc (Hons) in Computing, focusing on advanced computing concepts and software development.',
            icon: GraduationCap,
            color: 'from-green-500/20 to-teal-500/20'
        },
        {
            degree: 'HND in Software Engineering',
            institution: 'National Institute of Business Management',
            period: '2023 - 2024',
            description: 'Completed a Higher National Diploma (HND) in Software Engineering, gaining hands-on experience in software development.',
            icon: GraduationCap,
            color: 'from-orange-500/20 to-red-500/20'
        },
        {
            degree: 'Diploma in Software Engineering',
            institution: 'National Institute of Business Management',
            period: '2022 - 2023',
            description: 'Earned a Diploma in Software Engineering with 3.79 GPA, building a solid foundation in programming and development principles.',
            icon: GraduationCap,
            color: 'from-pink-500/20 to-purple-500/20'
        }
    ];

    const certifications = [];

    return (
        <section id="education" className="py-20 px-4 bg-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Education & Certifications</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Academic background and professional certifications
                    </p>
                </motion.div>

                {/* Education */}
                <div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="h-full bg-gradient-to-br from-dark-card to-black border border-dark-border rounded-xl p-6 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2">
                                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${edu.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <edu.icon className="h-8 w-8 text-white" />
                                    </div>

                                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                                        <BookOpen className="h-4 w-4" />
                                        <span>{edu.period}</span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">
                                        {edu.degree}
                                    </h3>

                                    <p className="text-gray-400 font-medium mb-4">{edu.institution}</p>

                                    <p className="text-gray-400 leading-relaxed">
                                        {edu.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications - Hidden since no certifications data */}
                {certifications.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <Award className="h-8 w-8 text-white" />
                            <h3 className="text-3xl font-bold text-white">Professional Certifications</h3>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className="bg-dark-card border border-dark-border rounded-lg p-5 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0">
                                            <Award className="h-5 w-5 text-yellow-400" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-white font-semibold mb-1 text-sm leading-tight">{cert.name}</h4>
                                            <p className="text-gray-400 text-xs mb-1">{cert.issuer}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Education;
