import React from "react";

import Action from "./Tools/Action";

import profileImg from "../assets/icons/avatar.png";
import changeUserIcon from "../assets/icons/arrows.png";
import rexIcon from "../assets/rex.png";
import pelAirIcon from "../assets/pelair.png";
import aapaIcon from "../assets/aapa.png";
import njeIcon from "../assets/nje.png";
import aapmIcon from "../assets/aapm.png";
import "./Sidebar.css";

function Sidebar() {
  const userName = "Rob Hawkins";
  const userRole = "Course Supervisor";

  const iconColors = {
    active: "#0072b1",
    inactive: "#71829b",
  };

  const actionsData = [
    {
      actionName: "All Courses",
      actionIconName: "ph:folder-bold",
    },
    {
      actionName: "Enrolment",
      actionIconName: "ic:outline-people",
    },
    {
      actionName: "Alerts",
      actionIconName: "grommet-icons:alert",
    },
    {
      actionName: "Reports",
      actionIconName: "ic:baseline-bar-chart",
    },
    {
      actionName: "Notification",
      actionIconName: "mdi:bell-outline",
    },
    {
      actionName: "Settings",
      actionIconName: "carbon:settings",
    },
  ];

  const actionsBar = actionsData.map(function (value) {
    return (
      <Action
        keyVal={value.actionName}
        name={value.actionName}
        iconVal={value.actionIconName}
        color={iconColors.active}
      />
    );
  });

  return (
    <div className="header">
      <div className="cbt--header">
        <p>
          <span className="larger">CBT</span>& Tracking
        </p>
      </div>

      <div className="cbt--frame">
        <div className="profile--details">
          <img src={profileImg} alt="profile-image" />
          <div className="user--details">
            <p className="username bold">{userName}</p>
            <p className="user--role">{userRole}</p>
          </div>
          <img
            src={changeUserIcon}
            alt="change-user"
            className="changeuser--icon"
          />
        </div>
      </div>

      <div className="actions">{actionsBar}</div>

      <div className="logos">
        <div className="top--icons">
          <img src={rexIcon} alt="rex-icon" />
          <img src={pelAirIcon} alt="pel-air-icon" />
        </div>
        <div className="bottom--icons">
          <img src={aapaIcon} alt="aapa-icon" />
          <img src={njeIcon} alt="aapa-icon" />
          <img src={aapmIcon} alt="aapa-icon" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
