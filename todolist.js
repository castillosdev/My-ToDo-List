//Variables
let container = document.querySelector(".container");
let newTaskInput = document.getElementById("new_task_input");
let taskform = document.getElementById("new-task-form");
let tasksList = document.getElementById("todo-list");
let deleteBtns = []; // initialize deleteBtns as an empty array

//Add Event Listeners
taskform.addEventListener("submit", function (e) {
  e.preventDefault();
  let newTaskInputValue = taskform.elements.new_task_input;

  //Check if the input field is blank
  if (newTaskInputValue.value === '') {
    //Prompt the user to enter a task
    alert('Please enter a task.');
  } else {
    //Add the task to the list
    addTask(newTaskInputValue.value);
  }

  newTaskInputValue.value = "";
  container.classList.remove("task_list_empty");
});

//Add task to list
function addTask(task) {
  const newTaskItem = document.createElement("li");
  newTaskItem.setAttribute(
    "class",
    "todo-list-item m-auto my-12 bg-slate-600 px-4 py-2 rounded "
  );

  //add the task text
  const taskText = document.createElement("div");
  taskText.setAttribute(
    "class",
    "todo-list-item__text bg-slate-100 text-slate-800 px-12 py-2 rounded font-medium border-4 border-indigo-500/50"
  );

  //add the delete button
  const deleteButton = document.createElement("div");
  deleteButton.setAttribute(
    "class",
    "todo-list-item__deleteButton bg-rose-900 text-white px-12 py-2 rounded font-medium  hover:bg-rose-800 "
  );
  deleteButton.innerText = "Delete"; // add text to the button

  //add the edit button
  const editButton = document.createElement("div");
  editButton.setAttribute(
    "class",
    "todo-list-item__editButton bg-teal-900 text-white px-12 py-2 rounded font-medium hover:bg-teal-800"
  );
  editButton.innerText = "Edit"; // add text to the button

  //Add the click event listener to the edit button
  editButton.addEventListener("click", function () {
    //Get the new task text from the user
    const newTaskText = prompt("Enter new task:");

    //Update the task text with the new task text
    taskText.innerText = newTaskText;
  });

  //Set the value of the input to the task text
  taskText.innerText = task;

  //append the task text to the list item
  newTaskItem.appendChild(taskText);

  // Add the delete and edit buttons to the list item
  newTaskItem.appendChild(deleteButton);
  newTaskItem.appendChild(editButton);

  //append the li to the ul
  tasksList.appendChild(newTaskItem);

  //completion funtionality on the delete button
  onTaskCompletion(deleteButton);

  // add the delete button to the array of delete buttons
  deleteBtns.push(deleteButton);
}

//TO remove the task from the list
function onTaskCompletion(deleteButton) {
  deleteButton.addEventListener("click", function () {
    deleteButton.parentElement.remove();
    if (tasksList.children.length === 0) {
      container.classList.add("task_list_empty");
    }
  });
}

