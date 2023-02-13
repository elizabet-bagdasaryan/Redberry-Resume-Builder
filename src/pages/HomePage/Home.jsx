import React from "react";
import { steps } from "../../constants";

import "./Home.css";
import RedberryLogo from "../../img/redberry_logo.svg";
import RoundLogo from "../../img/round_logo.svg";
import Underline from "../../img/Line.svg";

export default function Home(props) {
  return (
    <div className="home">
      <div className="images">
        <img src={RedberryLogo} alt="Redberry" className="redberry" />
        <img src={Underline} alt="line" className="underline" />
      </div>
      <div className="start_photo">
        <div>
          <button
            className="start"
            onClick={() => props.setCurrentStep(steps[1])}
          >
            რეზიუმეს დამატება
          </button>
        </div>
        <div>
          <img src={RoundLogo} alt="circle" className="round_logo" />
        </div>
      </div>
    </div>
  );
}
