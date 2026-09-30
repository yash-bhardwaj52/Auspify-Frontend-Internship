// ===============================
// SELECT HTML ELEMENTS
// ===============================

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearAllBtn = document.getElementById("clearAllBtn");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");

const emptyMessage = document.getElementById("emptyMessage");


// ===============================
// TASK DATA
// ===============================

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


// ===============================
// ADD TASK
// ===============================

function addTask() {

    const taskText = taskInput.value.trim();

    // Empty task check
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(newTask);

    saveTasks();

    taskInput.value = "";

    renderTasks();
}


// ===============================
// DISPLAY TASKS
// ===============================

function renderTasks() {

    taskList.innerHTML = "";

    if (tasks.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }


    tasks.forEach((task) => {

        const li = document.createElement("li");

        li.className = "task-item";

        if (task.completed) {
            li.classList.add("completed");
        }


        // Checkbox
        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";

        checkbox.className = "task-checkbox";

        checkbox.checked = task.completed;


        checkbox.addEventListener("change", () => {
            toggleTask(task.id);
        });


        // Task text
        const span = document.createElement("span");

        span.className = "task-text";

        span.textContent = task.text;


        // Delete button
        const deleteBtn = document.createElement("button");

        deleteBtn.className = "delete-btn";

        deleteBtn.innerHTML = "🗑️";

        deleteBtn.title = "Delete task";


        deleteBtn.addEventListener("click", () => {
            deleteTask(task.id);
        });


        // Add everything to list
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });


    updateStats();
}


// ===============================
// COMPLETE / UNCOMPLETE TASK
// ===============================

function toggleTask(id) {

    tasks = tasks.map((task) => {

        if (task.id === id) {
            return {
                ...task,
                completed: !task.completed
            };
        }

        return task;
    });

    saveTasks();

    renderTasks();
}


// ===============================
// DELETE TASK
// ===============================

function deleteTask(id) {

    tasks = tasks.filter((task) => task.id !== id);

    saveTasks();

    renderTasks();
}


// ===============================
// CLEAR ALL TASKS
// ===============================

function clearAllTasks() {

    if (tasks.length === 0) {
        return;
    }

    const confirmDelete = confirm(
        "Are you sure you want to delete all tasks?"
    );

    if (!confirmDelete) {
        return;
    }

    tasks = [];

    saveTasks();

    renderTasks();
}


// ===============================
// UPDATE STATISTICS
// ===============================

function updateStats() {

    const total = tasks.length;

    const completed = tasks.filter(
        (task) => task.completed
    ).length;

    const pending = total - completed;


    totalTasks.textContent = total;

    completedTasks.textContent = completed;

    pendingTasks.textContent = pending;
}


// ===============================
// LOCAL STORAGE
// ===============================

function saveTasks() {

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}


// ===============================
// BUTTON EVENTS
// ===============================

addTaskBtn.addEventListener("click", addTask);

clearAllBtn.addEventListener(
    "click",
    clearAllTasks
);


// ===============================
// ENTER KEY SUPPORT
// ===============================

taskInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        addTask();
    }

});


// ===============================
// LOAD SAVED TASKS
// ===============================

renderTasks();