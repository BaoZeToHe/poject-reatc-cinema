import styled from "styled-components";
import BgImg from "./imgHeader/ticket-bg01.jpg";
export const CssHomePage = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

`;
export const CssSearchMovie = styled.div`
  max-width: 1170px;
  padding: 40px 30px;
  background-image: url(${BgImg});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  margin: auto;
  margin-top  : -150px;
  position: relative;
  z-index: 5;
`;
export const CSSInputSearch = styled.div`
  width: 100%;
  padding: 30px;
  position: relative;
  -webkit-box-shadow: 0px 5px 15px 0px rgba(44, 41, 157, 0.5);
  box-shadow: 0px 5px 15px 0px rgba(44, 41, 157, 0.5);
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  margin-top: 53px;
  &:before {
      background-color: black;
      display: inline-block;
      content: "";
      opacity: 0.4;
      width: 100%;
      height: calc(100% + 1px);
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
`;

