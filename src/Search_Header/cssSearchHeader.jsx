import styled from "styled-components";
import BgImg from "./ticket-bg01.jpg";

export const SearchMovieCss = styled.div`
  max-width: 1170px;
  padding: 40px 30px;
  background-image: url(${BgImg});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  margin: auto;
  margin-top: -150px;
  position: relative;
  z-index: 5;
`;
export const IconSearch = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: -10px;
  a {
    width: calc(33.33% - 7px);
    margin-bottom: 10px;
    color: white;
    border-radius: 25px;
    padding: 5px 10px;
    text-transform: uppercase;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    gap: 10px;
  }
  @media (max-width: 820px) {
    & {
      width: 100%;
      margin-top: 20px;
      justify-content: center;
    }
    a {
      width: 60%;
      padding: 5px 10px;
      min-height: 50px;
      padding: 0px;
    }
  }
`;
export const DivMainInput = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width : 820px){
    flex-wrap: wrap;
  }
`
export const DivInput = styled.div`
  position: relative;
  width: 20%;
  @media (max-width : 820px){
    width: 50%;
  }
  @media (max-width : 380px){
    width: 100%;
  }
`
export const InputSearch = styled.div`
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
export const DivImgInputSearch = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
  box-shadow: 5px 0 15px rgba(0, 0, 0, 0.5);
`;
export const InputSearchContentHomePage = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #9eb1eb;
  border-radius: 0;
  padding: 0;
  height: 45px;
  padding-right: 50px;
  color : #dbe2fb;
`;

export const SelectInput = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
    @media (max-width : 820px){
    width: 50%;
  }
  @media (max-width : 380px){
    width: 100%;
    justify-content: start;
    margin-top: 20px;
  }
`
