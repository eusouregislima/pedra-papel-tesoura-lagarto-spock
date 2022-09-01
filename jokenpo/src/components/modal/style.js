import styled from "styled-components";

export const ModalStyled = styled.div`
  width: 80%;
  background-color: #ececec;
  border-radius: 7px;
  padding: 16px;
  position: absolute;
  transition: 0.5 ease;
  top: ${(props) => (props.open ? "5%" : "-100%")};
  opacity: ${(props) => (props.open ? "1" : "0")};
  z-index: 2;
`;

export const CloseModal = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 2%;
  top: 2%;

  border-radius: 50%;
  font-weight: 700;
  font-size: 15px;
  line-height: 33px;
`;
