import styled from "styled-components";
import BgImg from "./Search_Header/inputSeach/iconinputseach/ticket-bg01.jpg";



export const CssContentHomePage = styled.div`
  max-width: 1170px;
  padding-bottom: 80px;
  padding-top: 80px;
  padding-left: 15px;
  padding-right: 15px;
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
export const DivSider = styled.div`
  width: 25%;
  height: auto;
  order : 1;
    @media (max-width: 820px)  {
    width: 100%;
    order: 2;
  }
`
export const DivContent = styled.div`
  width: 75%;
  background-color: #001232;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  order : 2;
  @media (max-width: 820px)  {
    width: 100%;
    order: 1;
  }
`
export const Div = styled.div`
    width: 33.333333%;
    margin-bottom: 30px;
    border-radius: 7px 7px 5px 5px;
    background-color: #032055;
    position: relative;
    color : #ffffff;
    &:hover{
      color : #31d7a9 ;
    }
    @media (max-width: 820px){
      width: 45%;
    }
    @media (max-width: 450px){
      gap: 0;
      width: 100%;

   }
`
export const CssCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;
  @media (max-width: 820px){
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;

  }

`
export const Img = styled.img`
  width: 100%;
  border-radius: 7px 7px 5px 5px;
  transition: all ease 0.3s;
  &:hover{
    transform: scale(1.1);
    border-radius: 7px 7px 5px 5px;
  }
  
`
export const H5 = styled.h5`
  padding: 23px 0;
  text-transform: capitalize;
  border-bottom: 1px dashed #11326f;
  font-size: 24px;
  line-height: 1.3;
`
export const Li = styled.li`
  display: flex;
  gap : 10px;
  padding-right: 20px;
  width: auto;
`
export const CssDiv = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #1a2a47;
  padding-bottom: 10px;
  position: relative;
  &::before{
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 98px;
    height: 3px;
    background: #31d7a9;
  }
`;
export const CssH2 = styled.h2`
  font-size: 50px;
  line-height: 60px;
  margin-top: -13px;
  text-transform: uppercase;
  color: #ffffff;
`;
export const CssA = styled.a`
  font-weight: 700;
  color: #31d7a9;
`;
export const CssDate = styled.div`
  background-image: -webkit-linear-gradient(45deg, #f54646 0%, #f53da1 100%);
  position: absolute;
  top: 0;
  left: 20px;
  padding: 12px;
  border-radius: 0 0 30px 30px;
  text-align: center;
`
export const CssH6Date = styled.h6`
  font-size: 22px;
  margin-bottom: -5px;
`
export const CssSpanDate = styled.span`
  font-weight: 600;
  font-size: 14px;
`
export const CssDivSiler = styled.div`
  padding: 30px;
  border: 1px solid #1a2a47;
  border-radius: 4px;
  margin-bottom: 40px;
`
export const CssLiSiler = styled.li`
  padding: 20px 0;
  border-bottom: 1px solid #1a2a47;
`
export const CssSpanIcon = styled.li`
  width: 55px;
  padding-right: 20px;
`
export const CssSpanContent = styled.span`
  font-weight: 600;
  font-size: 18px;
  align-self: center;
  display: block;
  width: calc(100% - 55px);
`
