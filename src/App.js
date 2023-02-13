import { useState, useEffect } from "react";
import "./App.css";

import { steps } from "./constants";
import Home from "./pages/HomePage/Home";
import PersonalInfo from "./pages/PersonalInfoPage/PersonalInfo";
import Experience from "./pages/ExperiencePage/Experience";
import Education from "./pages/Education";
import Resume from "./components/Resume/Resume";
import FinalPage from "./pages/FinalPage/FinalPage";
import ReturnArrow from "./img/arrow.svg";

export default function App() {
  const [currentStep, setCurrentStep] = useState(
    localStorage.getItem("currentStep") || steps[0]
  );
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data") || "{}")
  );
  const [currentStepData, setCurrentStepData] = useState(
    JSON.parse(localStorage.getItem("currentStepDate") || "{}")
  );

  const handleStepChange = (newData, step) => {
    setData({ ...data, ...newData });
    setCurrentStep(step);
    setCurrentStepData({});
  };

  const handleCurrentStepDataChange = (newData) => {
    setCurrentStepData({ ...currentStepData, ...newData });
  };

  useEffect(() => {
    localStorage.setItem("currentStepDate", JSON.stringify(currentStepData));
  }, [currentStepData]);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    localStorage.setItem("currentStep", currentStep);
  }, [currentStep]);

  const resetValues = () => {
    setCurrentStep(steps[0]);
    setData({});
    setCurrentStepData({});
  };

  let formComponent = null;

  switch (currentStep) {
    case steps[1]:
      formComponent = (
        <PersonalInfo
          data={{ ...data, ...currentStepData }}
          handleStepChange={handleStepChange}
          setCurrentStep={setCurrentStep}
          handleCurrentStepDataChange={handleCurrentStepDataChange}
        />
      );
      break;
    case steps[2]:
      formComponent = (
        <Experience
          data={{ ...data, ...currentStepData }}
          handleStepChange={handleStepChange}
          setCurrentStep={setCurrentStep}
          handleCurrentStepDataChange={handleCurrentStepDataChange}
        />
      );
      break;
    case steps[3]:
      formComponent = (
        <Education
          data={{ ...data, ...currentStepData }}
          handleStepChange={handleStepChange}
          setCurrentStep={setCurrentStep}
          handleCurrentStepDataChange={handleCurrentStepDataChange}
        />
      );
      break;
    case steps[4]:
      formComponent = (
        <FinalPage
          data={data}
          handleStepChange={handleStepChange}
          setCurrentStep={setCurrentStep}
          handleCurrentStepDataChange={handleCurrentStepDataChange}
        />
      );
      break;
    default:
      formComponent = <Home setCurrentStep={setCurrentStep} />;
  }

  const isWithResume = [steps[1], steps[2], steps[3]].includes(currentStep);
  return (
    <div
      className="main"
      style={
        !isWithResume
          ? {
              display: "flex",
              justifyContent: "center",
            }
          : {
              display: "grid",
              gridTemplateColumns: "auto 822px",
            }
      }
    >
      {formComponent}

      {isWithResume && <Resume data={{ ...data, ...currentStepData }} />}

      {currentStep !== steps[0] && (
        <img
          src={ReturnArrow}
          className="reset-button"
          alr="back"
          onClick={resetValues}
        />
      )}
    </div>
  );
}
