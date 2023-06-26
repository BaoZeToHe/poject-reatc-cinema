import PageLogin from "./PageLogin.jsx";
import bg_img from "./account-bg.jpg";
import { CssLoginPage } from "./CssLogin";
import Button from "../button/button";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min.js";

function Login() {
  const css = {
    width: "98.9vw",
    height: "auto",
    backgroundRepeat: "no-repeat, repeat",
    backgroundPosition: "center",
    backgroundImage: `url(${bg_img})`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div className="PageLogin_create" style={css}>
      <NavLink to="/" className= "absolute top-10 left-3">
        <Button
          content="Home Page"
          backGround="-webkit-linear-gradient(169deg, #5560ff 17%, #aa52a1 63%, #ff4343 100%)"
        ></Button>
      </NavLink>
      <CssLoginPage>
        <PageLogin></PageLogin>
      </CssLoginPage>
      
    </div>
  );
}

export default Login;
