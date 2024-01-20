import React, { useState } from "react";
import Modal from "react-modal";
import Crackers from "./effects/crackers";
import Wish from "./effects/Wish";
import incorrectPasswordImage from "../assets/images/kick.svg";

Modal.setAppElement("#root");

export const SurpriseSection = ({ setIssurpriseOpened }) => {
  const [isCodeCorrect, setIsCodeCorrect] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    const enteredCode = window.prompt("Code:");
    if (enteredCode === "cute") {
      setIsCodeCorrect(true);
      setIssurpriseOpened(true);
    } else {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="surpriseWrapper">
      <button id="neonShadow" onClick={handleButtonClick}>
        <span>Click This</span>
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Incorrect Password"
        style={{
          content: {
            background: "linear-gradient(to right, #bdc3c7, #999ea0, #bdc3c7)",
            border: "none", 
          },
        }}
      >
        <div>
          <img className="wrongpwdimg" src={incorrectPasswordImage} alt="Incorrect Password" />
          <button className="wrongpwdbtn" onClick={closeModal}>Retry</button>
        </div>
      </Modal>
        <>
          <Crackers />
          <Wish />
        </>
    </section>
  );
};
