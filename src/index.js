//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

var d = new Date("July 21, 1983 12:15:00");
var hour = d.getHours();

import React from "react";
import ReactDOM from "react-dom";

var gre = "";
const colorChange = {
  color: "gray"
};

if (hour < 12) {
  gre = "Good morning";
  colorChange.color = "red";
} else {
  if (hour < 18) {
    gre = "Good Afternoon";
    colorChange.color = "green";
  } else {
    gre = "Good evening";
    colorChange.color = "blue";
  }
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={colorChange}>
      {gre}
    </h1>
    <p>the hour is: {hour}</p>
  </div>,
  document.getElementById("root")
);
