import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-dark-border py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* About */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Udith Sandaruwan</h3>
                        <p className="text-gray-400 mb-4">
                            Full Stack Developer & Software Engineer. I am a highly motivated and versatile individual, always eager to embrace new challenges and opportunities.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                            <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
                            <li><a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a></li>
                            <li><a href="#education" className="text-gray-400 hover:text-white transition-colors">Education</a></li>
                            <li><a href="/dashboard" className="text-gray-400 hover:text-white transition-colors">Student Portal</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Connect</h3>
                        <div className="flex flex-col gap-3">
                            <a href="mailto:hello@udithsandaruwan.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                <Mail className="h-5 w-5" />
                                <span>hello@udithsandaruwan.com</span>
                            </a>
                            <a href="mailto:info.dev.udith@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                <Mail className="h-5 w-5" />
                                <span>info.dev.udith@gmail.com</span>
                            </a>
                            <div className="flex gap-4 mt-2">
                                <a href="https://github.com/udithsandaruwan2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                    <Github className="h-6 w-6" />
                                </a>
                                <a href="https://www.linkedin.com/in/udithsandaruwan/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                    <Linkedin className="h-6 w-6" />
                                </a>
                                <a href="https://www.youtube.com/@UdithSandaruwan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                    <Twitter className="h-6 w-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-dark-border pt-8 text-center">
                    <p className="text-gray-400 flex items-center justify-center gap-2">
                        Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by Udith Sandaruwan © {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
