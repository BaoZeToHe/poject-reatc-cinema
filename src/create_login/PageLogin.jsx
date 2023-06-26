import { NavLink, Route, Switch } from "react-router-dom";
import App_login from "./from_login";
import App_Sign_up from "./from_sign_up";
import SocialNetwork from "./social_network/social_network";

function PageLogin() {
  const css = {
    maxWidth: 540,
    height: "auto",
    margin: "auto",
    textAlign: "center",
    padding: "60px 45px",
    backgroundColor: "rgba(68, 90, 153, 0.051)",
    boxShadow: "0px 0px 29.4px 0.6px rgba(0, 0, 0, 0.5)",
  };
  return (
    <div style={css}>
      <div className=" mb-5">
        <span
          style={{
            color: "#31d7a9",
            textTransform: "uppercase",
            fontSize: "18px",
          }}
        >
          hello
        </span>
        <h1
          style={{
            fontSize: "40px",
            textTransform: "uppercase",
            color: "white",
          }}
        >
          welcome back
        </h1>
      </div>
      <div className=" mb-5">
        <Switch>
          <Route path="/create/login">
            <App_login />
          </Route>
          <Route path="/create/SignUp">
            <App_Sign_up />
          </Route>
          <Route path="/create">
            {" "}
            <App_login />
          </Route>
        </Switch>
      </div>
      <SocialNetwork></SocialNetwork>
    </div>
  );
}

export default PageLogin;
