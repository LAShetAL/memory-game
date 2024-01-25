import { Link } from 'react-router-dom'
import Modal from "react-modal"
import { useState } from 'react'
import { IoMdCloseCircleOutline } from "react-icons/io";
function Menu() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }
    return (
        <>
            <div className="mainContainer">
                <h1>Tahutis Tarot Memory Game</h1>
                <div className="buttonContainer">

                    <button >
                        <Link className="link" to="/game">
                            Start
                        </Link>
                    </button>
                    <button onClick={openModal}>Help</button>
                </div>
            </div>
            <div>

                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="Game Over Modal"
                    shouldCloseOnOverlayClick={true}
                    className="modal-custom-style-menu"
                >
                    <div className='closeButtonContainer'>
                        <IoMdCloseCircleOutline className='closeButton' onClick={closeModal}/>
                    </div>

                    <h2>About the Memory Game</h2>
                    <p>This is a memory matching card game. The goal is to find matching pairs of cards.</p>
                    <p>The cards are shuffled, and the player selects two cards at a time. If the selected cards match, they stay open; if not, they are flipped back.</p>
                    <p>The objective is to match all cards and achieve the highest score. Enjoy the challenge of testing your memory skills!</p>
                </Modal>
            </div>


        </>
    )
}
export default Menu