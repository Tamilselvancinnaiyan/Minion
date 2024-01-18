import React from "react";
import Crackers from "./effects/crackers";
import Wish from "./effects/Wish";

export const SurpriseSection = ({ setIssurpriseOpened }) => {
  return (
    <section className="surpriseWrapper">
      <button id="neonShadow" onClick={() => setIssurpriseOpened(true)}>
        <span>Chhhhhhhh hhhhshshshhshshsh hshshss</span>
      </button>
      <Crackers />
      <Wish />
    </section>
  );
};
