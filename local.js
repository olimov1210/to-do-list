//variable for assigning input which is entered by use
let input = document.getElementById('new-task');
//unordered list for placing inputs as <li></li> and saving them inside <ul></ul>
let tasksList = document.getElementById('tasks');
//array for saving all the inputs entered by the user
let allTasks = [];
//function works when the page reloads or reopens.This function checks previous tasks and displays if taks available in local storage
window.onload = function() {
    if (JSON.parse(localStorage.getItem("to-do-elements")) != null) {
      allTasks = JSON.parse(localStorage.getItem("to-do-elements"));
    }
    displayTask();
  };
  //takes an input and adds it to allTasks array and to local storage
function updateTasks() {
    if(input.value != '')
    {
        allTasks.push(input.value);
    }
    localStorage.setItem("to-do-elements", JSON.stringify(allTasks));
    displayTask();
}
//display task to the screen
function displayTask() {
            tasksList.innerHTML = '';
            renderTask();
}
//render a task add icons and taken input
function renderTask() {
    for(let i = 0; i < allTasks.length; i++) {
        let newCheckBox = document.createElement('img');
        newCheckBox.src = './images/unchecked.png'
        newCheckBox.classList.add('icon');
        let newTrash = document.createElement('img');
        newTrash.src = "./images/delete-icon.png";
        newTrash.classList.add('icon');
        let newDiv = document.createElement('div');
        newDiv.appendChild(newCheckBox);
        newDiv.appendChild(newTrash);
        let newList = document.createElement('li');
        newList.innerText = allTasks[i];
        newList.appendChild(newDiv);
        tasksList.appendChild(newList);
        input.value = '';
        newTrash.addEventListener('click', function() {return deleteTask(i);});
        if(allTasks[i].includes(' - ✅'))
        {
          newCheckBox.src = './images/checked.png'
        };
        newCheckBox.addEventListener('click',function() {return taskDone(i);});
    }
}
//delete a task
function deleteTask(index) {
    allTasks.splice(index, 1);
    localStorage.setItem("to-do-elements", JSON.stringify(allTasks));
    updateTasks();
}
//for keyboard "Enter"
window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key) {
    if(key.keyCode === 13)
    {
        updateTasks();
    }
}
function taskDone(index) {
    if (allTasks[index].includes(" - ✅")) {
        allTasks[index] = allTasks[index].replace(" - ✅", "")
      } else {
        allTasks[index] = allTasks[index] + " - ✅";
      }
      localStorage.setItem("to-do-elements", JSON.stringify(allTasks));
      updateTasks();
}