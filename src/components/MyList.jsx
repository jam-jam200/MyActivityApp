import React from "react";
import { Row, Col } from "react-bootstrap";
import * as Icons from "heroicons-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faUserCircle } from "@fortawesome/free-solid-svg-icons";

function MyList() {
  // const element = <FontAwesomeIcon icon={faPa  lette} />;
  return (
    <div>
      <div className="list-container">
        <div>
          <Row>
            <Col className="mylist-item mylist-item-w mylist-item-h  d-flex flex-column align-items-center justify-content-center">
              <span className="d-block">{<Icons.ClipboardListOutline />}</span>
              <span className="d-block font-weight-bold">All Task</span>
              <span className="d-block">
                <span className="pr-2">{<Icons.ClockOutline />}</span>20 Items
              </span>
            </Col>
            <Col className="mylist-item mylist-item-h mylist-item-w d-flex flex-column align-items-center justify-content-center">
              <span className="d-block">
                <FontAwesomeIcon icon={faUserCircle} />
              </span>
              <span className="d-block font-weight-bold">Personal</span>
              <span className="d-block">
                <span className="pr-2">{<Icons.ClockOutline />}</span>100 Items
              </span>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col className="mylist-item d-flex mylist-item-w mylist-item-h flex-column align-items-center justify-content-center">
              <span className="d-block">{<Icons.BriefcaseOutline />}</span>
              <span className="d-block font-weight-bold">Work</span>
              <span className="d-block">
                <span className="pr-2">{<Icons.ClockOutline />}</span>100 Items
              </span>
            </Col>
            <Col className="mylist-item d-flex mylist-item-w mylist-item-h flex-column align-items-center justify-content-center">
              <span className="d-block">{<Icons.LightBulbOutline />}</span>
              <span className="d-block font-weight-bold">Ideas</span>
              <span className="d-block">
                <span className="pr-2">{<Icons.ClockOutline />}</span>1000 Items
              </span>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col className="mylist-item d-flex mylist-item-w mylist-item-h flex-column align-items-center justify-content-center">
              <span className="d-block">
                <FontAwesomeIcon icon={faPalette} />
              </span>
              <span className="d-block font-weight-bold">Art Work</span>
              <span className="d-block">
                <span className="pr-2">{<Icons.ClockOutline />}</span>20 Items
              </span>
            </Col>
            <Col className="mylist-item d-flex mylist-item-w mylist-item-h flex-column align-items-center justify-content-center">
              <span className="d-block">
                {<Icons.ExclamationCircleOutline />}
              </span>
              <span className="d-block font-weight-bold">Urgency</span>
              <span className="d-block">
                <span className="pr-2">{<Icons.ClockOutline />}</span> 10 Items
              </span>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default MyList;
