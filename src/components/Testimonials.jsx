import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Sanuja Sithnula',
            role: 'Student – Computing Batch',
            image: '👨‍💻',
            rating: 5,
            text: 'Thank you for giving valuable information. Good luck and all the best, brother.',
            course: 'Software Engineering'
        },
        {
            name: 'Bathika Bulathsinhala',
            role: 'Student – Computing Batch',
            image: '👨‍🎓',
            rating: 5,
            text: 'All the information you gave us today was extremely valuable for my future career. Thank you so much for everything you taught us. I didn\'t have any questions since everything was clearly described. I will definitely be using all the tools you provided today.',
            course: 'Software Engineering'
        },
        {
            name: 'Senuni Tharuka',
            role: 'Student – Computing Batch',
            image: '👩‍💻',
            rating: 5,
            text: 'You can be a good lecturer!!! Thank you so much 🌚',
            course: 'Software Engineering'
        },
        {
            name: 'Sandevni Rehansa',
            role: 'Student – Computing Batch (Diploma – NIBM)',
            image: '👩‍🎓',
            rating: 5,
            text: 'The session was very informative and helpful as a student who\'s starting to grow in the path of Software Engineering. Thank you so much, sir, for taking your time today and guiding us through the induction to Software Engineering. Hope to learn more from you in the future.',
            course: 'Software Engineering'
        },
        {
            name: 'Sethumi Subasinghe',
            role: 'Student – Computing Batch',
            image: '👩‍💼',
            rating: 5,
            text: 'I didn\'t understand this lesson at first, but the second time I understood. Thank you, I understand very well ☺️',
            course: 'Software Engineering'
        },
        {
            name: 'Chanuka Chamod',
            role: 'Student – Computing Batch',
            image: '👨‍💼',
            rating: 5,
            text: 'A good teacher! Teaches everything that we need to know. A very kind demonstrator. ❤️',
            course: 'Software Engineering'
        }
    ];

    return (
        <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Student Testimonials</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        What my students say about their learning experience
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="h-full bg-dark-card border border-dark-border rounded-xl p-6 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2">
                                {/* Quote icon */}
                                <div className="flex justify-between items-start mb-4">
                                    <Quote className="h-8 w-8 text-white/20" />
                                    <div className="flex gap-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                </div>

                                {/* Testimonial text */}
                                <p className="text-gray-300 leading-relaxed mb-6 italic">
                                    "{testimonial.text}"
                                </p>

                                {/* Course badge */}
                                <div className="mb-6">
                                    <span className="inline-block px-3 py-1 bg-white/5 text-gray-400 text-xs rounded-full border border-white/10">
                                        {testimonial.course}
                                    </span>
                                </div>

                                {/* Author */}
                                <div className="flex items-center gap-4 pt-4 border-t border-dark-border">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-2xl">
                                        {testimonial.image}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA for students */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block bg-dark-card border border-dark-border rounded-xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-3">Want to share your experience?</h3>
                        <p className="text-gray-400 mb-6">Join our learning platform and access exclusive course materials</p>
                        <button
                            disabled
                            className="inline-block px-8 py-3 bg-gray-600 text-gray-400 rounded-lg cursor-not-allowed font-semibold opacity-60"
                        >
                            Coming Soon
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
