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
import {
  
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesRequest } from "../redux/Slice/sliceDataMovie";

function PageMovieDetails() {
  let { id_movie } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.DataMovieSlice.data);
  useEffect(() => {
    dispatch(
      getMoviesRequest({
        id: id_movie,
        _limit: 1,
      })
    );
  }, [id_movie]);
  return (
    <div className="bg-[#001232]">
      {data.map((item, index) => {
        return (
          <>
            <DivBackGround
              style={{ backgroundImage: `url(${item.img_backGround})` }}
            >
              <DivContainer>
                <DivDetails>
                  <DivThumb>
                    <img src={`${item.img_Main}`} className="w-full" />
                    <DivThumbClip>
                      <img src="https://res.cloudinary.com/djuhqvlld/image/upload/v1686905409/video-button_hi6g10.png" />
                    </DivThumbClip>
                  </DivThumb>
                  <DivDetailsContent>
                    <H3>{`${item.name}`}</H3>
                    <DivDetailsTag>
                      <ADetailsTag>{`${item.performer}`}</ADetailsTag>
                    </DivDetailsTag>
                    <ADetailsTagMain>horror</ADetailsTagMain>
                    <DivSocialAndDuration>
                      <div className="mx-[-5px] my-[-10px] flex gap-2">
                        <ADetailsTag className="mx-[5px] my-[10px] flex items-center gap-3">
                          <CalendarOutlined></CalendarOutlined>
                          <ADetailsTag>{`${item.premiere}`}</ADetailsTag>
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
                  <NavLink to={`/Book-Tickets/${id_movie}`}>
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
                <PageContentMovieDetails
                  item={item.img_extra}
                  content={item.description}
                  cast={item.cast}
                  crow={item.crow}
                ></PageContentMovieDetails>
              </DivMovieDetailsSection>
            </DivContainer>
          </>
        );
      })}
    </div>
  );
}

export default PageMovieDetails;
