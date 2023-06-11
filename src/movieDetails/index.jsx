import {
  DivBackGround,
  DivContainer,
  DivDetails,
  DivThumb,
  DivThumbClip,
  DivDetailsContent,
  H3,
  DivDetailsTag,
  ADetailsTag,
  ADetailsTagMain,
  DivBookWrapper,
  DivBook,
  DivBookLeft,
  DivBookItem,
  DivBookItemHeader,
  DivMovieDetailsSection,
  DivSocialAndDuration,
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
import { NavLink } from "react-router-dom";
function PageMovieDetails() {
  return (
    <div className="bg-[#001232]">
      <DivBackGround>
        <DivContainer>
          <DivDetails>
            <DivThumb>
              <img src="../imgMovieDetailsPulic/venus.jpg" className="w-full" />
              <DivThumbClip>
                <img src="../imgMovieDetailsPulic/video-button.png" />
              </DivThumbClip>
            </DivThumb>
            <DivDetailsContent>
              <H3>Venus</H3>
              <DivDetailsTag>
                <ADetailsTag>English ,</ADetailsTag>
                <ADetailsTag>Hindi ,</ADetailsTag>
                <ADetailsTag>Telegu ,</ADetailsTag>
                <ADetailsTag>Tamil</ADetailsTag>
              </DivDetailsTag>
              <ADetailsTagMain>horror</ADetailsTagMain>
              <DivSocialAndDuration>
                <div className="mx-[-5px] my-[-10px] flex gap-2">
                  <ADetailsTag className="mx-[5px] my-[10px] flex items-center gap-3">
                    <CalendarOutlined></CalendarOutlined>
                    <ADetailsTag>06 Dec, 2020</ADetailsTag>
                  </ADetailsTag>
                  <ADetailsTag className="mx-[5px] my-[10px] flex items-center gap-3">
                    <FieldTimeOutlined />
                    <ADetailsTag>2 hrs 50 mins</ADetailsTag>
                  </ADetailsTag>
                </div>
                <div>
                  <SocialNetwork></SocialNetwork>
                </div>
              </DivSocialAndDuration>
            </DivDetailsContent>
          </DivDetails>
        </DivContainer>
      </DivBackGround>
      <DivBook>
        <DivContainer>
          <DivBookWrapper>
            <DivBookLeft>
              <DivBookItem>
                <DivBookItemHeader>
                  <div>
                    <img src="../imgContentHomePage/tomato.png" alt="" />
                  </div>
                  <span className="text-white pl-4">88%</span>
                </DivBookItemHeader>
                <p>Tomatometer</p>
              </DivBookItem>
              <DivBookItem>
                <DivBookItemHeader>
                  <div>
                    <img src="../imgContentHomePage/cake.png" alt="" />
                  </div>
                  <span className="text-white pl-4">88%</span>
                </DivBookItemHeader>
                <p>audience Score</p>
              </DivBookItem>
              <DivBookItem>
                <DivBookItemHeader className="mb-[10px]">
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
                </DivBookItemHeader>
                <p>Tomatometer</p>
              </DivBookItem>
              <DivBookItem>
                <DivBookItemHeader className="mb-[10px]">
                  <span className="text-white mr-2">
                    <HeartOutlined />
                    <HeartOutlined className=" ml-1" />
                    <HeartOutlined className=" ml-1" />
                    <HeartOutlined className=" ml-1" />
                    <HeartOutlined className=" ml-1" />
                  </span>
                  <h5>0.0</h5>
                </DivBookItemHeader>
                <p>Rate It</p>
              </DivBookItem>
            </DivBookLeft>
            <NavLink to = "/Book-Tickets">
              <Button
                content="book tickets"
                backGround="-webkit-linear-gradient(169deg, #5560ff 17%, #aa52a1 63%, #ff4343 100%)"
                type="primary"
                htmlType="submit"
              ></Button>
            </NavLink>
          </DivBookWrapper>
        </DivContainer>
      </DivBook>
      <DivContainer>
        <DivMovieDetailsSection>
          <SliderMovieDetails></SliderMovieDetails>
          <PageContentMovieDetails></PageContentMovieDetails>
        </DivMovieDetailsSection>
      </DivContainer>
    </div>
  );
}

export default PageMovieDetails;
