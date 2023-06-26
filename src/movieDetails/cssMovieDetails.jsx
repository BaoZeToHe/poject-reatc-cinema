import styled from "styled-components";

export const DivBackGround = styled.div`
  width: 100%;
  padding-top: 300px;
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
      rgba(0, 18, 50, 0.134891) 0%,
      #001232 90%
    );
  }
`;
export const DivContainer = styled.div`
  max-width: 1170px;
  margin: auto;
`;

export const DivDetails = styled.div`
  position: relative;
  z-index: 1;
`;
export const DivThumb = styled.div`
  width: calc(25% - 28px);
  display: block;
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
    /* background-color: rgba(0, 18, 50, 0.4); */
  }
  @media (max-width: 880px) {
    display: none;
  }
`;
export const DivThumbClip = styled.a`
  width: 81px;
  height: 81px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 1;
`;
export const DivSocialAndDuration = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 350px) {
    flex-wrap: wrap;
  }
`;
export const DivDetailsContent = styled.div`
  @media (min-width: 350px) {
    margin-left: 0%;
  }
  @media (min-width: 992px) {
    margin-left: 25%;
  }
`;
export const DivDetailsTag = styled.div`
  margin-bottom: 21px;
`;
export const ADetailsTag = styled.a`
  font-size: 14px;
  color: white;
  text-transform: uppercase;
`;
export const ADetailsTagMain = styled.a`
  margin-bottom: 13px;
  display: inline-block;
  border: 1px solid rgba(163, 177, 198, 0.2);
  font-size: 13px;
  color: white;
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
export const DivBook = styled.div`
  padding: 47px 0;
  border-top: 1px solid #17305f;
  border-bottom: 1px solid #17305f;
  background-color: #032055;
`;
export const DivBookWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: -30px;
  margin-left: 25%;
  @media (max-width: 880px) {
    margin-left: 0%;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const DivBookLeft = styled.div`
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
  @media (max-width: 880px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 400px) {
    justify-content: space-between;
  }
`;
export const DivBookItem = styled.div`
  margin: 10px 15px;
  text-align: center;
`;
export const DivBookItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
`;
export const DivMovieDetailsSection = styled.div`
  padding-top: 80px;
  background: #001232;
  font-size: 16px;
  color: #dbe2fb;
  line-height: 28px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 780px) {
    justify-content: center;
    padding-bottom: 80px;
    flex-wrap: wrap;
  }
  @media (min-width: 992px) {
    padding-bottom: 120px;
  }
`;

export const DivSlierContent = styled.div`
  transform: translateY(-40px);
  order: 1;
  margin-bottom: 0px;
  width: 25%;
  @media (max-width: 850px) {
    max-width: 50%;
    margin-bottom: 30px;
    order: 2;
  }
  @media (max-width: 400px) {
    max-width: 100%;
    padding: 20px;
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
export const DivContent = styled.div`
  margin-bottom: 50px;
  padding-right: 15px;
  padding-left: 15px;
  order: 2;
  width: 75%;
  h3 {
    font-size: 28px;
    margin-bottom: 23px;
    text-transform: uppercase;
    margin-top: -10px;
  }

  @media (max-width: 850px) {
    order: 1;
    width: 100%;
  }
`;
export const DivOfferItem = styled.div`
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
export const DivHeader = styled.div`
  padding-bottom: 14px;
  border-bottom: 1px dashed #11326f;
  margin-bottom: 40px;
  position: relative;
`;

export const DivCarousel2 = styled.div`
  width: 100%;
  margin-bottom: 60px;
  .owl-stage-outer {
    position: relative;
    overflow: hidden;
    .owl-item {
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
      width: 100%;
      height: 100%;
    }
  }
`;
export const CardThumb = styled.div`
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
export const CardContent = styled.div`
  width: 100%;
  text-align: center;
  .owl-nav {
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
  span {
    color: #31d7a9;
    display: block;
    font-size: 14px;
    margin-bottom: 17px;
    line-height: 1.5;
  }
  P {
    font-size: 14px;
    margin-bottom: 0px !important;
    color: #9aace5;
  }
`;
export const DivItem = styled.div`
  margin-bottom: 60px;
`;
export const DivTab = styled.div`
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
