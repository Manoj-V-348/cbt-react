import React from "react";
import { useState } from "react";
import { Icon } from "@iconify/react";

import Gridview from "./Gridview";
import Listview from "./Listview";
import Search from "../assets/icons/search.png";

import "./Content.css";

function Content() {
  const [gridView, setGridView] = useState(true);
  const [listView, setListView] = useState(false);

  function toggleGridView() {
    setGridView(true);
    setListView(false);
  }
  function toggleListView() {
    setListView(true);
    setGridView(false);
  }

  return (
    <div className="main">
      <div className="searchbox--container">
        <p className="bold heading">Assigned Courses</p>
        <div className="search--tools">
          <div className="searchbox">
            <input
              type="text"
              className="searchbox-input"
              placeholder="Search Courses"
            />
            <button className="searchbox-button hoverable--button">
              <img src={Search} alt="search" />
            </button>
          </div>
          <Icon
            icon="ic:baseline-grid-view"
            color={gridView ? "#0072b1" : "#71829b"}
            className="grid--view toggle--icon hoverable--button"
            width="24"
            onClick={toggleGridView}
          />
          <Icon
            icon="raphael:list"
            color={listView ? "#0072b1" : "#71829b"}
            width="24"
            className="list--view toggle--icon hoverable--button"
            onClick={toggleListView}
          />
          <div className="course--controls">
            <div className="filter--container">
              <Icon
                icon="octicon:filter-16"
                color="#71829b"
                width="24"
                className="hoverable--button"
              />
              <p className="mild--text">Filters</p>
            </div>
            <button className="toolbar--button course--group hoverable--button">
              Course Groups
            </button>
            <button className="toolbar--button create--course hoverable--button">
              + Create Course
            </button>
          </div>
        </div>
      </div>

      <main className="content--body">
        {gridView ? <Gridview /> : <Listview />}
      </main>
    </div>
  );
}

export default Content;
