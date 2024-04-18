const currentDate = document.createTextNode(new Date().toDateString());

document.getElementById("current-date").appendChild(currentDate);

const newAct = (document.getElementById("new-act")).value;

document.querySelector("act-one").appendChild(newAct);