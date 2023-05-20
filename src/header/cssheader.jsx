import { styled } from "styled-components";

export const MenuHeader = styled.div`
  width: 58.3333%;
`

export const DivHeader = styled.div`
  width: 100%;
  padding: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.102);
  position: absolute;
  @media (max-width : 820px){
    &{
      justify-content: space-between;
    }
    .menu-Header{
      display: none;
    }
    button {
      display: inline-block;
    }
  }
`