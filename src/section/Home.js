import page1 from"../img/photo-home.JPG";
import { AiTwotoneEnvironment } from "react-icons/ai";
import"../scss/section/Home.scss";
function Home(){
  return(
    <div className="Home">

    <div className="container">
    <div className="Home-page">
    <div className="content">
            <h2>Front-end React Developer</h2>
            <p>Hi, I'm <span> Mohamed Alshafe</span> Web Developer live in Cairo,Egypt <AiTwotoneEnvironment /> </p>
          </div>
          <div className="slider">
          <img src={page1} alt="page1" />
          <div className="over-lay"></div>
          </div>
          
        </div>
        </div> 
      </div>
    
  )
}
export default Home;