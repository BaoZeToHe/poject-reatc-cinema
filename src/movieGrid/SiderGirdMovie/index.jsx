import Img1 from "./ImgSiderGirdMovie/banner01.jpg";
import Img2 from "./ImgSiderGirdMovie/banner02.jpg";
import {
  Widget_header,
  H5_Widget_header,
  Widget_1_body,
  Widget_1_body_form,
  H6_Widget,
  Widget_add_check_area,
  SpanWordMovieGrid,
} from "../cssMovieGrid";
import { GlobalOutlined } from "@ant-design/icons";
function PageSideGirdMovie() {
  return (
    <div>
      <div>
        <img src={Img1} className="w-full mb-8" />
      </div>
      <div>
        <Widget_header>
          <H5_Widget_header>Filter By</H5_Widget_header>
          <a className="text-red-500">Clear All</a>
        </Widget_header>
        <div className="mb-9">
          <Widget_1_body>
            <H6_Widget>Language</H6_Widget>
            <div className="mb-[-15px]">
              <Widget_1_body_form>
                <input type="checkbox" name="lang" id="lang1" />
                <label for="lang1">Tamil</label>
              </Widget_1_body_form>
              <Widget_1_body_form>
                <input type="checkbox" name="lang" id="lang2" />
                <label for="lang2">Telegu</label>
              </Widget_1_body_form>
              <Widget_1_body_form>
                <input type="checkbox" name="lang" id="lang3" />
                <label for="lang3">Hindi</label>
              </Widget_1_body_form>
              <Widget_1_body_form>
                <input type="checkbox" name="lang" id="lang4" />
                <label for="lang4">English</label>
              </Widget_1_body_form>
              <Widget_1_body_form>
                <input type="checkbox" name="lang" id="lang5" />
                <label for="lang5">Multiple Language</label>
              </Widget_1_body_form>
              <Widget_1_body_form>
                <input type="checkbox" name="lang" id="lang6" />
                <label for="lang6">Gujrati</label>
              </Widget_1_body_form>
              <Widget_1_body_form>
                <input type="checkbox" name="lang" id="lang7" />
                <label for="lang7">Bangla</label>
              </Widget_1_body_form>
            </div>
          </Widget_1_body>
        </div>
        <div className="mb-9">
          <Widget_1_body>
            <H6_Widget>experience</H6_Widget>
            <div className="mb-[-15px]">
              <Widget_1_body_form>
                <input type="checkbox" name="lang" id="lang1" />
                <label for="lang1">2D</label>
              </Widget_1_body_form>
              <Widget_1_body_form>
                <input type="checkbox" name="lang" id="lang2" />
                <label for="lang2">3D</label>
              </Widget_1_body_form>
            </div>
            <Widget_add_check_area>
              <span> View more</span>
              <SpanWordMovieGrid>
                <GlobalOutlined />
              </SpanWordMovieGrid>
            </Widget_add_check_area>
          </Widget_1_body>
        </div>
        <div className="mb-9">
          <Widget_1_body>
            <H6_Widget>genre</H6_Widget>
            <div className="mb-[-15px]">
              <div className="check-area">
                <Widget_1_body_form>
                  <input type="checkbox" name="genre" id="genre1" /><label for="genre1">thriller</label>
                </Widget_1_body_form>
                <Widget_1_body_form>
                  <input type="checkbox" name="genre" id="genre2" /><label for="genre2">horror</label>
                </Widget_1_body_form>
                <Widget_1_body_form>
                  <input type="checkbox" name="genre" id="genre3" /><label for="genre3">drama</label>
                </Widget_1_body_form>
                <Widget_1_body_form>
                  <input type="checkbox" name="genre" id="genre4" /><label for="genre4">romance</label>
                </Widget_1_body_form>
                <Widget_1_body_form>
                  <input type="checkbox" name="genre" id="genre5" /><label for="genre5">action</label>
                </Widget_1_body_form>
                <Widget_1_body_form>
                  <input type="checkbox" name="genre" id="genre6" /><label for="genre6">comedy</label>
                </Widget_1_body_form>
                <Widget_1_body_form>
                  <input type="checkbox" name="genre" id="genre7" /><label for="genre7">romantic</label>
                </Widget_1_body_form>
                <Widget_1_body_form>
                  <input type="checkbox" name="genre" id="genre8" /><label for="genre8">animation</label>
                </Widget_1_body_form>
                <Widget_1_body_form>
                  <input type="checkbox" name="genre" id="genre9" /><label for="genre9">sci-fi</label>
                </Widget_1_body_form>
                <Widget_1_body_form>
                  <input type="checkbox" name="genre" id="genre10" /><label for="genre10">adventure</label>
                </Widget_1_body_form>
              </div>
            </div>
            <Widget_add_check_area>
              <span> View more</span>
              <SpanWordMovieGrid>
                <GlobalOutlined />
              </SpanWordMovieGrid>
            </Widget_add_check_area>
          </Widget_1_body>
        </div>
      </div>
      <div>
        <img src={Img2} className="w-full" />
      </div>
    </div>
  );
}
export default PageSideGirdMovie;
