import page1 from"../img/File bundle-pana.png";
import"../scss/section/About.scss";
import HeadBtn from "../components/Head-btn";
function About (){
  return(
    <div className="About" >
    <HeadBtn btn="About"/>
      <div className="container">
      <div className="About-page">
      <div className="slider">
        <img src={page1} alt="slider"/> 
        </div>
        <div className="content">
          <p>Hello , I'm <span className="my-name">Mohamed Saied Alshafe </span> </p>
          <p> Front-end Developer & WordPress Developer . </p>
            <p className="info">After studying at the Higher Institute of Computer and Information and
            after learning a lot of courses, I learned Html5, Css3 ,Java script , React js , Bootstrap , Tailwind , pug js ,Gulp.js ,Wordpress ,  and I learned the basics of Ui/Ux and design pattern .</p>
        </div>
      </div>
      </div>
    </div>
  )
}
export default About;