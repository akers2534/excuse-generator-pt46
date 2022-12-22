/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateExcuse() {
  let who = ["My Car", "My Alarm", "Dog", "Sick"];
  let action = ["Wouldn't start ", "didn't go off", "ate", "coughing"];
  let what = ["Battery died", "didn't wake up", "my keys", "too much"];
  let when = [
    "before work",
    "right on time",
    "couldn't drive to work",
    "when i woke up"
  ];
  const output = document.querySelector("#excuse");
  output.innerHTML = `${who[Math.floor(Math.random() * who.length)]} ${
    action[Math.floor(Math.random() * action.length)]
  } ${what[Math.floor(Math.random() * what.length)]} ${
    when[Math.floor(Math.random() * when.length)]
  }`;
}
window.onload = function() {
  //write your code here
  let reloadbutton = document.querySelector("#reloadButton");
  reloadbutton.onclick = generateExcuse;
};
