import React from "react";
import { Icon } from "@iconify/react";

import "./Action.css";

function Action(props) {
  const actionIcon = (
    <Icon
      icon={props.iconVal}
      color={props.color}
      width="24"
      key={props.keyVal}
    />
  );

  return (
    <>
      <div className="actions--button">
        <div className="icon--container">{actionIcon}</div>
        <p className="bold action--name">{props.name}</p>
      </div>
    </>
  );
}

export default Action;
