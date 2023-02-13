import React from "react";
import StepButtons from "../components/StepButtons/StepButtons";
import { steps } from "../constants";
import "./ExperiencePage/Experience.css";
import Invalid from "../img/invalid.svg";
import Valid from "../img/valid.svg";

export default function Education(props) {
  const [school, setSchool] = React.useState(props.data.institute || "");
  const [schoolError, setSchoolError] = React.useState(false);
  const [schoolCorrect, setSchoolCorrect] = React.useState(false);

  const [degree, setDegree] = React.useState(
    props.data.degree || { degree_id: "", title: "" }
  );
  const [degreeError, setDegreeError] = React.useState(false);
  const [degreeCorrect, setDegreeCorrect] = React.useState(false);

  const [graduating, setGraduating] = React.useState(props.data.due_date || "");
  const [graduatingError, setGraduatingError] = React.useState(false);
  const [graduatingCorrect, setGraduatingCorrect] = React.useState(false);

  const [summary, setSummary] = React.useState(props.data.description || "");
  const [summaryError, setSummaryError] = React.useState(false);
  const [summaryCorrect, setSummaryCorrect] = React.useState(false);

  const [degrees, setDegrees] = React.useState([]);

  const [educations, setEducations] = React.useState(
    props.data.educations || []
  );

  React.useEffect(() => {
    fetch("https://resume.redberryinternship.ge/api/degrees")
      .then((res) => res.json())
      .then((data) => {
        setDegrees(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const validateInputs = () => {
    let isValid = true;

    if (!school.trim() || school.trim().length < 2) {
      setSchoolError(true);
      setSchoolCorrect(false);
      isValid = false;
    } else if (school.trim() && school.trim().length > 2) {
      setSchoolCorrect(true);
      setSchoolError(false);
    }

    if (!degree.degree_id.trim()) {
      setDegreeError(true);
      setDegreeCorrect(false);
      isValid = false;
    } else {
      setDegreeCorrect(true);
      setDegreeError(false);
    }

    if (!graduating.trim()) {
      setGraduatingError(true);
      setGraduatingCorrect(false);
      isValid = false;
    } else {
      setGraduatingError(false);
      setGraduatingCorrect(true);
    }

    if (!summary.trim()) {
      setSummaryError(true);
      isValid = false;
    } else if (summary.trim()) {
      setSummaryCorrect(true);
    } else {
      setSummaryError(false);
    }
    return isValid;
  };

  const resetValues = () => {
    setSchool("");
    setSchoolError(false);
    setSchoolCorrect(false);

    setDegree({ degree_id: "", title: "" });
    setDegreeError(false);
    setDegreeCorrect(false);

    setGraduating("");
    setGraduatingError(false);
    setGraduatingCorrect(false);

    setSummary("");
    setSummaryError(false);
    setSummaryCorrect(false);
  };

  return (
    <div className="left">
      <div className="header">
        <h1 className="page-title">განათლება</h1>
        <p>3/3</p>
      </div>
      <hr />

      <div className="form-container">
        {educations.map((education) => (
          <div key={education.institute}>
            <div className="position">
              <label>სასწავლებელი</label> <br />
              <input
                className="correct"
                placeholder="სასწავლებელი"
                value={education.institute}
                onChange={() => {}}
              />
              <img src={Valid} alt="wrong" className="correct-img1" />
              <span className="error">მინიმუმ 2 სიმბოლო</span>
            </div>

            <div className="name_surname">
              <div className="name-inp">
                <label>ხარისხი</label> <br />
                <select
                  className="correct"
                  value={education.degree.degree_id}
                  onChange={(e) => setDegree(e.target.value)}
                >
                  <option value="placeholder">აირჩიეთ ხარისხი</option>
                  {degrees.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="end-date">
                <label>დამთავრების რიცხვი</label> <br />
                <input
                  className="correct"
                  type="date"
                  placeholder="Date"
                  value={education.due_date}
                  onChange={() => {}}
                />
              </div>
            </div>
            <div className="text_info">
              <p className="question">აღწერა</p>

              <textarea
                className="correct"
                placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                value={education.description}
                onChange={() => {}}
              />
            </div>
            <hr className="experience-hr" />
          </div>
        ))}

        <div className="position">
          <label>სასწავლებელი</label> <br />
          <input
            className={schoolCorrect ? "correct" : schoolError ? "error" : ""}
            placeholder="სასწავლებელი"
            value={school}
            onChange={(e) => {
              setSchool(e.target.value);
              props.handleCurrentStepDataChange({ institute: e.target.value });
            }}
          />
          {schoolCorrect && (
            <img src={Valid} alt="wrong" className="correct-img1" />
          )}
          <span className="error">მინიმუმ 2 სიმბოლო</span>
          {schoolError && (
            <img src={Invalid} alt="wrong" className="error-image1" />
          )}
        </div>

        <div className="name_surname">
          <div className="name-inp">
            <label>ხარისხი</label> <br />
            <select
              className={degreeCorrect ? "correct" : degreeError ? "error" : ""}
              value={degree.degree_id}
              onChange={(e) => {
                const foundDegree = degrees.find((d) => d.id == e.target.value);
                setDegree({
                  degree_id: `${foundDegree.id}`,
                  title: foundDegree.title,
                });
                props.handleCurrentStepDataChange({
                  degree_id: `${foundDegree.id}`,
                  title: foundDegree.title,
                });
              }}
            >
              <option value="placeholder">აირჩიეთ ხარისხი</option>
              {degrees.map((skill) => (
                <option key={skill.id} value={skill.id}>
                  {skill.title}
                </option>
              ))}
            </select>
          </div>

          <div className="end-date">
            <label> დამთავრების რიცხვი</label> <br />
            <input
              className={
                graduatingCorrect ? "correct" : graduatingError ? "error" : ""
              }
              type="date"
              placeholder="Date"
              value={graduating}
              onChange={(e) => {
                setGraduating(e.target.value);
                props.handleCurrentStepDataChange({
                  due_date: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="text_info">
          <p className="question">აღწერა</p>

          <textarea
            className={summaryCorrect ? "correct" : summaryError ? "error" : ""}
            placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
            value={summary}
            onChange={(e) => {
              setSummary(e.target.value);
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
              const newEducations = [
                ...educations,
                {
                  institute: school,
                  degree,
                  due_date: graduating,
                  description: summary,
                },
              ];
              setEducations(newEducations);
              props.handleCurrentStepDataChange({
                educations: newEducations,
                institute: "",
                degree: {
                  degree_id: "",
                  title: "",
                },
                due_date: "",
                description: "",
              });
              resetValues();
            }
          }}
        >
          სხვა სასწავლებლის დამატება
        </button>

        <StepButtons
          step={steps[3]}
          onPrev={() => props.setCurrentStep(steps[2])}
          onNext={() => {
            if (
              (!educations.length ||
                school ||
                degree ||
                graduating ||
                summary) &&
              validateInputs()
            ) {
              return;
            }
            props.handleStepChange(
              {
                educations,
              },
              steps[4]
            );
          }}
        />
      </div>
    </div>
  );
}
