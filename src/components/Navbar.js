
import"../scss/components/NavBar.scss"
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import 
// <li className="nav-item">
// <Link to="Projects" className='nav-link'>Projects</Link>
// </li>

function NavBar(){
  const[links,setLinks]=useState("");
  const nav =<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
  <li className="nav-item">
  <Link  to="/" className='nav-link'>Home</Link>
  </li>
  <li className="nav-item">
  <Link to="./About" className='nav-link'>About</Link>
  </li>
  <li className="nav-item">
  <Link to='./OurServices' className='nav-link' >Services</Link>
  </li>
  <li className="nav-item">
  <Link to="./Skills" className='nav-link'>Skills</Link>
  </li>
  <li className="nav-item">
  <Link to="./Contact" className='nav-link'>Contact</Link>
  </li>
</ul>;

var num =0
function Links(num){

    if(links.length === 0 && num === 0){
      setLinks(nav)
  num+=1
    }else{            
    setLinks("");
    num=0
    }
  }

  return(
    <nav className="navbar navbar-expand-lg ">
    <div className="container">
    <Link className="navbar-brand" to="/">Mo7amed.Dev</Link>
    <div className='ul-nav'>{nav}</div>
      <button className="togger" type="button" onClick={()=>Links(num)} >
        <span></span>
        <span></span>
        <span><div className='links-media'>{links} </div> </span>
        </button>
    </div>
  </nav>
  )
};


export default NavBar;
