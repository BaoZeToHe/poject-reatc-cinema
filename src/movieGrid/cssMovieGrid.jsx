import styled from "styled-components";
import BgGroundMovieGrid from "./banner02.jpg";

export const Body = styled.div`
  height: 99.9vh;
  width: 98.9vw;
  padding: 0;
  margin: 0;
  font-size: 16px;
  color: #dbe2fb;
  line-height: 28px;
  font-family: "Open Sans", sans-serif;
  background: #001232;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
`;
export const DivContent = styled.div`
  text-align: center;
  max-width: 840px;
  z-index: 10;
`;
export const BgMovieGrid = styled.div`
  background-image: url(${BgGroundMovieGrid});
  height: 99.9vh;
  width: 98.9vw;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.3;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const H1ContentMovieGrid = styled.h1`
  font-size: 80px;
  line-height: 1.1;
  text-transform: uppercase;
  margin-bottom: 18px;
  font-weight: 800;
  @media (max-width: 820px) {
    font-size: 36px;
  }
`;
export const PContentMovieGrid = styled.p`
  font-size: 28px;
  line-height: 1.4;
  @media (max-width: 820px) {
    margin-bottom: -7px !important;
    font-size: 20px;
  }
`;
export const DivListMovie = styled.div`
  max-width: 1170px;
  margin: auto;
  margin-top: 120px;
  color: white;
`;
export const DivSiderGridMovie = styled.div`
  width: 25%;
  height: auto;
  order: 1;
  @media (max-width: 820px) {
    width: 100%;
    order: 2;
  }
`;
export const DivContentGridMovie = styled.div`
  width: 75%;
  background-color: #001232;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  order: 2;
  @media (max-width: 820px) {
    width: 100%;
    order: 1;
  }
`;
export const CssCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  flex-wrap: wrap;
  @media (max-width: 820px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }
`;
export const Img = styled.img`
  width: 100%;
  border-radius: 7px 7px 5px 5px;
  transition: all ease 0.3s;
  &:hover {
    transform: scale(1.1);
    border-radius: 7px 7px 5px 5px;
  }
`;
export const H5 = styled.h5`
  height: 8rem ;
  padding: 23px 0;
  text-transform: capitalize;
  border-bottom: 1px dashed #11326f;
  font-size: 24px;
  line-height: 1.3;
`;
export const Li = styled.li`
  display: flex;
  gap: 10px;
  padding-right: 20px;
  width: auto;
`;
export const Div = styled.div`
  width: 32%;
  margin-bottom: 30px;
  border-radius: 7px 7px 5px 5px;
  background-color: #032055;
  position: relative;
  color: #ffffff;
  &:hover {
    color: #31d7a9;
  }
  @media (max-width: 820px) {
    width: 45%;
  }
  @media (max-width: 450px) {
    gap: 0;
    width: 100%;
  }
`;
export const DivFilter = styled.div`
  border-radius: 5px;
  padding: 10px 38px;
  border: 1px solid rgba(163, 177, 198, 0.151);
  margin-bottom: 30px;
  font-size: 16px;
  color: #dbe2fb;
  line-height: 28px;
`;
export const DivFilterMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: -20px;
  @media (max-width: 400px) {
    flex-wrap: wrap;
  }
`;
export const DivFilterItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
  margin-bottom: 10px;
`;
export const DivLeftFilter = styled.div`
  margin-bottom: 10px;
  margin-right: -30px;
  display: flex;
  flex-wrap: wrap;
`;
export const SelectFilter = styled.select`
  height: 40px;
  border: 1px solid rgba(163, 177, 198, 0.151);
  border-radius: 20px;
  padding: 0 20px;
  background: transparent;
`;
export const UlFilter = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
  li {
    margin-right: 20px;
    border: 1px solid rgba(163, 177, 198, 0.151);
    border-radius: 20px;
    width: 60px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    padding: 0;
    font-size: 18px;
  }
`;
export const Widget_header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 30px;
`;
export const H5_Widget_header = styled.h5`
  font-weight: 600;
  text-transform: capitalize;
  font-size: 28px;
  line-height: 1.3;
  margin: 0;
  margin-top: -9px;
`;
export const Widget_1_body = styled.div`
  padding: 30px;
  border: 1px solid #1a2a47;
  border-radius: 4px;
  background-color: #032055;
`;
export const H6_Widget = styled.h6`
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  border-bottom: 1px solid #1f2b72;
  padding-bottom: 15px;
  margin-bottom: 23px;
`;
export const Widget_1_body_form = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 13px;
  input {
    width: 14px;
    height: 14px;
    background-color: transparent;
    border: 1px solid #2d4186;
    outline: none;
    border-radius: 4px;
  }
  label {
    margin: 0;
    width: calc(100% - 14px);
    padding-left: 10px;
    position: relative;
    font-size: 12px;
    text-transform: uppercase;
  }
`;
export const Widget_add_check_area = styled.div`
  margin-top: 39px;
  padding-top: 11px;
  border-top: 1px solid #1f2b72;
  margin-bottom: -9px;
  display: flex;
  align-items: stretch;
  gap: 10px;
`;
export const SpanWordMovieGrid = styled.span`
  width: 12px;
  height: 12px;
  display: inline-block;
`;

export const ButtonSplitPage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  a{
    width: 42px;
    height: 42px;
    text-align: center;
    line-height: 42px;
    border-radius: 50%;
    color: #ffffff
  }
`