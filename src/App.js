import { Routes, Route } from "react-router-dom";
import NavBar from"./components/Navbar";
import TopBtn from"./components/Top-btn";
import"./scss/components/NavBar.scss";
import Home from  "./section/Home";
import OurServices from "./section/OurServices";
import About from "./section/About";
import Skills from"./section/Skills";
import Contact from"./section/contact";

function App() {
  return (  
    <>
    <NavBar/>
    <Routes>
    <Route path="/" element={
      // <Services />
      // <Footer/>
      <>
      <Home/>
      <About/>
      <OurServices/>
      <Skills/>
      <Contact/>
      <TopBtn/>
      </>
    }/>
    <Route path="/About" element={
      <>
      <About/>
      </>
    }/>
    <Route path="/Skills" element={
      <>
    <Skills/>
    </>}/>
    <Route path='/Contact' element={
  <>
  <Contact/>
  </>
}/>
<Route path='/OurServices' element={
  <>
  <OurServices/>
  </>
}/>
</Routes>
</>);
}

export default App;
