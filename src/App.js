import Intro from "./component/Intro/intro";
import Navbar from "./component/NavBar/navbar";
import Skills from "./component/Skills/skills";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Skills/>
    </div>
  );
}

export default App;
