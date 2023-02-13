import React from "react";
import StepButtons from "../../components/StepButtons/StepButtons";
import { steps } from "../../constants";
import "./Experience.css";
import Invalid from "../../img/invalid.svg";
import Valid from "../../img/valid.svg";

export default function Experience(props) {
  const [position, setPosition] = React.useState(props.data.position || "");
  const [positionError, setPositionError] = React.useState(false);
  const [positionCorrect, setPositionCorrect] = React.useState(false);

  const [employer, setEmployer] = React.useState(props.data.employer || "");
  const [employerError, setEmployerError] = React.useState(false);
  const [employerCorrect, setEmployerCorrect] = React.useState(false);

  const [startDate, setStartDate] = React.useState(
    props.data.positionStartDate || ""
  );
  const [startDateError, setStartDateError] = React.useState(false);
  const [startDateCorrect, setStartDateCorrect] = React.useState(false);

  const [endDate, setEndDate] = React.useState(
    props.data.positionEndDate || ""
  );
  const [endDateError, setEndDateError] = React.useState(false);
  const [endDateCorrect, setEndDateCorrect] = React.useState(false);

  const [description, setDescription] = React.useState(
    props.data.description || ""
  );
  const [descriptionError, setDescriptionError] = React.useState(false);
  const [descriptionCorrect, setDescriptionCorrect] = React.useState(false);

  const [jobs, setJobs] = React.useState(props.data.experiences || []);

  const validateInputs = () => {
    let isValid = true;

    if (!position.trim() || position.trim().length < 2) {
      setPositionError(true);
      isValid = false;
    } else if (position.trim() || position.trim().length > 2) {
      setPositionCorrect(true);
    } else {
      setPositionError(false);
    }

    if (!employer.trim() || employer.trim().length < 2) {
      setEmployerError(true);
      isValid = false;
    } else if (employer.trim() || employer.trim().length > 2) {
      setEmployerCorrect(true);
    } else {
      setEmployerError(false);
    }

    if (!startDate.trim()) {
      setStartDateError(true);
      isValid = false;
    } else if (startDate.trim()) {
      setStartDateCorrect(true);
    } else {
      setStartDateError(false);
    }

    if (!endDate.trim()) {
      setEndDateError(true);
      isValid = false;
    } else if (endDate.trim()) {
      setEndDateCorrect(true);
    } else {
      setEndDateError(false);
    }

    if (!description.trim()) {
      setDescriptionError(true);
      isValid = false;
    } else if (description.trim()) {
      setDescriptionCorrect(true);
    } else {
      setDescriptionError(false);
    }
    return isValid;
  };

  const resetValues = () => {
    setPosition("");
    setPositionError(false);
    setPositionCorrect(false);

    setEmployer("");
    setEmployerError(false);
    setEmployerCorrect(false);

    setStartDate("");
    setStartDateError(false);
    setStartDateCorrect(false);

    setEndDate("");
    setEndDateError(false);
    setEndDateCorrect(false);

    setDescription("");
    setDescriptionError(false);
    setDescriptionCorrect(false);
  };

  return (
    <div className="left">
      <div className="header">
        <h1 className="page-title">გამოცდილება</h1>
        <p>2/3</p>
      </div>
      <hr />

      <div className="form-container">
        {jobs.map((job) => (
          <div key={job.employer}>
            <div className="position">
              <label>თანამდებობა</label> <br />
              <input
                className="correct"
                placeholder="დეველოპერი, დიზაინერი, ა.შ."
                value={job.position}
                onChange={() => {}}
              />
              <img src={Valid} alt="wrong" className="correct-img1" />
              <span className="error">მინიმუმ 2 სიმბოლო</span>
            </div>
            <div className="employer">
              <label>დამსაქმებელი</label> <br />
              <input
                className="correct"
                placeholder="დამსაქმებელი"
                value={job.employer}
                onChange={() => {}}
              />
              <img src={Valid} alt="wrong" className="correct-img1" />
              <span className="error">მინიმუმ 2 სიმბოლო</span>
            </div>
            <div className="name_surname">
              <div className="name-inp">
                <label>დაწყების რიცხვი</label> <br />
                <input
                  className="correct"
                  placeholder="Date"
                  type="date"
                  value={job.start_date}
                  onChange={() => {}}
                />
              </div>

              <div className="end-date">
                <label> დამთავრების რიცხვი</label> <br />
                <input
                  className="correct"
                  type="date"
                  placeholder="Date"
                  value={job.end_date}
                  onChange={() => {}}
                />
              </div>
            </div>
            <div className="text_info">
              <p className="question">აღწერა</p>

              <textarea
                className="correct"
                placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                value={job.description}
                onChange={() => {}}
              />
            </div>
            <hr className="experience-hr" />
          </div>
        ))}

        <div className="position">
          <label>თანამდებობა</label> <br />
          <input
            className={
              positionCorrect ? "correct" : positionError ? "error" : ""
            }
            placeholder="დეველოპერი, დიზაინერი, ა.შ."
            value={position}
            onChange={(e) => {
              setPosition(e.target.value);
              props.handleCurrentStepDataChange({ position: e.target.value });
            }}
          />
          {positionCorrect && (
            <img src={Valid} alt="wrong" className="correct-img1" />
          )}
          <span className="error">მინიმუმ 2 სიმბოლო</span>
          {positionError && (
            <img src={Invalid} alt="wrong" className="error-image1" />
          )}
        </div>
        <div className="employer">
          <label>დამსაქმებელი</label> <br />
          <input
            className={
              employerCorrect ? "correct" : employerError ? "error" : ""
            }
            placeholder="დამსაქმებელი"
            value={employer}
            onChange={(e) => {
              setEmployer(e.target.value);
              props.handleCurrentStepDataChange({ employer: e.target.value });
            }}
          />
          {employerCorrect && (
            <img src={Valid} alt="wrong" className="correct-img1" />
          )}
          <span className="error">მინიმუმ 2 სიმბოლო</span>
          {employerError && (
            <img src={Invalid} alt="wrong" className="error-image1" />
          )}
        </div>
        <div className="name_surname">
          <div className="name-inp">
            <label>დაწყების რიცხვი</label> <br />
            <input
              className={
                startDateCorrect ? "correct" : startDateError ? "error" : ""
              }
              placeholder="Date"
              type="date"
              value={startDate}
              onChange={(e) => {
                setStartDate(e.target.value);
                props.handleCurrentStepDataChange({
                  positionStartDate: e.target.value,
                });
              }}
            />
          </div>

          <div className="end-date">
            <label> დამთავრების რიცხვი</label> <br />
            <input
              className={
                endDateCorrect ? "correct" : endDateError ? "error" : ""
              }
              type="date"
              placeholder="Date"
              value={endDate}
              onChange={(e) => {
                setEndDate(e.target.value);
                props.handleCurrentStepDataChange({
                  positionEndDate: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="text_info">
          <p className="question">აღწერა</p>

          <textarea
            className={
              descriptionCorrect ? "correct" : descriptionError ? "error" : ""
            }
            placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              props.handleCurrentStepDataChange({
                description: e.target.value,
              });
            }}
          />
        </div>
        <hr className="experience-hr" />

        <button
          className="add-new-button"
          onClick={() => {
            if (validateInputs()) {
              const newJobs = [
                ...jobs,
                {
                  position: position,
                  employer: employer,
                  start_date: startDate,
                  end_date: endDate,
                  description: description,
                },
              ];
              setJobs(newJobs);
              props.handleCurrentStepDataChange({
                experiences: newJobs,
                position: "",
                employer: "",
                description: "",
                positionStartDate: "",
                positionEndDate: "",
              });
              resetValues();
            }
          }}
        >
          მეტი გამოცდილების დამატება
        </button>

        <StepButtons
          step={steps[2]}
          onPrev={() => props.setCurrentStep(steps[1])}
          onNext={() => {
            if (
              !jobs.length ||
              position ||
              employer ||
              description ||
              startDate ||
              endDate
            ) {
              if (!validateInputs()) return;
            }
            props.handleStepChange(
              {
                experiences: jobs,
              },
              steps[3]
            );
          }}
        />
      </div>
    </div>
  );
}
