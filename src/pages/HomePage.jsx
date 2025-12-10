import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div className="pt-16">
            <Hero />
            <Projects />
            <Experience />
            <Education />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default HomePage;
