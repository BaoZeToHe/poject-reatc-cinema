import styled from "styled-components";
export const DivFooter = styled.div`
  background-color: #001232;
  position: relative;
  top : -120px;
  &::before {
    content: "";
    width: 100%;
    position: absolute;
    background-image: url("./imgFooter/footer-shape.png");
    top: 120px;
    bottom: 0;
    right: 0;
    left: 0;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
export const DivInputFooter = styled.div`
  max-width: 1120px;
  margin: auto;
  background-image: url("./imgFooter/newslater-bg01.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  padding: 60px 20px;
  text-align: center;
  &:after {
    background-image: -webkit-linear-gradient(0deg, #7400ba 0%, #0f5ae0 100%);
    content: "";
    width: 100%;
    position: absolute;
    opacity: 0.8;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
export const DivContentFooter = styled.div`
  max-width: 540px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;
export const DivH5 = styled.h5`
  color: #31d7a9;
  margin-bottom: 23px;
  text-transform: uppercase;
  font-size: 24px;
`;
export const DivH3 = styled.h3`
  margin-bottom: 50px;
  text-transform: uppercase;
  font-size: 36px;
  font-weight: 700;
  margin: 0;
  line-height: 1.3;
  color: #ffffff;
`;

export const DivInput = styled.input`
  height: 50px;
  width: 100%;
  padding-right: 160px;
  color: #99abe2;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 25px;
  padding-left: 20px;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.1);
  display: inline-block;
  background: transparent;
`;
