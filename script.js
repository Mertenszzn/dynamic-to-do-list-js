// Wait until the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {

    // Step 1: Select important DOM elements
    const addButton = document.getElementById('add-task');  // Add Task button
    const taskInput = document.getElementById('task-input'); // Input field
    const taskList = document.getElementById('task-list');   // Unordered list for tasks

    // Step 2: Define the addTask function
    function addTask() {
        // Get and trim the user's input
        const taskText = taskInput.value.trim();

        // Validate input
        if (taskText === '') {
            alert('Please enter a task!');
            return; // Stop the function here
        }

        // Step 3: Create a new <li> for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Step 4: Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // When the remove button is clicked, remove the task from the list
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the remove button to the <li>
        li.appendChild(removeButton);

        // Add the task (li) to the task list (ul)
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Step 5: Add event listener for button click
    addButton.addEventListener('click', addTask);

    // Step 6: Add event listener for pressing Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Optional: Run any initialization logic once DOM is ready
    console.log("To-Do List App is ready!");
});
