let tasks = [];


const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

const addNewTask = ()=>{
  const taskInput = document.getElementById("taskInput");
  const text = taskInput.value.trim();

  if(text){
    tasks.push({text:text, completed:false});
    taskInput.value = "";
    updateTaskList();
    updateStats();
    saveTasks()
  }
};
// Complete Task
const toggleTaskcomplete = (index) => {
  tasks[index].completed = !tasks[index].completed;
  updateTaskList();
  updateStats();
  saveTasks()
};
// Delete Task
const deleteTask = (index) => {
  tasks.splice(index, 1);
  updateTaskList()
  updateStats();
  saveTasks()
};
// Edit Task
const editTask = (index) => {
  const taskInput = document.getElementById("taskInput");
  taskInput.value = tasks[index].text;

  tasks.splice(index, 1);
  updateTaskList();
  updateStats();
  saveTasks()
};
// counting tasks
const updateStats = () =>{
  const completeTasks = tasks.filter((task) => task.completed).length;    
  const totalTasks = tasks.length; 
  const progress = (completeTasks/totalTasks)*100;
  const progressBar = document.getElementById("progress");
  console.log(progress)
  progressBar.style.width = `${progress}%`;

  document.getElementById("numbers").innerText = `${completeTasks} / ${totalTasks}`;

};
// Update Task List by adding, removing and updating the task to the list 
const updateTaskList = ()=>{
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";


tasks.forEach((task, index) => {
  const listItem = document.createElement("li");

  listItem.innerHTML = `
  <div class="taskItem">
    <div class="task ${task.completed ? "completed" : ""}">
      <input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""} />
      <p>${task.text}</p>
    </div>

    <div class="icons">
      <img src="./images/edit.svg" alt="Edit" onclick ="editTask(${index})" />
      <img src="./images/bin.svg" alt="Delete" onclick = "deleteTask(${index})" />
    </div>
  </div>
  `;
listItem.addEventListener("change", ()=> toggleTaskcomplete(index));
taskList.appendChild(listItem);

});
};

// Add New Task and prevent the default behavior of the form
document.getElementById("newTask").addEventListener("click", function(e){
  e.preventDefault();

  addNewTask();
})