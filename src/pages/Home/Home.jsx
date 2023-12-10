import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import About from './../../components/About/About';

const Home = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Header></Header>
           <About></About>
           <Footer></Footer>
        </div>
    );
};

export default Home;