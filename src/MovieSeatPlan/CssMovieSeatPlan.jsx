import styled from "styled-components";

export const DivBackGround = styled.div`
  background-image: url("https://pixner.net/boleto/demo/assets/images/banner/banner04.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding-top: 212px;
  padding-bottom: 112px;
  z-index: 1;
  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: -webkit-linear-gradient(
      -90deg,
      rgba(0, 18, 50, 0.134891) 0%,
      #001232 100%
    );
  }
`;
export const DivContainer = styled.div`
  margin: auto;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1170px;
  }
`;
export const DivChairMovie = styled.div`
  margin-top: -10px;
  @media (min-width: 576px) {
    margin-bottom: 55px;
  }
  @media (min-width: 992px) {
    margin-bottom: 110px;
  }
`;
export const DivSeatPlan = styled.div`
  @media (min-width: 992px) {
    padding-bottom: 120px;
    padding-top: 120px;
  }
`;
export const DiVh4 = styled.h4`
  margin-bottom: 60px;
  font-size: 28px;
  margin: 0 auto 40px;
  position: relative;
  text-align: center;
  max-width: 350px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 10px;
  line-height: 1.3;
  color: #ffffff;
  font-family: "Open Sans", sans-serif;
  &::before {
    width: 80%;
    position: absolute;
    content: "";
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 1px;
    background: #213a69;
  }
  &::after {
    width: 100%;
    position: absolute;
    content: "";
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 1px;
    background: #213a69;
  }
`;
export const DiVh5 = styled.h5`
  margin: 0 auto 30px;
  margin-bottom: 60px;
  padding: 10px;
  text-align: center;
  position: relative;
  text-align: center;
  max-width: 350px;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 10px;
  color: #31d7a9;
  &::before {
    content: "";
    position: absolute;
    width: 80%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 1px;
    background: #213a69;
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 1px;
    background: #213a69;
  }
`;
export const DivScreenThumb = styled.div`
  @media (min-width: 576px) {
    width: 100%;
    max-width: 730px;
    margin: 0 auto 30px;
    margin-bottom: 60px;
  }
`;
export const DivDate = styled.div`
  font-size: 16px;
  color: #dbe2fb;
  line-height: 28px;
`;
export const DivSelect = styled.select`
  margin-left: 20px;
  border-radius: 5px;
  background-image: -webkit-linear-gradient(
    169deg,
    #5560ff 17%,
    #aa52a1 63%,
    #ff4343 100%
  );
  box-shadow: 0px 10px 15px 0px rgba(59, 55, 188, 0.5);
  border: none;
  height: 36px;
`;
export const DivPage = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -15px -20px;
  align-items: center;
  position: relative;
  z-index: 10;
`;
export const DivMins = styled.div`
  color: white;
  h3 {
    font-size: 28px;
    margin-bottom: 12px;
  }
  p {
    margin-top: -11px;
  }
`;
export const DivContent = styled.div`
  margin: auto;
  text-align: center;
  max-width: 840px;
  z-index: 10;
  h3 {
    text-transform: capitalize;
    font-size: 60px;
    margin-bottom: 6px;
    font-weight: 700;
    margin: 0;
    line-height: 1.3;
    color: #ffffff;
    font-family: "Open Sans", sans-serif;
    @media (min-width: 576px) {
      font-size: 36px;
      margin-top: -10px;
    }
  }
`;
export const DivTag = styled.a`
  font-size: 16px;
  color: #dbe2fb;
  line-height: 28px;
  overflow-x: hidden;
  font-family: "Open Sans", sans-serif;
  a:nth-child(1)::after {
    content: " | ";
    font-size: 18px;
  }
`;
export const DivPageTitle = styled.div`
  background-color: #032055;
  padding: 40px 0;
  border-top: 1px solid #17305f;
  border-bottom: 1px solid #17305f;
`;
export const TagUL = styled.ul`
  width: calc(100% - 60px);
  margin: auto;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  li {
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    padding: 5px;
    color: white;
    text-align: center;
  }
  span {
    width: 20px;
    color: white;
  }
`;
export const ProceedBook = styled.div`
  background-image: url("https://pixner.net/boleto/demo/assets/images/movie/movie-bg-proceed.jpg");
  padding: 32px 40px 32px;
  position: relative;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;
export const DivMainBook = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: -25px;
  position: relative;
  z-index: 1;
`;
export const DivBook = styled.div`
  margin-bottom: 25px;
  span {
    color: #ffffff;
    text-transform: capitalize;
    display: block;
    margin-bottom: 14px;
  }
  h4 {
    display: inline-block;
    color: #31d7a9;
    text-transform: uppercase;
    font-size: 36px;
    font-weight: 700;
    margin-top: -10px;
  }
`;
