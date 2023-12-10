import"../scss/section/Skills.scss";
import HeadBtn from "../components/Head-btn";
import { AiFillHtml5 }  from "react-icons/ai";
import { BiLogoCss3 }   from "react-icons/bi";
import { IoLogoJavascript }  from "react-icons/io5";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiTailwindcss }  from "react-icons/si";
import { BiLogoSass }from "react-icons/bi";
import { BiLogoReact }   from "react-icons/bi";
import { SiPug }  from "react-icons/si";
import { FaGulp }  from "react-icons/fa";
import { FaWordpress }  from 'react-icons/fa';
import { AiFillGithub }  from 'react-icons/ai';
function Skills(){
  const seko = <div className="Skills-page" >
  <div className="skill" >
  <AiFillHtml5 className="icon"/>
          <p className="box"><span className="one">HTML5</span><span className="two">100%</span></p>
        </div>
        <div className="skill">
          <BiLogoCss3 className="icon"/>
          <p className="box"><span className="one">Css3</span><span className="two">90%</span></p>
        </div>
        <div className="skill" >
        <IoLogoJavascript className="icon"/>
        <p className="box"><span className="one">Java script</span><span className="two">90%</span></p>
        </div>
        <div className="skill">
          <BsFillBootstrapFill className="icon"/>
          <p className="box"><span className="one">Bootstrap</span><span className="two">90%</span></p>
          </div>
          <div className="skill">
          <SiTailwindcss className="icon"/>
          <p className="box"><span className="one">Tailwind</span><span className="two">90%</span></p>
        </div>
        <div className="skill">
          <BiLogoSass className="icon"/>
          <p className="box"><span className="one">Sass</span><span className="two">90%</span></p>
        </div>
        <div className="skill">
          <BiLogoReact className="icon"/>
          <p className="box"><span className="one">React</span><span className="two">90%</span></p>
        </div>
        <div className="skill">
        <SiPug className="icon"/>
        <p className="box"><span className="one">Pug.js</span><span className="two">80%</span></p>
        </div>
        <div className="skill">
          <FaGulp className="icon"/>
          <p className="box"><span className="one">Gulp.js</span><span className="two">80%</span></p>
        </div>
        <div className="skill">
          <FaWordpress   className="icon"/>
          <p className="box"><span className="one">Wordpress</span><span className="two">100%</span></p>
          </div>
        <div className="skill">
          <AiFillGithub className="icon"/>
          <p className="box"><span className="one">Git & Github</span><span className="two">80%</span></p>
        </div>
        </div> 
  return(
    <div className="Skills">
    <HeadBtn btn="Skills" />
    <div className="container">
    {seko}
          </div>
          <div>
    </div>
      </div>
    
  )
  }
export default Skills
          // const [skills , setSkills] =useState(   <div className="Skills-page" >
          // <div className="skill">
          //   <AiFillHtml5 className="icon"/>
          //   <p className="p" ><span className="one">HTML5</span><span >100%</span></p>
          // </div>
          // <div className="skill">
          //   <BiLogoCss3 className="icon"/>
          //   <p ><span className="one">Css3</span><span >90%</span></p>
          // </div>
          // <div className="skill" >
          //   <IoLogoJavascript className="icon"/>
          //   <p><span className="one">Java script</span><span >90%</span></p>
          // </div>
          // <div className="skill">
          //   <BsFillBootstrapFill className="icon"/>
          //   <p><span className="one">Bootstrap</span><span >90%</span></p>
          // </div>
          // <div className="skill">
          //   <SiTailwindcss className="icon"/>
          //   <p><span className="one">Tailwind</span><span >90%</span></p>
          // </div>
          // <div className="skill">
          //   <BiLogoSass className="icon"/>
          //   <p><span className="one">Sass</span><span >90%</span></p>
          // </div>
          // <div className="skill">
          //   <BiLogoReact className="icon"/>
          //   <p><span className="one">React</span><span >90%</span></p>
          // </div>
          // <div className="skill">
          //   <SiPug className="icon"/>
          //   <p><span className="one">Pug.js</span><span >80%</span></p>
          // </div>
          // <div className="skill">
          //   <FaGulp className="icon"/>
          //   <p><span className="one">Gulp.js</span><span >80%</span></p>
          // </div>
          // <div className="skill">
          //   <FaWordpress   className="icon"/>
          //   <p><span className="one">Wordpress</span><span >100%</span></p>
          // </div>
          // <div className="skill">
          //   <AiFillGithub className="icon"/>
          //   <p><span className="one">Git & Github</span><span >80%</span></p>
          // </div>
          // </div>);