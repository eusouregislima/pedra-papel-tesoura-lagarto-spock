import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  border: none;
  outline: none;
  transition: 0.3s ease;
  font-family: 'Poppins', sans-serif;
}

body{
  width: 100%;
  height: 100vh;
  justify-content: center;
  display: flex;
  background-color: #000000;
  color: white;
}

button{
  cursor: pointer;
  &:hover{
    opacity: 0.8;
    color: green;
  }
  &:active{
    opacity: 0.6;
    background-color: white;
  }
}
`;

export const Container = styled.div`
  height: 100vh;
  width: 430px;
  padding: 20px 50px;
  background-color: darkblue;
`;

export const Flex = styled.div`
  display: flex;
  width: 100%;
  align-items: ${(props) => props.aling || "center"};
  justify-content: ${(props) => props.justify || "center"};
  flex-direction: ${(props) => props.direction || "row"};
  gap: ${(props) => props.gap || "16px"};
`;

export const Spacer = styled.div`
  width: 100%;
  margin: ${(props) => props.margin || "20px"};
`;

export const Typography = styled.p`
  font-weight: ${(props) => props.fontWeight || "700"};
  font-size: ${(props) => props.size || "18px"};
  line-height: ${(props) => props.lineHeight || "27px"};
  color: ${(props) => (props.primary ? "#1a1a1a" : "#ececec")};
`;

export const Rules = styled.button`
  width: 70%;
  height: 40px;
  background-color: black;
  color: white;

  font-weight: 780;
  font-size: 15px;
  line-height: 24px;
  border-radius: 7px;
`;
