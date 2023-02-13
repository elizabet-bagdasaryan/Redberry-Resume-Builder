import React from "react";
import At from "../../img/at-symbol.svg";
import Phone from "../../img/phone.svg";
import "./Resume.css";
import RedCircle from "../../img/round-red-logo.svg";

export default function Resume(props) {
  return (
    <div
      className="cv-with-frame"
      style={props.withBorder ? { border: "0.8px solid #000000" } : {}}
    >
      {(props.data.name ||
        props.data.surname ||
        props.data.email ||
        props.data.phone_number ||
        props.data.about_me ||
        props.data.image) && (
        <>
          <div className="about">
            <div>
              <h1 className="name">
                {props.data.name} {props.data.surname}
              </h1>
              {props.data.email && (
                <div className="contacts">
                  <img src={At} />
                  <p>{props.data.email}</p>
                </div>
              )}
              {props.data.phone_number && (
                <div className="contacts">
                  <img src={Phone} />
                  <p>{props.data.phone_number}</p>
                </div>
              )}
              {props.data.about_me && (
                <>
                  <h3>ჩემ შესახებ</h3>
                  <p className="description">{props.data.about_me}</p>
                </>
              )}
            </div>
            {props.data.image && (
              <img src={props.data.image.contents} className="profile-photo" />
            )}
          </div>
          <hr />
        </>
      )}

      {props.data.experiences && !!props.data.experiences.length && (
        <>
          <h3>გამოცდილება</h3>
          {props.data.experiences.map((job) => (
            <div key={job.employer} className="item">
              <p className="item-title">
                {job.position}, {job.employer}
              </p>
              <h5 className="dates">
                {job.start_date} - {job.end_date}
              </h5>
              <p className="description">{job.description}</p>
            </div>
          ))}
          <hr />
        </>
      )}

      {props.data.educations && !!props.data.educations.length && (
        <>
          <h3>განათლება</h3>
          {props.data.educations.map((education) => (
            <div key={education.institute} className="item">
              <p className="item-title">
                {education.institute}, {education.degree.title}
              </p>
              <h5 className="dates">{education.due_date}</h5>
              <p className="description">{education.description}</p>
            </div>
          ))}

          <hr />
        </>
      )}
      <img src={RedCircle} className="red-circle-resume" />
    </div>
  );
}
