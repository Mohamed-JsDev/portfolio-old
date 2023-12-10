import"../scss/components/Head-btn.scss";
function HeadBtn(btn){
  const name=btn.btn;
  const first = name.slice(0,1);
  const two = name.slice(1);
  
  return(
    <div className="Head-btn">
      <p><span className="one-btn">{first}</span> <span className="two-btn">{two}</span></p>
    </div>
  )
}
export default HeadBtn;