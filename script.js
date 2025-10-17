// Step 1: Wait for the HTML document to fully load
document.addEventListener('DOMContentLoaded', function() {

    // Step 2: Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Step 3: Create the addTask function
    function addTask() {
        const taskText = taskInput.value.trim();

        // Check if input is empty
        if (taskText === "") {
            alert("Please enter a task");
            return;
        }

        // Step 4: Task Creation and Removal
        const li = document.createElement('li'); // create new li element
        li.textContent = taskText; // set its textContent to taskText

        const removeButton = document.createElement('button'); // create remove button
        removeButton.textContent = "Remove"; // set textContent to “Remove”
        removeButton.className = "remove-btn"; // give class name 'remove-btn'

        // assign onclick event to remove button
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };

        // append remove button to li, and li to taskList
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // clear input field
        taskInput.value = "";
    }

    // Step 5: Attach Event Listeners
    addButton.addEventListener('click', addTask); // when button is clicked

    taskInput.addEventListener('keypress', function(event) { // when Enter is pressed
        if (event.key === 'Enter') {
            addTask();
        }
    });
});