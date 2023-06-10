import styled from "styled-components";


export const CssLoginPage = styled.div`
  padding-bottom: 80px;
  padding-top: 80px;
`;
export const CssInputLoginLabel = styled.label`
  text-transform: uppercase;
  color: #dbe2fb; 
`
export const CssSocialNetwork = styled.div`
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  overflow: hidden;
  font-size: 20px;
  margin-bottom: 20px;
  position: relative;
  &::before{
    content: "";
    width: 100%;
    display: inline-block;
    border-bottom: 2px solid #bdbdbd;
    position: absolute;
    left: calc(-50% - 40px);
    top : 15px
  }
  &::after{
    content: "";
    width: 100%;
    display: inline-block;
    border-bottom: 2px solid #bdbdbd;
    position: absolute;
    right: calc(-50% - 40px);
    top : 15px
  }
`
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
  &:hover{
    border: 1px solid #001232;
    background-image: -webkit-linear-gradient(169deg, #5560ff 17%, #aa52a1 63%, #ff4343 100%);
  }
`