import React from "react";

import CourseGridTile from "./Tools/CourseGridTile";

import "./Gridview.css";

function Gridview() {
  return (
    <div className="grid--view">
      <div className="course--grid--container">
        <CourseGridTile />
        <CourseGridTile />
        <CourseGridTile />
        <CourseGridTile />
        <CourseGridTile />
        <CourseGridTile />
        <CourseGridTile />
        <CourseGridTile />
      </div>
    </div>
  );
}

export default Gridview;
