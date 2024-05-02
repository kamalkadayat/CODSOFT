document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("addBtn");
    const inputField = document.getElementById("myInput");
    const list = document.getElementById("myList");

    function createNewTask() {
        const taskText = inputField.value;
        if (taskText.trim() === "") {
            alert("Please enter a task.");
            return;
        }

        const listItem = document.createElement("li");
        listItem.textContent = taskText;
        listItem.classList.add("taskList");
        list.appendChild(listItem);

        const removeButton = document.createElement("button");
        removeButton.innerHTML = "x";
        removeButton.classList.add("removeBtn");
        listItem.appendChild(removeButton);

        inputField.value = "";
    }


    addButton.addEventListener("click", createNewTask);

    list.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("completed");
        } else if (event.target.classList.contains("removeBtn")) {
            const listItem = event.target.parentNode;
            list.removeChild(listItem);
        }
    });
});
