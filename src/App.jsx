import Nav from "./component/navbar"
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import Home from "./component/home";
import Social from "./component/social";
import About from "./component/about";
import Project from "./component/project";
import Exper from "./assets/experience";
import Contact from "./component/contact";
function App() {
  
  return (
    <>
      <Nav/>
      <Home/>
      <About/>
      <Social/>
      <Project/>
      <Exper/>
      <Contact/>
    </>
  )
}

export default App
