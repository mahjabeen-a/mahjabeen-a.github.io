import "./App.css";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Blog />
        {/* <Services />
        <Testimonials /> */}
        <Contact />
      </main>
    </>
  );
}

export default App;