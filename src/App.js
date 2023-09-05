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
    </div>
  );
}

export default App;
