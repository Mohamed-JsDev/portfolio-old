import"../scss/section/OurServices.scss";

import HeadBtn from "../components/Head-btn";
import mentor from"../img/Hand coding-amico.png";
import { FaWordpress }  from 'react-icons/fa';
function OurServices(){

  
  return(
    <div  className="services">
    <HeadBtn btn="Services" />
    <div className="containear">
    <div className="Services-page">
    <div className="card">
    <img src={mentor} alt="mentor"/>
    <h4>Front-end Developer</h4>
    <p>I has experience developing a wide range of web applications, from simple web apps to complex enterprise solutions. I use the latest development tools and frameworks to design fast, reliable, and secure web applications that meet your business needs. I can customize your existing applications for Enterprise Resource Planning (ERP), E-Commerce, Interactive Gaming, Online Training & Courses, Customer Relationship Management (CRM), and so much more.</p>
    </div>
    <div className="card">
    <FaWordpress className="icon"/>
    <h4>Wordpress Developer</h4>
    <p>web Design & Information Architecture.
    Custom Theme Coding (HTML, CSS, jQuery/JavaScript)
    Mobile Compatibility/Responsive Web Design.
    Integration and development of WordPress plugins and 3rd party tools.
    Search Engine Optimization (SEO),WordPress Website Project Management
    WordPress Website Hosting & Support
    WordPress Security and Maintenance
    </p>
          </div>
            </div>
          </div>
      </div>
    )
  }
export default OurServices;