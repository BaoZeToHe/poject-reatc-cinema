import ImgIcon1 from "./imgSiders/sidebar01.png"
import ImgIcon2 from "./imgSiders/sidebar02.png"
import ImgIcon3 from "./imgSiders/sidebar03.png"
import Imgadvertisement1 from "./imgSiders/banner01.jpg"
import Imgadvertisement2 from "./imgSiders/banner02.jpg"

import { CssDivSiler, CssLiSiler, CssSpanIcon, CssSpanContent } from "../CsscontentHomePage"
function ContentSide() {
  return (
    <div>
      <CssDivSiler>
        <ul>
          <CssLiSiler>
            <a className="text-[#e9eeff] flex">
              <CssSpanIcon >
                <img src={ImgIcon1} className="w-full" />
              </CssSpanIcon>
              <CssSpanContent>24X7 Care</CssSpanContent>
            </a>
          </CssLiSiler>
          <CssLiSiler>
            <a className="text-[#e9eeff] flex">
              <CssSpanIcon>
                <img src={ImgIcon2} />
              </CssSpanIcon>
              <CssSpanContent>100% Assurance</CssSpanContent>
            </a>
          </CssLiSiler>
          <CssLiSiler className="border-b-0">
            <a className="text-[#e9eeff] flex">
              <CssSpanIcon>
                <img src={ImgIcon3} />
              </CssSpanIcon>
              <CssSpanContent>Our Promise</CssSpanContent>
            </a>
          </CssLiSiler>
        </ul>
      </CssDivSiler>
      <div className="mb-10">
        <a href="#">
          <img src={Imgadvertisement1} className="w-full" />
        </a>
      </div>
      <CssDivSiler className="text-[#dbe2fb]">
        <ul>
          <CssLiSiler>
            <h6 className="text-white uppercase mb-4">
              <a>mars</a>
            </h6>
            <p>Movies</p>
          </CssLiSiler>
          <CssLiSiler>
            <h6 className="text-white uppercase mb-4">
              <a>alone</a>
            </h6>
            <p>Movies</p>
          </CssLiSiler>
          <CssLiSiler>
            <h6 className="text-white uppercase mb-4">
              <a>Music events</a>
            </h6>
            <p>Event</p>
          </CssLiSiler>
          <CssLiSiler>
            <h6 className="text-white uppercase mb-4">
              <a>nba Games 2020</a>
            </h6>
            <p>Sports</p>
          </CssLiSiler>
        </ul>
      </CssDivSiler>
      <div className="mb-10">
        <a href="#">
          <img src={Imgadvertisement2} className="w-full" />
        </a>
      </div>
    </div>
  )
}
export default ContentSide