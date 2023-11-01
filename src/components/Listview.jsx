import React from "react";

import CourseListTile from "./Tools/CourseListTile";
import downArrow from "./course/arrow-down.png";
import "./Listview.css";

function Listview() {
  return (
    <div className="course--list--container">
      <div className="list--view--headers">
        <p className="list--heading">COURSE</p>
        <div className="date--wise sort--section">
          <p className="list--heading">CREATED DATE</p>
          <img src={downArrow} alt="down-arrow" className="down--arrow" />
        </div>
        <div className="date--wise sort--section">
          <p className="list--heading">CATEGORY</p>
          <img src={downArrow} alt="down-arrow" className="down--arrow" />
        </div>
        <p className="list--heading">ENROLMENT</p>
        <p className="list--heading actions--heading">ACTIONS</p>
      </div>
      <CourseListTile />
      <CourseListTile />
      <CourseListTile />
      <CourseListTile />
      <CourseListTile />
      <CourseListTile />
    </div>
  );
}

export default Listview;
