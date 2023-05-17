import PageHeader from "./header/header";
import backGroundHomePage from "./imgHeader/banner01.jpg";
import ContentIntro from "./contentIntro";
import { CssHomePage } from "./cssHomePage";
import ContentHomePage from "./contentHomePage";
import Footer from "./Footer";
function HomePage() {
  return (
    <div style={{ overflowX: 'hidden', backgroundColor: "#0d0d0d" }}>
      <PageHeader></PageHeader>
      <div className="Home_page " style={{
        height: "99.9vh", width: "100vw",
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
        <Footer></Footer>
      </CssHomePage>

    </div>
  )
}
export default HomePage;