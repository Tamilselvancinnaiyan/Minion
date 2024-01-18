import React, { useState } from "react";
import { CountDownTimer, Slider, SurpriseSection } from "./components";
import { COUNT_DOWN_TIME } from "./constants";

function App() {
  const [isSurpriseOpened, setIssurpriseOpened] = useState(false);
  const [isCountdownEnded, setIsCountdownEnded] = useState(
    new Date().getTime() > COUNT_DOWN_TIME
  );

  return isSurpriseOpened ? (
    <>
      <Slider />
    </>
  ) : isCountdownEnded ? (
    <SurpriseSection setIssurpriseOpened={setIssurpriseOpened}/>
  ) : (
    <CountDownTimer setIsCountdownEnded={setIsCountdownEnded} />
  );
}

export default App;
