import { NavLink } from "react-router-dom";
import Page_login from "./Page_login";
import bg_img from "./account-bg.jpg";
import { CssLoginPage } from "./CssLogin";

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
  }
  return (
    <div className="page_login_create" style={css}>
      <CssLoginPage>
        <Page_login></Page_login>
      </CssLoginPage>
    </div>
  )
}
export default Login