import "../assets/css/home.css";
import About from "../components/About";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import News from "../components/News";
import Portofolio from "../components/Portofolio";
import Search from "../components/Search";
import Service from "../components/Service";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      <Banner />
      <Gallery />
      <About />
      <News />
      <Service />
      <Portofolio />
      <Testimonials />
      <Search />
    </>
  );
}

export default Home;
