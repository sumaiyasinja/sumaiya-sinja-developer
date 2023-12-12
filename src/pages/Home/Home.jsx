import Contact from "../../components/Contact/Contact";
import Education from "../../components/Education/Education";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Skills from "../../components/Skills/Skills";
import About from './../../components/About/About';
import Projects from './../../components/Projects/Projects';

const Home = () => {
    return (
        <div className="container mx-auto">
           <Navbar></Navbar>
           <Header></Header>
           <About></About>
           <Skills></Skills>
           <Education></Education>
           <Projects></Projects>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;