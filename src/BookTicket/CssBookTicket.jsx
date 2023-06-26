import { styled } from "styled-components";

export const BackGround = styled.div`
  padding-top: 212px;
  padding-bottom: 112px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  &::before {
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
export const DivDetailsBannerContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  font-size: 16px;
  color: #dbe2fb;
  line-height: 28px;
  h3 {
    font-size: 60px;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0;
    line-height: 1.3;
    color: #ffffff;
    font-family: "Open Sans", sans-serif;
    margin-bottom: 6px;
  }
  a {
    color: #9aace5;
    text-transform: uppercase;
    &::after {
      content: " , ";
    }
    &:nth-child(4)::after {
      content: " ";
    }
  }
`;
export const DivBookSection = styled.div`
  background-color: #032055;
  padding: 47px 0;
  border-top: 1px solid #17305f;
  border-bottom: 1px solid #17305f;
  position: relative;
  z-index: 5;
`;
export const DivFromSelect = styled.div`
  margin-bottom: -20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const DivAlert = styled.div`
  .ant-drawer-content-wrapper{
    background-color: red !important;
  }
  .ant-drawer-content{
    width: 100%;
    height: 100%;
    background-color: rgba(10, 30, 94, 0.9)!important;
  }
`
export const DivFromGround = styled.div`
  margin-bottom: 20px;
  position: relative;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  select {
    background: transparent;
    border: none;
    color: #ffffff;
    margin-left: 10px;
    option {
      color: black;
      font-weight: normal;
      display: block;
      white-space: nowrap;
      min-height: 1.2em;
      padding: 0px 2px 1px;
    }
  }
  span {
    color: #31d7a9;
    text-transform: uppercase;
    font-weight: 600;
    margin-left: 10px;
  }
`;
export const DivFromThumb = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
  box-shadow: 5px 0 15px rgba(0, 0, 0, 0.5);
`;
export const DivTicket = styled.div`
  background-color: #001232;
  position: relative;
  z-index: 10;
  @media (min-width : 370px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  @media (min-width: 992px) {
    padding-top: 120px;
    padding-bottom: 120px;
  }
`
export const DivLoadTicket = styled.div`
  display: flex;
  gap: 20px;
`
export const DivTicketBook = styled.div`
  background-color: #01173f;
  width: 75%;
  padding: 30px ;
  margin: -5px;
  display: flex ;
  align-items: center;
  justify-content: flex-start;
  a{
    color: #ffffff;
    padding: 5px;
    width: 70px;
    background: #162f5f;
    position: relative;
    text-align: center;
    -webkit-mask-image : url("https://res.cloudinary.com/djuhqvlld/image/upload/v1686916388/movie-seat_fdhegg.png");
    mask-image: url("https://res.cloudinary.com/djuhqvlld/image/upload/v1686916388/movie-seat_fdhegg.png");
    -webkit-mask-size : 100% 100%;
    mask-size: 100% 100%;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;    
    cursor: pointer;
    transition: all ease 0.3s;
    margin: 5px;
    &:hover {
      background-color: #31d7a9;
    }
  }
`
export const DivTicketADerTiSeMeNt = styled.div`
  width: 25%;
`
