import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import Services from "../components/Services/Services";

const HomePage = () => {
  return (
    <>
      <main className="main">
        <Home />
        <About />
        <Services />
        <Blog />
        {/* <Testimonials /> */}
        <Contact />
      </main>
    </>
  );
}

export default HomePage;