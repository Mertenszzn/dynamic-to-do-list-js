// Step 1: Wait for the page to load fully before running the code
document.addEventListener("DOMContentLoaded", function () {

    // Step 2: Select DOM elements
    const addButton = document.getElementById("add-task-btn"); // "Add Task" button
    const taskInput = document.getElementById("task-input");   // Input field
    const taskList = document.getElementById("task-list");     // UL list container

    // Step 3: Define the addTask function
    function addTask() {
        // Get and clean up the user's input
        const taskText = taskInput.value.trim();

        // Check if input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Step 4: Create a new list item
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create a remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // When the remove button is clicked, delete the task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Add the remove button inside the list item
        li.appendChild(removeBtn);

        // Add the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Step 5: Add event listeners
    addButton.addEventListener("click", addTask);

    // Allow pressing Enter key to add tasks
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
