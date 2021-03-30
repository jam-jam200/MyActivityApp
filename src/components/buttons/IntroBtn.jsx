import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"

function IntroBtn() {
  return (
      <div className="mb-2 text-center">
        <Link to='/profile' className="btn button" size="lg">
          Start My Activity
        </Link>{" "}
      </div>
  );
}

export default IntroBtn;

export function ProfileBtn() {
  return(
    <div className="mb-2 text-center">
      <Link to='/mylist' className="btn Pbutton" size="lg">
          Save
        </Link>{" "}
    </div>
  );
}

export function ScheduleBtn() {
  return(
    <div className="mb-2 text-center">
      <Link to='/' className="btn Pbutton" size="lg">
          Save
        </Link>{" "}
    </div>
  );
}

export function MyListBtn() {
  return(
    <div className="mb-2 text-center">
      <Link to='/mylist' className="btn Pbutton" size="lg">
          Save
        </Link>{" "}
    </div>
  );
}

