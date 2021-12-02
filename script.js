let input = document.getElementById('new-task');
let tasksList = document.getElementById('tasks');
function createTask() {
        if(input.value != '') {
            let newCheckBox = document.createElement('input');
            newCheckBox.type = 'checkbox'
            newCheckBox.classList.add('check-box');
            let newTrash = document.createElement('img');
            newTrash.src = "./images/delete-icon.png";
            newTrash.classList.add('trash-icon');
            let newDiv = document.createElement('div');
            newDiv.appendChild(newCheckBox);
            newDiv.appendChild(newTrash);
            let newList = document.createElement('li');
            newList.innerText = input.value;
            newList.appendChild(newDiv);
            tasksList.appendChild(newList);
            input.value = '';
            //checkbox cheeck
            newCheckBox.addEventListener('change', function() {
                if (this.checked) {
                  newList.classList.add('done')
                } else {
                    newList.classList.remove('done')
                }
              });
            newTrash.addEventListener('click', function() {
                let parent = newDiv.parentNode;
                parent.remove();
            });
        }
}
window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key) {
    if(key.keyCode === 13)
    {
        createTask();
    }
}