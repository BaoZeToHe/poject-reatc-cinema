import {NavLink} from "react-router-dom"
function ButtonComponent(progs){
  const {backGround ,backGroundColor , content , ...res} = progs;
  const css = {
    // width : "auto",
    transition: "all ease 0.3s",
    minHeight : "50px",
    color : "white" ,
    borderRadius: "30px",
    backgroundImage : backGround,
    backGroundColor : "",
    padding : "0px 50px",
    textTransform: "uppercase"
  }
  return (
    <button className="button "  style={css}>
        {content}
    </button>
  )
}
export default ButtonComponent