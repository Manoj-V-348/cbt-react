import React from "react";

import listDummyImg from "../course/listDummy1.png";
import addUser from "../course/enrol.png";
import openCourse from "../course/open.png";
import editCourse from "../course/edit.png";
import "./CourseListTile.css";

function CourseListTile() {
  return (
    <div className="course--list--tile">
      <div className="course--image--container">
        <img src={listDummyImg} alt="course-image" className="course--image" />
      </div>
      <div className="date--and--title">
        <p className="course--date">10/10/23</p>
        <p className="course--title">12 Monthly AAPA Aircraft Check</p>
      </div>
      <div className="category">
        <p className="status">Published</p>
        <p className="admintracking">Admin / Tracking</p>
      </div>
      <div className="enrolment">
        <div className="total">
          <p className="enrolment--heading">Total Enrolled</p>
          <p className="enrolled--students">36</p>
        </div>
        <div className="completed">
          <p className="enrolment--heading">Completed</p>
          <p className="enrolled--students">27</p>
        </div>
        <div className="Overdue">
          <p className="enrolment--heading">Over Due</p>
          <p className="enrolled--students">09</p>
        </div>
      </div>
      <div className="actions">
        <div className="open--course course--action">
          <img
            src={openCourse}
            alt="open-course"
            className="action--icon hoverable--icon"
          />
          <p>Open Course</p>
        </div>
        <div className="enrol--students course--action">
          <img
            src={addUser}
            alt="open-course"
            className="action--icon hoverable--icon"
          />
          <p>Enrol Students</p>
        </div>
        <div className="edit--course course--action">
          <img
            src={editCourse}
            alt="open-course"
            className="action--icon hoverable--icon"
          />
          <p>Edit Course</p>
        </div>
      </div>
    </div>
  );
}

export default CourseListTile;
