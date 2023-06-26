import { styled } from "styled-components";

export const CssLoading = styled.div`
  background-color: #001232;
  opacity: 0.0 - 1.0;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  .spinner {
    width: 150px;
    height: 150px;
    border: 5px solid;
    border-color: red transparent blue transparent;
    border-radius: 50%;
    animation: spinner 2s linear infinite;
  }
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;
