import Contact from "./component/Contact/contact";
import Footer from "./component/Footer/footer";
import Intro from "./component/Intro/intro";
import Navbar from "./component/NavBar/navbar";
import Skills from "./component/Skills/skills";
import Works from "./component/Works/works";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Skills/>
     <Works/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
