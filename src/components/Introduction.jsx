import React from "react";
import IntroBtn from "./buttons/IntroBtn"

function Introduction() {
  return (
    <>
    <div className="intro-container">
    <div className="overlay"></div>
      <h1 className="title text-center text-uppercase fw-bold">My Activity😊😊</h1>

      <IntroBtn />

    </div>
    </>
  );
}

export default Introduction;
