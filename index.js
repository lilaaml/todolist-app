const currentDate = document.createTextNode(new Date().toDateString());

document.getElementById("current-date").appendChild(currentDate);

const taskInput = document.getElementById("task-input");
const taskShowcase = document.getElementById("task-showcase");

function addTask() {
    if(taskInput.value === "") {
        const mainBox = document.getElementById("main-box");
        const appHeader = document.getElementById("app-header");

        let alertMsg = document.createElement("p");
        alertMsg.innerHTML = "The task is empty!"
        
        mainBox.insertBefore(alertMsg, appHeader);

        setTimeout(function() {
            alertMsg.style.display = "none";
        }, 2000);
    } else {
        // display new task
        let newTask = document.createElement("li");
        newTask.innerHTML = taskInput.value;
        taskShowcase.appendChild(newTask);

        // cross button
        let cross = document.createElement("span");
        cross.innerHTML = "\u00d7";
        newTask.appendChild(cross);
    }
    // clear input box
    taskInput.value = "";
    saveData();
}

taskShowcase.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", taskShowcase.innerHTML);
}

function showData() {
    taskShowcase.innerHTML = localStorage.getItem("data");
}

function clearData() {
    localStorage.removeItem("data");
}

showData();