import { useEffect, useState } from "react"
import Modal from "react-modal"
import { useNavigate } from 'react-router-dom';
import A0 from "./imgs/Atu0.png"
import A1 from "./imgs/Atu1.png"
import A2 from "./imgs/Atu2.png"
import A3 from "./imgs/Atu3.png"
import A4 from "./imgs/Atu4.png"
import A5 from "./imgs/Atu5.png"
import A6 from "./imgs/Atu6.png"
import A7 from "./imgs/Atu7.png"
import A8 from "./imgs/Atu8.png"
import A9 from "./imgs/Atu9.png"
import A10 from "./imgs/Atu10.png"
import A11 from "./imgs/Atu11.png"
import A12 from "./imgs/Atu12.png"
import A13 from "./imgs/Atu13.png"
import A14 from "./imgs/Atu14.png"
import A15 from "./imgs/Atu15.png"
import A16 from "./imgs/Atu16.png"
import A17 from "./imgs/Atu17.png"
import A18 from "./imgs/Atu18.png"
import A19 from "./imgs/Atu19.png"
import A20 from "./imgs/Atu20.png"
import A21 from "./imgs/Atu21.png"



function Game() {
  let cards = [A0, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15, A16, A17, A18, A19, A20, A21]
  const [chosenCards, setChosenCards] = useState([]);
  const [playersHand, setPlayersHand] = useState([])
  const [score, setScore] = useState(0)
  const [isGameOver, setIsGameOver] = useState(false)
  const [resetGame, setResetGame] = useState(false)
  useEffect(() => {
    Shuffle()
  }, []);

  const Shuffle = () => {
    let tempChosenCards = []
    for (let index = 0; index < 8; index++) {
      const chosenIndex = Math.floor(Math.random() * cards.length);
      const chosenOne = cards[chosenIndex];

      // Seçilen öğeyi cards dizisinden çıkart
      cards.splice(chosenIndex, 1);

      // Çıkartılanlar arasına ekleme
      tempChosenCards.push(chosenOne);
    }
    setChosenCards(tempChosenCards)
  }

  const handleCloseModal = () => {
    setIsGameOver(true);
    if (resetGame) {
      setPlayersHand([]);
      Shuffle();
      setResetGame(true);
      setScore(0)
    }
  }
  const onClick = (e) => {

    if (!playersHand.includes(e.target.src) && !isGameOver) {
      setScore(score + 1);
      const newHand = [...playersHand, e.target.src]
      setPlayersHand(newHand)
      if (!isGameOver) {
        Shuffle()
      } else {
        setIsGameOver(true)
      }
    } else {
      setIsGameOver(true)

    }
    console.log(playersHand)
  }

  const handleNoButtonClick = () => {
    // Hayır butonuna basılınca yapılacak işlemler (örneğin, sadece modalı kapatmak)
    setIsGameOver(false);
    setResetGame(true);
    setScore(0)
    setPlayersHand([])
    Shuffle()
  };

  const navigateTo = useNavigate();

  const handleYesButtonClick = () => {
    // Evet butonuna tıklandığında '/' yoluna yönlendir
    navigateTo('/');
  };
  return (
    <>
      <div className="scoreBoard">
        <h2>Score:{score}</h2>

      </div>
      <div>
        <Modal
          isOpen={isGameOver}
          onRequestClose={handleCloseModal}
          contentLabel="Game Over Modal"
          shouldCloseOnOverlayClick={false}
          className="modal-custom-style"
        >
          <h2>Game is over</h2>
          <h3>Your score is: {score}</h3>
          <p>Do you want to return Menu?</p>
          <div className="buttonContainer">
            <button onClick={handleYesButtonClick}>Yes</button>
            <button onClick={handleNoButtonClick}>No</button>

          </div>
        </Modal>
      </div>
      <div className="cardContainer">
        {
          chosenCards.map((element, index) => (
            <img className="cards" key={index} src={element} alt={`Card ${index}`} onClick={onClick} />
          ))
        }
      </div>


    </>
  )
}
export default Game