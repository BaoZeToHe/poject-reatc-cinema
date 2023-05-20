import {
  DivBackGround,
  DivContainer,
  Div_details,
  Div_thumb,
  Div_thumb_clip,
  Div_details_content,
  H3,
  Div_details_Tag,
  A_details_Tag,
  A_details_tag_main,
  Div_book,
  Div_book_left,
  Div_book_item,
  Div_book_item_header,
  Div_movie_details_section,
} from "./cssMovieDetails";
import {
  CalendarOutlined,
  FieldTimeOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import Button from "../button/button";
import SocialNetwork from "./social_network.jsx";
import SliderMovieDetails from "./SliderMovieDeatails";
import PageContentMovieDetails from "./ContentMovieDetails/index.jsx";
function PageMovieDetails() {
  return (
    <div className="bg-[#001232]">
      <DivBackGround>
        <DivContainer>
          <Div_details>
            <Div_thumb>
              <img src="./imgMovieDetailsPulic/venus.jpg" className="w-full" />
              <Div_thumb_clip>
                <img src="./imgMovieDetailsPulic/video-button.png"></img>
              </Div_thumb_clip>
            </Div_thumb>
            <Div_details_content>
              <H3>Venus</H3>
              <Div_details_Tag>
                <A_details_Tag>English ,</A_details_Tag>
                <A_details_Tag>Hindi ,</A_details_Tag>
                <A_details_Tag>Telegu ,</A_details_Tag>
                <A_details_Tag>Tamil</A_details_Tag>
              </Div_details_Tag>
              <A_details_tag_main>horror</A_details_tag_main>
              <div className="flex justify-between ">
                <div className="mx-[-5px] my-[-10px] flex gap-2">
                  <A_details_Tag className="mx-[5px] my-[10px] flex items-center gap-3">
                    <CalendarOutlined></CalendarOutlined>
                    <A_details_Tag>06 Dec, 2020</A_details_Tag>
                  </A_details_Tag>
                  <A_details_Tag className="mx-[5px] my-[10px] flex items-center gap-3">
                    <FieldTimeOutlined />
                    <A_details_Tag>2 hrs 50 mins</A_details_Tag>
                  </A_details_Tag>
                </div>
                <div>
                  <SocialNetwork></SocialNetwork>
                </div>
              </div>
            </Div_details_content>
          </Div_details>
        </DivContainer>
      </DivBackGround>
      <Div_book>
        <DivContainer>
          <div className="flex items-center justify-between mb-[-30px] ml-[25%]">
            <Div_book_left>
              <Div_book_item>
                <Div_book_item_header>
                  <div>
                    <img src="./imgContentHomePage/tomato.png" alt="" />
                  </div>
                  <span className="text-white pl-4">88%</span>
                </Div_book_item_header>
                <p>Tomatometer</p>
              </Div_book_item>
              <Div_book_item>
                <Div_book_item_header>
                  <div>
                    <img src="./imgContentHomePage/cake.png" alt="" />
                  </div>
                  <span className="text-white pl-4">88%</span>
                </Div_book_item_header>
                <p>audience Score</p>
              </Div_book_item>
              <Div_book_item>
                <Div_book_item_header className="mb-[10px]">
                  <div>
                    <h5>4.5</h5>
                  </div>
                  <span className="text-white ">
                    <HeartOutlined className="text-red-500 ml-2" />
                    <HeartOutlined className="text-red-500 ml-1" />
                    <HeartOutlined className="text-red-500 ml-1" />
                    <HeartOutlined className="text-red-500 ml-1" />
                    <HeartOutlined className="text-red-500 ml-1" />
                  </span>
                </Div_book_item_header>
                <p>Tomatometer</p>
              </Div_book_item>
              <Div_book_item>
                <Div_book_item_header className="mb-[10px]">
                  <span className="text-white mr-2">
                    <HeartOutlined />
                    <HeartOutlined className=" ml-1" />
                    <HeartOutlined className=" ml-1" />
                    <HeartOutlined className=" ml-1" />
                    <HeartOutlined className=" ml-1" />
                  </span>
                  <h5>0.0</h5>
                </Div_book_item_header>
                <p>Rate It</p>
              </Div_book_item>
            </Div_book_left>
            <Button
              content="book tickets"
              backGround="-webkit-linear-gradient(169deg, #5560ff 17%, #aa52a1 63%, #ff4343 100%)"
              type="primary"
              htmlType="submit"
            ></Button>
          </div>
        </DivContainer>
      </Div_book>
      <DivContainer>
      <Div_movie_details_section>
        
          <SliderMovieDetails></SliderMovieDetails>
          <PageContentMovieDetails></PageContentMovieDetails>
      </Div_movie_details_section>
      </DivContainer>



    </div>
  );
}
export default PageMovieDetails;
