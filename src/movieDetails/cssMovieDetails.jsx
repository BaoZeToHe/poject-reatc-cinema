import styled from "styled-components";

export const DivBackGround = styled.div`
  background-image: url("./imgMovieDetailsPulic/banner03.jpg");
  padding-top: 235px;
  padding-bottom: 20px;
  position: relative;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: -webkit-linear-gradient(
      180deg,
      rgba(0, 18, 50, 0.134891) 0%,
      #001232 90%
    );
  }
`;
export const DivContainer = styled.div`
  max-width: 1170px;
  margin: auto;
`;
export const Div_details = styled.div`
  position: relative;
  z-index: 1;
`;
export const Div_thumb = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
  border: 1px solid #17305f;
  overflow: hidden;
  border-radius: 5px;
  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 18, 50, 0.4);
  }
`;
export const Div_thumb_clip = styled.a`
  width: 81px;
  height: 81px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 1;
`;
export const Div_details_content = styled.div`
  margin-left: 25%;
`;
export const Div_details_Tag = styled.div`
  margin-bottom: 21px;
`;
export const A_details_Tag = styled.a`
  font-size: 14px;
  color: #9aace5;
  text-transform: uppercase;
`;
export const A_details_tag_main = styled.a`
  margin-bottom: 13px;
  display: inline-block;
  border: 1px solid rgba(163, 177, 198, 0.2);
  font-size: 13px;
  color: #9aace5;
  text-transform: uppercase;
  padding: 3px 17px;
  border-radius: 18px;
  transition: all ease 0.3s;
`;
export const H3 = styled.h3`
  font-size: 36px;
  margin-top: -10px;
  color: white;
`;
export const CssA = styled.a`
  display: inline-block;
  transition: all ease 0.3s;
  width: 40px;
  height: 40px;
  line-height: 36px;
  text-align: center;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 14px;
  &:hover {
    border: 1px solid #001232;
    background-image: -webkit-linear-gradient(
      169deg,
      #5560ff 17%,
      #aa52a1 63%,
      #ff4343 100%
    );
  }
`;
export const Div_book = styled.div`
  padding: 47px 0;
  border-top: 1px solid #17305f;
  border-bottom: 1px solid #17305f;
  background-color: #032055;
`;
export const Div_book_left = styled.div`
  margin: -10px -15px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  p {
    font-size: 16px;
    color: #dbe2fb;
    line-height: 28px;
  }
  h5 {
    font-size: 24px;
    color: white;
  }
`;
export const Div_book_item = styled.div`
  margin: 10px 15px;
  text-align: center;
`;
export const Div_book_item_header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
`;
export const Div_movie_details_section = styled.div`
  padding-top: 80px;
  background: #001232;
  font-size: 16px;
  color: #dbe2fb;
  line-height: 28px;
  display: flex;
  justify-content: space-between;
  @media (min-width: 780px) {
    padding-bottom: 80px;
  }
  @media (min-width: 992px) {
    padding-bottom: 120px;
  }
`;

export const Div_Slier_Content = styled.div`
  transform: translateY(-40px);
  margin-bottom: 0px;
  @media (min-width: 380px) {
    max-width: 83.333333%;
    margin-bottom: 30px;
  }
  @media (min-width: 780px) {
    max-width: 50%;
    margin-bottom: 30px;
  }
  @media (min-width: 992px) {
    max-width: 25%;
  }
  li {
    padding: 10px;
  }
  a {
    padding: 10px 20px;
    font-size: 12px;
    border: 1px solid rgba(163, 177, 198, 0.2);
    border-radius: 15px;
    text-transform: uppercase;
    color: #becdff;
    &:hover {
      border: 1px solid #001232;
      background-image: -webkit-linear-gradient(
        169deg,
        #5560ff 17%,
        #aa52a1 63%,
        #ff4343 100%
      );
    }
  }
  h3 {
    color: white;
    font-size: 28px;
    margin-top: -9px;
    margin-bottom: 30px;
  }
`;
export const Div_offer_item = styled.div`
  width: 100%;
  border: 1px dashed #1f3253;
  border-radius: 10px;
  padding: 20px 20px 28px;
  margin-bottom: 30px;
  h6 {
    font-size: 16px;
    font-weight: 400;
    font-family: "Open Sans", sans-serif;
    margin-bottom: 17px;
    color: white;
  }
`;
export const Div_header = styled.div`
  padding-bottom: 14px;
  border-bottom: 1px dashed #11326f;
  margin-bottom: 40px;
  position: relative;
`;
export const Div_Content = styled.div`
  margin-bottom: 50px;
  padding-right: 15px;
  padding-left: 15px;

  h3 {
    font-size: 28px;
    margin-bottom: 23px;
    text-transform: uppercase;
    margin-top: -10px;
  }
  @media (min-width: 992px) {
    width: 75%;
  }
`;
export const Div_Carousel2 = styled.div`
  width: 100%;
  margin-bottom: 60px;
  .owl-stage-outer {
    position: relative;
    overflow: hidden;

    .owl-item {
      width: 262.5px;
      margin-right: 30px;
    }
    .owl-stage {
      display: flex;
      flex-wrap: wrap;
    }
    .next {
      width: 200px;
    }
    img {
      border-radius: 5px;
    }
  }
`;
export const Card_thumb = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: 1px solid rgba(49, 215, 169, 0.5);
  margin: 0 auto;
  margin-bottom: 30px;
  padding: 10px;
  text-align: center;
  a {
    display: block;
  }
  img {
    width: 100%;
    border: 4px solid #31d7a9;
    border-radius: 50% !important ;
  }
`;
export const Card_content = styled.div`
  width: 100%;
  text-align: center;
  .owl-nav{
    background-color: red !important;
  }
  h6 {
    margin-bottom: 12px;
    font-size: 18px;
    line-height: 1.3;
    color: #ffffff;
    @media (min-width: 576px) {
      font-size: 18px;
      margin-top: -5px;
    }
  }
  span{
    color : #31d7a9;
    display: block;
    font-size: 14px;
    margin-bottom: 17px;
    line-height: 1.5
  }
  P{
    font-size: 14px;
    margin-bottom: 0px !important;
    color : #9aace5;
  }
`;
export const Div_item = styled.div`
  margin-bottom: 60px;
`;
export const Div_Tab = styled.div`
  margin-top: 40px;
    position: relative;

  ul {
    padding: 10px 0;
    border-top: 1px solid #11326f;
    border-bottom: 1px solid #11326f;
    margin-bottom: 40px;
    display: flex;
    a {
      text-transform: uppercase;
      margin-right: 60px;
      position: relative;
    }
    .active {
      color: #31d7a9;
      &::before {
        content: "";
        background-color: #31d7a9;
        height: 3px;
        position: absolute;
        bottom: -15px;
        width: 100%;
        transition: all ease 1s;
      }
      &::after {
        content: "";
        background-color: #31d7a9;
        height: 3px;
        position: absolute;
        top: -15px;
        left: 0;
        width: 100%;
        transition: all ease 1s;
      }
    }
  }
`;
