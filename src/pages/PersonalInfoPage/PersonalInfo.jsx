import React from "react";
import StepButtons from "../../components/StepButtons/StepButtons";
import { steps } from "../../constants";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import "./PersonalInfo.css";
import Invalid from "../../img/invalid.svg";
import Valid from "../../img/valid.svg";

export default function PersonalInfo(props) {
  const [firstName, setFirstName] = React.useState(props.data.name || "");
  const [firstNameError, setFirstNameError] = React.useState(false);
  const [firstNameCorrect, setFirstNameCorrect] = React.useState(false);

  const [lastName, setLastName] = React.useState(props.data.surname || "");
  const [lastNameError, setLastNameError] = React.useState(false);
  const [lastNameCorrect, setLastNameCorrect] = React.useState(false);

  const [email, setEmail] = React.useState(props.data.email || "");
  const [emailError, setEmailError] = React.useState(false);
  const [emailCorrect, setEmailCorrect] = React.useState(false);

  const [phone, setPhone] = React.useState(props.data.phone_number || "");
  const [phoneError, setPhoneError] = React.useState(false);
  const [phoneCorrect, setPhoneCorrect] = React.useState(false);

  const [image, setImage] = React.useState(
    props.data.image || { name: "", contents: "" }
  );
  const [imageError, setImageError] = React.useState(false);

  const [generalInfo, setGeneralInfo] = React.useState(
    props.data.about_me || ""
  );

  const validateInputs = () => {
    let isValid = true;

    if (
      !firstName.trim() ||
      firstName.trim().length < 2 ||
      !/^[ა-ჰ]+$/.test(firstName)
    ) {
      setFirstNameError(true);
      isValid = false;
    } else if (
      firstName.trim() ||
      firstName.trim().length > 2 ||
      !/^[ა-ჰ]+$/.test(firstName)
    ) {
      setFirstNameCorrect(true);
      setFirstNameError(false);
    } else {
      setFirstNameError(false);
    }

    if (
      !lastName.trim() ||
      lastName.trim().length < 2 ||
      !/^[ა-ჰ]+$/.test(lastName)
    ) {
      setLastNameError(true);
      isValid = false;
    } else if (
      lastName.trim() ||
      lastName.trim().length > 2 ||
      !/^[ა-ჰ]+$/.test(lastName)
    ) {
      setLastNameCorrect(true);
      setLastNameError(false);
    } else {
      setLastNameError(false);
    }

    if (!email.trim() || !/^[A-Za-z0-9._%+-]+@redberry.ge$/.test(email)) {
      setEmailError(true);
      setEmailCorrect(false);
      isValid = false;
    } else if (email.trim() && /^[A-Za-z0-9._%+-]+@redberry.ge$/.test(email)) {
      setEmailCorrect(true);
      setEmailError(false);
    }

    if (
      !phone.trim() ||
      phone.trim().length !== 13 ||
      !phone.trim().startsWith("+995")
    ) {
      setPhoneError(true);
      setPhoneCorrect(false);
      isValid = false;
    } else if (phone.trim() && phone.trim().startsWith("+995")) {
      setPhoneCorrect(true);
      setPhoneError(false);
    }

    if (!image.contents) {
      setImageError(true);
      isValid = false;
    } else {
      setImageError(false);
    }

    return isValid;
  };

  return (
    <div className="left">
      <div className="header">
        <h1 className="page-title">პირადი ინფო</h1>
        <p>1/3</p>
      </div>
      <hr />

      <div className="form-container">
        <div className="name_surname">
          <div className="name-inp">
            <label>სახელი</label> <br />
            <input
              className={
                firstNameCorrect ? "correct" : firstNameError ? "error" : ""
              }
              placeholder="ანზორ"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                props.handleCurrentStepDataChange({
                  name: e.target.value,
                });
              }}
            />
            {firstNameCorrect && (
              <img src={Valid} alt="wrong" className="correct-img" />
            )}
            <span>მინიმუმ 2 ასო, ქართული ასოები</span>
            {firstNameError && (
              <img src={Invalid} alt="wrong" className="error-image" />
            )}
          </div>
          <div className="surname-inp">
            <label>გვარი</label> <br />
            <input
              className={
                lastNameCorrect ? "correct" : lastNameError ? "error" : ""
              }
              placeholder="მუმლაძე"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                props.handleCurrentStepDataChange({
                  surname: e.target.value,
                });
              }}
            />
            {lastNameCorrect && (
              <img src={Valid} alt="wrong" className="correct-img" />
            )}
            <span>მინიმუმ 2 ასო, ქართული ასოები</span>
            {lastNameError && (
              <img src={Invalid} alt="wrong" className="error-image" />
            )}
          </div>
        </div>

        <ImageUpload
          imageError={imageError}
          onChange={(data) => {
            setImage(data);
            props.handleCurrentStepDataChange({
              image: data,
            });
          }}
        />

        <div className="text_info">
          <p className="question">ჩემ შესახებ (არასავალდებულო)</p>
          <br />
          <textarea
            className="general_info"
            placeholder="ზოგადი ინფო შენ შესახებ"
            value={generalInfo}
            onChange={(e) => {
              setGeneralInfo(e.target.value);
              props.handleCurrentStepDataChange({
                about_me: e.target.value,
              });
            }}
          />
        </div>
        <div className="email_block">
          <label>ელ.ფოსტა</label> <br />
          <input
            className={emailCorrect ? "correct" : emailError ? "error" : ""}
            placeholder="anzorr666@redberry.ge"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              props.handleCurrentStepDataChange({
                email: e.target.value,
              });
            }}
          />
          {emailCorrect && (
            <img src={Valid} alt="wrong" className="correct-img1" />
          )}
          <span>უნდა მთავრდებოდეს @redberry.ge-ით</span>
          {emailError && (
            <img src={Invalid} alt="wrong" className="error-image1" />
          )}
        </div>

        <div className="phone-number">
          <label>მობილურის ნომერი</label> <br />
          <input
            className={phoneCorrect ? "correct" : phoneError ? "error" : ""}
            placeholder="+995 551 12 34 56"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              props.handleCurrentStepDataChange({
                phone_number: e.target.value,
              });
            }}
          />
          <span>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</span>
          {phoneError && (
            <img src={Invalid} alt="wrong" className="error-image1" />
          )}
          {phoneCorrect && (
            <img src={Valid} alt="wrong" className="correct-img1" />
          )}
        </div>

        <StepButtons
          step={steps[1]}
          onNext={() => {
            if (validateInputs()) {
              props.handleStepChange(
                {
                  name: firstName,
                  surname: lastName,

                  email,
                  phone_number: phone,
                  about_me: generalInfo,
                  image,
                },
                steps[2]
              );
            }
          }}
        />
      </div>
    </div>
  );
}
