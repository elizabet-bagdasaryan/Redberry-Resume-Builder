import React from "react";
import axios from "axios";
import "./FinalPage.css";
import Resume from "../../components/Resume/Resume";
import CloseIcon from "../../img/close.svg";

export default function FinalPage(props) {
  const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);

  const sendRequest = async () => {
    const blobRes = await fetch(props.data.image.contents);

    const blob = await blobRes.blob();

    const data = {
      ...props.data,
      educations: props.data.educations.map((education) => ({
        ...education,
        degree_id: education.degree.degree_id,
      })),
      experiences: props.data.experiences.map((experience) => ({
        ...experience,
        due_date: experience.end_date,
      })),
      image: blob,
    };

    const formData = new FormData();
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        formData.append(key, data[key]);
      }
    }

    data.experiences.forEach((experience, index) => {
      formData.append(`experiences[${index}][position]`, experience.position);
      formData.append(`experiences[${index}][employer]`, experience.employer);
      formData.append(
        `experiences[${index}][start_date]`,
        experience.start_date
      );
      formData.append(`experiences[${index}][due_date]`, experience.due_date);
      formData.append(
        `experiences[${index}][description]`,
        experience.position
      );
    });

    data.educations.forEach((education, index) => {
      formData.append(`educations[${index}][institute]`, education.institute);
      formData.append(`educations[${index}][degree_id]`, education.degree_id);
      formData.append(`educations[${index}][due_date]`, education.due_date);
      formData.append(`educations[${index}][description]`, education.position);
    });

    axios
      .post("https://resume.redberryinternship.ge/api/cvs", formData)
      .then(() => {
        setShowSuccessMessage(true);
      });
  };

  React.useEffect(() => {
    sendRequest();
  }, []);

  return (
    <div className="final-page">
      <Resume data={props.data} withBorder />

      {showSuccessMessage && (
        <div className="successfully-sent">
          <p>რეზიუმე წარმატებით გაიგზავნა 🎉</p>
          <img
            src={CloseIcon}
            onClick={() => {
              setShowSuccessMessage(false);
            }}
          />
        </div>
      )}
    </div>
  );
}
