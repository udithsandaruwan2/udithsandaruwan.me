import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    BookOpen,
    Download,
    FileText,
    Video,
    CheckCircle,
    Clock,
    MessageSquare,
    Star,
    Send
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
    const { user, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('modules');
    const [testimonialText, setTestimonialText] = useState('');
    const [rating, setRating] = useState(5);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    const modules = [
        {
            id: 1,
            title: 'Introduction to Backend Development',
            status: 'completed',
            progress: 100,
            lessons: 12,
            duration: '4 hours',
            materials: [
                { name: 'Module 1 - Introduction.pdf', type: 'pdf', size: '2.3 MB' },
                { name: 'Setup Guide.pdf', type: 'pdf', size: '1.5 MB' },
                { name: 'Code Examples.zip', type: 'zip', size: '5.2 MB' }
            ]
        },
        {
            id: 2,
            title: 'Node.js Fundamentals',
            status: 'in-progress',
            progress: 65,
            lessons: 15,
            duration: '6 hours',
            materials: [
                { name: 'Node.js Basics.pdf', type: 'pdf', size: '3.1 MB' },
                { name: 'NPM Package Guide.pdf', type: 'pdf', size: '1.8 MB' },
                { name: 'Practice Projects.zip', type: 'zip', size: '8.4 MB' },
                { name: 'Video - Async Programming.mp4', type: 'video', size: '45 MB' }
            ]
        },
        {
            id: 3,
            title: 'Express.js & RESTful APIs',
            status: 'in-progress',
            progress: 30,
            lessons: 18,
            duration: '7 hours',
            materials: [
                { name: 'REST API Design.pdf', type: 'pdf', size: '2.7 MB' },
                { name: 'Express Middleware.pdf', type: 'pdf', size: '2.1 MB' },
                { name: 'API Examples.zip', type: 'zip', size: '6.8 MB' }
            ]
        },
        {
            id: 4,
            title: 'Database Design & MongoDB',
            status: 'locked',
            progress: 0,
            lessons: 20,
            duration: '8 hours',
            materials: []
        },
        {
            id: 5,
            title: 'Authentication & Security',
            status: 'locked',
            progress: 0,
            lessons: 16,
            duration: '5 hours',
            materials: []
        },
        {
            id: 6,
            title: 'Microservices Architecture',
            status: 'locked',
            progress: 0,
            lessons: 22,
            duration: '10 hours',
            materials: []
        }
    ];

    const handleDownload = (materialName) => {
        // Mock download
        alert(`Downloading: ${materialName}\n(This is a demo - actual file download would happen here)`);
    };

    const handleTestimonialSubmit = (e) => {
        e.preventDefault();
        if (!testimonialText.trim()) {
            alert('Please write your feedback');
            return;
        }

        // Mock submission
        console.log('Testimonial submitted:', { text: testimonialText, rating });
        setSubmitSuccess(true);
        setTestimonialText('');

        setTimeout(() => {
            setSubmitSuccess(false);
        }, 3000);
    };

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-20 pb-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h1 className="text-4xl font-bold text-white mb-2">
                        Welcome back, {user?.name || 'Student'}!
                    </h1>
                    <p className="text-gray-400">Continue your learning journey</p>
                </motion.div>

                {/* Stats */}
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                    {[
                        { label: 'Completed Modules', value: '1', icon: CheckCircle, color: 'from-green-500/20 to-emerald-500/20' },
                        { label: 'In Progress', value: '2', icon: Clock, color: 'from-blue-500/20 to-cyan-500/20' },
                        { label: 'Total Modules', value: '6', icon: BookOpen, color: 'from-purple-500/20 to-pink-500/20' },
                        { label: 'Materials', value: '24', icon: FileText, color: 'from-orange-500/20 to-red-500/20' }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className={`bg-gradient-to-br ${stat.color} border border-dark-border rounded-xl p-6`}
                        >
                            <stat.icon className="h-8 w-8 text-white mb-3" />
                            <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                            <p className="text-3xl font-bold text-white">{stat.value}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Tabs */}
                <div className="flex gap-4 mb-8 border-b border-dark-border">
                    <button
                        onClick={() => setActiveTab('modules')}
                        className={`pb-4 px-4 font-semibold transition-colors ${activeTab === 'modules'
                                ? 'text-white border-b-2 border-white'
                                : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        My Modules
                    </button>
                    <button
                        onClick={() => setActiveTab('testimonial')}
                        className={`pb-4 px-4 font-semibold transition-colors ${activeTab === 'testimonial'
                                ? 'text-white border-b-2 border-white'
                                : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        Leave Feedback
                    </button>
                </div>

                {/* Modules Tab */}
                {activeTab === 'modules' && (
                    <div className="space-y-6">
                        {modules.map((module, index) => (
                            <motion.div
                                key={module.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className={`bg-dark-card border border-dark-border rounded-xl p-6 ${module.status === 'locked' ? 'opacity-60' : ''
                                    }`}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-xl font-bold text-white">{module.title}</h3>
                                            {module.status === 'completed' && (
                                                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                                                    Completed
                                                </span>
                                            )}
                                            {module.status === 'in-progress' && (
                                                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">
                                                    In Progress
                                                </span>
                                            )}
                                            {module.status === 'locked' && (
                                                <span className="px-3 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full border border-gray-500/30">
                                                    Locked
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex items-center gap-6 text-sm text-gray-400 mb-4">
                                            <span className="flex items-center gap-2">
                                                <BookOpen className="h-4 w-4" />
                                                {module.lessons} lessons
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <Clock className="h-4 w-4" />
                                                {module.duration}
                                            </span>
                                        </div>

                                        {module.status !== 'locked' && (
                                            <>
                                                <div className="mb-4">
                                                    <div className="flex items-center justify-between text-sm mb-2">
                                                        <span className="text-gray-400">Progress</span>
                                                        <span className="text-white font-semibold">{module.progress}%</span>
                                                    </div>
                                                    <div className="w-full bg-black rounded-full h-2">
                                                        <div
                                                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                                                            style={{ width: `${module.progress}%` }}
                                                        ></div>
                                                    </div>
                                                </div>

                                                {module.materials.length > 0 && (
                                                    <div className="mt-6">
                                                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                                                            <Download className="h-4 w-4" />
                                                            Course Materials
                                                        </h4>
                                                        <div className="grid md:grid-cols-2 gap-3">
                                                            {module.materials.map((material, idx) => (
                                                                <div
                                                                    key={idx}
                                                                    className="flex items-center justify-between bg-black border border-dark-border rounded-lg p-3 hover:border-white/20 transition-colors group"
                                                                >
                                                                    <div className="flex items-center gap-3 flex-1 min-w-0">
                                                                        {material.type === 'pdf' && <FileText className="h-5 w-5 text-red-400 flex-shrink-0" />}
                                                                        {material.type === 'video' && <Video className="h-5 w-5 text-purple-400 flex-shrink-0" />}
                                                                        {material.type === 'zip' && <FileText className="h-5 w-5 text-blue-400 flex-shrink-0" />}
                                                                        <div className="flex-1 min-w-0">
                                                                            <p className="text-white text-sm font-medium truncate">{material.name}</p>
                                                                            <p className="text-gray-500 text-xs">{material.size}</p>
                                                                        </div>
                                                                    </div>
                                                                    <button
                                                                        onClick={() => handleDownload(material.name)}
                                                                        className="ml-2 p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
                                                                    >
                                                                        <Download className="h-4 w-4 text-gray-400 group-hover:text-white" />
                                                                    </button>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Testimonial Tab */}
                {activeTab === 'testimonial' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="bg-dark-card border border-dark-border rounded-xl p-8">
                            <div className="text-center mb-8">
                                <MessageSquare className="h-12 w-12 text-white mx-auto mb-4" />
                                <h2 className="text-2xl font-bold text-white mb-2">Share Your Experience</h2>
                                <p className="text-gray-400">
                                    Your feedback helps us improve and motivates other students
                                </p>
                            </div>

                            {submitSuccess && (
                                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-center">
                                    ✓ Thank you for your feedback! It will be reviewed and published soon.
                                </div>
                            )}

                            <form onSubmit={handleTestimonialSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-gray-300 mb-3 text-sm font-medium">
                                        Rate Your Experience
                                    </label>
                                    <div className="flex gap-2 justify-center">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                type="button"
                                                onClick={() => setRating(star)}
                                                className="transition-transform hover:scale-110"
                                            >
                                                <Star
                                                    className={`h-8 w-8 ${star <= rating
                                                            ? 'fill-yellow-400 text-yellow-400'
                                                            : 'text-gray-600'
                                                        }`}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2 text-sm font-medium">
                                        Your Feedback
                                    </label>
                                    <textarea
                                        value={testimonialText}
                                        onChange={(e) => setTestimonialText(e.target.value)}
                                        rows={6}
                                        className="w-full px-4 py-3 bg-black border border-dark-border rounded-lg text-white focus:outline-none focus:border-white/40 transition-colors resize-none"
                                        placeholder="Share your learning experience, what you enjoyed, and how the course helped you..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-all transform hover:scale-105 font-semibold flex items-center justify-center gap-2"
                                >
                                    <Send className="h-5 w-5" />
                                    Submit Feedback
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
