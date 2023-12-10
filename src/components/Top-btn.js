import"../scss/components/Top-Btn.scss"
import {AiOutlineArrowUp} from "react-icons/ai";
function TopBtn(){
    function handel() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }
  return(
      <div className="Top-Btn" onClick={handel} >
        <AiOutlineArrowUp className="icon"/>
      </div>
  )
}
export default TopBtn