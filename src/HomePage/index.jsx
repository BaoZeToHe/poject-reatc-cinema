import PageHeader from "../header/header";
import backGroundHomePage from "./banner01.jpg";
import ContentIntro from "./contentIntro";
import { CssHomePage } from "./cssHomePage";
import ContentHomePage from "./contentHomePage";

function HomePage() {
  return (
    <div style={{ backgroundColor: "#0d0d0d" }}>
      <div className="Home_page " style={{
        height: "99.9vh", width: "98.9vw",
        opacity: .3,
        backgroundImage: `url(${backGroundHomePage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: "relative",
        zIndex: "1"
      }}>
      </div>
      <CssHomePage>
        <ContentIntro></ContentIntro>
      </CssHomePage>
      <CssHomePage>
        <ContentHomePage></ContentHomePage>
      </CssHomePage>

    </div>
  )
}
export default HomePage;
