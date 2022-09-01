import { Flex, Spacer, Typography } from "../../styles";
import { ModalStyled, CloseModal } from "./style";

export const Modal = ({ open, handOpenModal, titleModal, messageModal }) => {
  return (
    <ModalStyled open={open}>
      <Flex direction="column">
        <Typography primary>{titleModal}</Typography>
        <Spacer margin="1px" />
        <CloseModal onClick={() => handOpenModal()}>❌</CloseModal>
        <Typography primary>{messageModal}</Typography>
      </Flex>
    </ModalStyled>
  );
};
