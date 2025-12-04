// Saare tasks yahan store honge
let tasks = [];

// Add button pe click hone par ye function chalega
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const prioritySelect = document.getElementById("prioritySelect");

    const text = taskInput.value.trim();
    const priority = prioritySelect.value;

    if (text === "") {
        alert("Please enter a task");
        return;
    }

    // Naya task array me add karo
    tasks.push({ text: text, priority: priority });

    // Input box clear
    taskInput.value = "";

    // List ko dobara display karo
    displayTasks(tasks);
}

// Ye function UL ke andar li banata hai
function displayTasks(list) {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // purani list hatao

    list.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = "task-item";

        // Priority ke according extra class (optional style ke liye)
        li.classList.add(task.priority.toLowerCase()); // high / medium / low

        li.innerHTML = `
            <span class="task-text">${task.text}</span>
            <span class="task-priority">${task.priority}</span>
            <button class="delete-btn" onclick="deleteTask(${index})">✕</button>
        `;

        taskList.appendChild(li);
    });
}

// Delete button dabane pe ye chalega
function deleteTask(index) {
    tasks.splice(index, 1); // array se hatao

    const currentFilter = document.getElementById("filterSelect").value;
    if (currentFilter === "All") {
        displayTasks(tasks);
    } else {
        const filtered = tasks.filter(t => t.priority === currentFilter);
        displayTasks(filtered);
    }
}

// Filter dropdown change hone pe ye chalega
function filterTasks() {
    const select = document.getElementById("filterSelect");
    const value = select.value;

    if (value === "All") {
        displayTasks(tasks);
    } else {
        const filtered = tasks.filter(t => t.priority === value);
        displayTasks(filtered);
    }
}

// Page load hote hi empty list dikhane ke liye
window.onload = function () {
    displayTasks(tasks);
};