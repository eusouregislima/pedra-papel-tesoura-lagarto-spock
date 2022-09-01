import { useEffect } from "react";
import { useState } from "react";
import { ActionsGame } from "./components/actions-game";
import { Button } from "./components/button";
import { Input } from "./components/input";
import { Modal } from "./components/modal";
import { Score } from "./components/score";
import * as C from "./styles";

const messages = {
  rules: {
    title: "REGRAS DO JOGO",
    message:
      "Pedra-papel-tesoura-lagarto-Spock é uma expansão do clássico método de seleção em jogo de pedra-papel-tesoura. Atua sob o mesmo princípio básico, mas inclui outras duas armas adicionais: o lagarto e Spock(formada pela saudação dos vulcanos em Star Trek). Isso reduz as chances de uma rodada terminar em um empate. Tesoura corta papel, Papel cobre pedra, Pedra esmaga lagarto, Lagarto envenena Spock, Spock esmaga (ou derrete) tesoura, Tesoura decapita lagarto, Lagarto come papel, Papel refuta Spock, Spock vaporiza pedra, Pedra amassa tesoura.  O desafio aqui é vencer o computador 10 vezes! Faça a sua escolha e boa sorte!",
  },
  user: {
    title: "🚨 ATENÇÃO 🚨",
    message: "Por favor preencha o nome do jogador para começar!",
  },
  computerWin: {
    title: "Deu Ruim 😥",
    message: "Não desista, tente novamente!",
  },
  playerWin: {
    title: "Você Venceu 😁",
    message: "Parabéns, quero ver ganhar 2 vezes seguida 🤖!",
  },
};

const actions = [
  {
    value: 1,
    label: "🪨",
    description: "Rock",
  },
  {
    value: 2,
    label: "📜",
    description: "Paper",
  },
  {
    value: 3,
    label: "✂️",
    description: "Scissors",
  },
  {
    value: 4,
    label: "🦎",
    description: "Scissors",
  },
  {
    value: 5,
    label: "🖖🏼",
    description: "Spock",
  },
];

const valueTypeEnum = {
  ROCK: 1,
  PAPER: 2,
  SCISSORS: 3,
  LIZARD: 4,
  SPOCK: 5,
};

function App() {
  const [titleModal, setTitleModal] = useState("");
  const [messageModal, setMessageModal] = useState("");
  const [open, setOpen] = useState(false);
  const [scorePlayerValue, setScorePlayerValue] = useState(0);
  const [scoreComputerValue, setScoreComputerValue] = useState(0);
  const [userAction, setUserAction] = useState("🔒");
  const [computerAction, setComputerAction] = useState("🔒");
  const [textGame, setTextGame] = useState("Iniciar Jogo");
  const [userName, setUserName] = useState("VOCÊ");
  const [playGame, setPlayGame] = useState(false);
  const SCORE_TO_WIN = 10;

  const handleOpenModal = (type) => {
    if (!type) {
      setOpen(false);
      setTitleModal("");
      setMessageModal("");
      resetValues();

      return;
    }
    setTitleModal(messages?.[type]?.title);
    setMessageModal(messages?.[type]?.message);
    setOpen(true);
  };

  const randomActionComputer = () => {
    const number = Math.floor(Math.random() * actions.length);
    return actions[number];
  };

  const handleClick = (value) => {
    setUserAction(value.label);
    const actionComputer = randomActionComputer();
    setComputerAction(actionComputer.label);
    checkWinner(value.value, actionComputer.value);
  };

  const checkWinner = (playerValue, computerValue) => {
    const playerRockWin =
      (playerValue === valueTypeEnum.ROCK &&
        computerValue === valueTypeEnum.SCISSORS) ||
      (playerValue === valueTypeEnum.ROCK &&
        computerValue === valueTypeEnum.LIZARD);

    const playerPaperWin =
      (playerValue === valueTypeEnum.PAPER &&
        computerValue === valueTypeEnum.ROCK) ||
      (playerValue === valueTypeEnum.PAPER &&
        computerValue === valueTypeEnum.SPOCK);

    const playerScissorsWin =
      (playerValue === valueTypeEnum.SCISSORS &&
        computerValue === valueTypeEnum.PAPER) ||
      (playerValue === valueTypeEnum.SCISSORS &&
        computerValue === valueTypeEnum.LIZARD);

    const playerLisardWin =
      (playerValue === valueTypeEnum.LIZARD &&
        computerValue === valueTypeEnum.PAPER) ||
      (playerValue === valueTypeEnum.LIZARD &&
        computerValue === valueTypeEnum.SPOCK);

    const playerSpockWin =
      (playerValue === valueTypeEnum.SPOCK &&
        computerValue === valueTypeEnum.SCISSORS) ||
      (playerValue === valueTypeEnum.SPOCK &&
        computerValue === valueTypeEnum.ROCK);

    const drawerResult = playerValue === computerValue;

    const playerWin =
      playerRockWin ||
      playerPaperWin ||
      playerScissorsWin ||
      playerLisardWin ||
      playerSpockWin;

    if (drawerResult) return setTextGame("Empate 🤔, jogue novamente!");
    if (playerWin) {
      setScorePlayerValue((state) => state + 1);
      return setTextGame("Ganhou 😁 Jogue novamente!");
    }
    setScoreComputerValue((state) => state + 1);
    return setTextGame("Perdeu 😥 Jogue novamente!");
  };

  const handleUserName = (value) => {
    if (!value) {
      return setUserName("VOCÊ");
    }
    setUserName(value);
  };

  const startGame = () => {
    if (userName === "VOCÊ") {
      handleOpenModal("user");
      return;
    }
    if (playGame) return resetValues();
    setPlayGame(true);
  };

  const resetValues = () => {
    setTextGame("Iniciar Jogo");
    setPlayGame(false);
    setScorePlayerValue(0);
    setScoreComputerValue(0);
    setUserAction("🔒");
    setComputerAction("🔒");
  };

  useEffect(() => {
    const checkVictory = () => {
      const playerWin = scorePlayerValue === SCORE_TO_WIN;
      const computerWin = scoreComputerValue === SCORE_TO_WIN;
      if (playerWin) {
        handleOpenModal("playerWin");
        setPlayGame(false);
        return;
      }

      if (computerWin) {
        handleOpenModal("computerWin");
        setPlayGame(false);
        return;
      }
    };

    checkVictory();
  }, [scorePlayerValue, scoreComputerValue]);

  return (
    <C.Container>
      <C.Flex direction="column">
        <C.Typography fontHeight="400" size="32px" lineHeight="48px">
          JOKENPO
        </C.Typography>
        <Input
          placeholder="Digite o nome do jogador"
          onChange={(value) => handleUserName(value)}
        />
        <Button onClick={startGame}>
          {playGame ? "Parar" : "🍀 Começar o jogo 🍀"}
        </Button>
        <C.Spacer margin="5px" />
        <Score
          userName={userName}
          scorePlayer={scorePlayerValue}
          scoreComputer={scoreComputerValue}
        />
        <C.Spacer margin="10px" />
        <C.Flex justify="space-around">
          <C.Typography size="32px">{userAction}</C.Typography>
          <C.Typography size="32px">{computerAction}</C.Typography>
        </C.Flex>
        <C.Spacer margin="10px" />
        <C.Flex direction="column" gap="0px">
          <C.Typography>{textGame}</C.Typography>
          <C.Spacer margin="5px" />
          <C.Rules onClick={() => handleOpenModal("rules")}>
            Ver as Regras do jogo
          </C.Rules>
        </C.Flex>
        <C.Spacer margin="10px" />
        <ActionsGame
          actions={actions}
          onClick={(value) => handleClick(value)}
          disabled={!playGame}
        />

        <Modal
          open={open}
          titleModal={titleModal}
          messageModal={messageModal}
          handOpenModal={() => handleOpenModal(null)}
        />
      </C.Flex>
    </C.Container>
  );
}

export default App;
