import"../scss/section/Contact.scss";
import HeadBtn from "../components/Head-btn";
import { MdEmojiEmotions } from "react-icons/md";
import { BsTelephoneInbound , BsEnvelopeAt ,BsFacebook ,BsGithub,BsLinkedin,BsInstagram} from "react-icons/bs";

function Contanct (){
  return(
    <div className="Contact">
    <HeadBtn btn="contact" />
      <div className="container">
        <div className="contact-page">
          <div className="inputs">
          <input type="name" spellCheck="true" placeholder="name" id="name"/>
          <input type="email" spellCheck="true" placeholder=" Email" id="email"/>
          <input type="text" spellCheck="true" placeholder="Message"/> 
          </div>
          <div className="contact-text">
              <h5>Contact Me</h5>
              <p>Send a massage or question </p> 
              <p>Just say Hello <span> <MdEmojiEmotions/></span>.</p> 
              <p><span><BsTelephoneInbound />  :  </span> 01032721974</p>
              <p><span><BsEnvelopeAt/> : </span> el06542@gmail.com</p>
              <div>
                <a href="https://www.facebook.com/MohaM3d.Alshafie.5" target="blank"><BsFacebook/></a>
                <a href="https://github.com/mo7a-med"  target="blank"><BsGithub/></a>
                <a href="https://www.linkedin.com/in/mo7a-med-alshafie-a90568255" target="blank"><BsLinkedin/></a>
                <a href="https://www.instagram.com/mo7amed_als7afe/" target="blank"><BsInstagram/></a>
                </div>
              </div>
          <button className="btn btn-form"><p>Submit</p></button>
        </div>
        </div>
        </div>
  )
}
export default Contanct;