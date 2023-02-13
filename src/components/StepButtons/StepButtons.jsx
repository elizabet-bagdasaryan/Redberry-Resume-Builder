import React from "react";
import "./StepButtons.css";
import { steps } from "../../constants";

export default function StepButtons({ step, onPrev, onNext }) {
  const pageSteps = steps.slice(1, 5);
  const stepIndex = pageSteps.indexOf(step);

  return (
    <div className="step-buttons">
      <div>
        {onPrev && (
          <button onClick={onPrev} className="back">
            უკან
          </button>
        )}
      </div>

      <div>
        <button onClick={onNext}>
          {stepIndex === 3 ? "ᲓᲐᲡᲠᲣᲚᲔᲑᲐ" : "შემდეგი"}
        </button>
      </div>
    </div>
  );
}
