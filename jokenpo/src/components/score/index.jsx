import { Typography, Flex } from "../../styles";

export const Score = ({ userName, scorePlayer, scoreComputer }) => {
  userName = userName.lenght > 12 ? `${userName.slice(0, 8)}...` : userName;

  return (
    <Flex direction="column">
      <Typography size="40px" fontHeight="400" lineHeight="48px">
        Placar
      </Typography>

      <Flex justify="space-between">
        <Flex direction="column" gap="2px">
          <Typography>{userName}</Typography>
          <Typography>{scorePlayer}</Typography>
        </Flex>

        <Typography>X</Typography>

        <Flex direction="column" gap="2px">
          <Typography>COMPUTADOR</Typography>
          <Typography>{scoreComputer}</Typography>
        </Flex>
      </Flex>
    </Flex>
  );
};
