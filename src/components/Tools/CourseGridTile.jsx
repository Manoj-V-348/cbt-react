import React from "react";

import ProgressBar from "./ProgressBar";

import dummyImg1 from "../course/dummy1.png";
import addUser from "../course/enrol.png";
import openCourse from "../course/open.png";
import editCourse from "../course/edit.png";
import "./CourseGridTile.css";

function CourseGridTile() {
  return (
    <div className="course--grid--tile">
      <div className="course--header">
        <div className="image--container">
          <img src={dummyImg1} alt="course--image" />
        </div>
        <p className="course--title">12 Monthly AAPA Aircraft Check</p>
        <div className="course--status--details">
          <p className="course--status">Published</p>
          <p className="course--date">10/10/23</p>
        </div>
        <div className="course--tracking--details">
          <p className="admin--tracking">
            <span className="bold">Admin / Tracking</span>
          </p>
          <p className="course--date">36 Enroled</p>
        </div>
        <div className="course--completed--details">
          <p className="course--completed">Completed</p>
          <p className="course--date bold">27</p>
        </div>

        <ProgressBar percentage="75" status="#067a1d" />

        <div className="course--overdue--details">
          <p className="course--overdue">Overdue</p>
          <p className="course--date bold">9</p>
        </div>

        <ProgressBar percentage="20" status="#d92014" />
      </div>
      <div className="edit--course--actions">
        <img
          src={editCourse}
          alt="edit-course"
          className="edit--icon hoverable--icon"
        />
        <div className="other--action--icons">
          <img src={addUser} alt="add-user" className="hoverable--icon" />
          <img src={openCourse} alt="open-course" className="hoverable--icon" />
        </div>
      </div>
    </div>
  );
}

export default CourseGridTile;
