import React, { useState } from "react";

import "../css/App.css";
import Image from "../assets/profile.jpg";
import { Form } from "react-bootstrap";
import { ProfileBtn } from "./buttons/IntroBtn";

function Profile() {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState({
    fname: "",
    lname: "",
    uname: "",
  });
  function handleTextChange(e) {
    setValue(e.target.value);

    if (e.target.value !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  return (
    <div className="container-fluid">
      <div className="profile-container d-flex flex-column   justify-contents-center">
        <h1 className="profile-title text-center text-uppercase fw-bold">
          My Profile
        </h1>
        <div className="profile-img text-center ">
          <img className="img-fluid" src={Image} alt="default profile" />
          <input type="file" name="profile-name" accept="image/*" />
        </div>
        <Form className="pl-2 pr-2">
          <div id="float-label" controlId="formGroupEmail">
            <label htmlFor="fname" className={isActive ? "Active" : ""}>
              First name
            </label>
            <input
              name="fname"
              type="text"
              value={value.fname}
              onChange={(e) => handleTextChange(e)}
            />
          </div>
          <div id="float-label" controlId="formGroupEmail">
            <label htmlFor="lname" className={isActive ? "Active" : ""}>
              Last name
            </label>
            <input
              name="lname"
              type="text"
              value={value.lname}
              onChange={(e) => handleTextChange(e)}
            />
          </div>
          <div id="float-label" controlId="formGroupEmail">
            <label htmlFor="uname" className={isActive ? "Active" : ""}>
              {" "}
              Username
            </label>
            <input
              name="uname"
              type="text"
              value={value.uname}
              onChange={(e) => handleTextChange(e)}
            />
          </div>
        </Form>
        <ProfileBtn />
      </div>
    </div>
  );
}

export default Profile;
