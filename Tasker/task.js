const select = document.getElementById("list-options");
const sList2 = document.querySelector(".s-list2");

select.addEventListener("click", function (event) {
  if (sList2.classList.contains("open")) {
    sList2.style.transition = "padding-bottom 0.4s ease-in-out";
    sList2.style.paddingBottom = "0px";
    sList2.classList.remove("open");
  } else {
    sList2.style.transition = "padding-bottom 0.4s ease-in-out";
    sList2.style.paddingBottom = "90px";
    sList2.classList.add("open");
  }
});

/* --------- main bar ------------*/
function showAddBox() {
  var addBox = document.getElementById("add-box");
  addBox.style.display = "block";
  addBox.style.display = "flex";
  addBox.style.gap = "20px";
}

function hideAddBox() {
  var addBox = document.getElementById("add-box");
  addBox.style.display = "none";
}

// Load tasks from local storage when the page loads
window.addEventListener("load", function () {
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach(function (task) {
    var taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    var checkboxDiv = document.createElement("div");
    checkboxDiv.classList.add("checkbox");

    var infoDiv = document.createElement("div");
    infoDiv.classList.add("info");

    var actionDiv = document.createElement("div");
    actionDiv.classList.add("actions");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.checked || false; // Set the initial checked state

    checkbox.addEventListener("change", function () {
      if (this.checked) {
        nameHeading.style.textDecoration = "line-through";
      } else {
        nameHeading.style.textDecoration = "none";
      }

      // Save the checkbox state in local storage
      task.checked = this.checked;
      localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    var nameHeading = document.createElement("h1");
    nameHeading.textContent = task.name;

    var categoryParagraph = document.createElement("p");
    categoryParagraph.textContent = "Category: " + task.category;

    var editIcon = document.createElement("i");
    editIcon.style.cursor = "pointer";
    editIcon.classList.add("fa-solid", "fa-pen-to-square");
    editIcon.addEventListener("click", function () {
      var addBox = document.getElementById("add-box");
      addBox.style.display = "block";
      addBox.style.display = "flex";

      var nameInput = document.getElementById("t-name");
      nameInput.value = nameHeading.textContent;

      var categorySelect = document.getElementById("list-options1");
      categorySelect.value = categoryParagraph.textContent.replace(
        "Category: ",
        ""
      );

      // Add event listener to the add button in the add-box
      var addButton = document.getElementById("add-button");
      addButton.addEventListener("click", function () {
        // Create a new task object with the edited details
        var editedTask = {
          name: nameInput.value,
          category: categorySelect.value,
          checked: task.checked, // Preserve the checkbox state
        };

        // Get the index of the task being edited
        var taskIndex = tasks.findIndex(function (t) {
          return t.name === task.name && t.category === task.category;
        });

        // Replace the existing task with the edited task in the tasks array
        tasks.splice(taskIndex, 1, editedTask);

        // Save the updated tasks array back to local storage
        localStorage.setItem("tasks", JSON.stringify(tasks));

        // Remove the existing task div
        taskDiv.remove();

        // Create a new task div with the edited details
        var editedTaskDiv = document.createElement("div");
        editedTaskDiv.classList.add("task");

        var editedCheckboxDiv = document.createElement("div");
        editedCheckboxDiv.classList.add("checkbox");

        var editedInfoDiv = document.createElement("div");
        editedInfoDiv.classList.add("info");

        var editedActionDiv = document.createElement("div");
        editedActionDiv.classList.add("actions");

        var editedCheckbox = document.createElement("input");
        editedCheckbox.type = "checkbox";
        editedCheckbox.checked = editedTask.checked; // Set the initial checked state
        editedCheckbox.addEventListener("change", function () {
          if (this.checked) {
            editedNameHeading.style.textDecoration = "line-through";
          } else {
            editedNameHeading.style.textDecoration = "none";
          }

          // Save the checkbox state in local storage
          editedTask.checked = this.checked;
          localStorage.setItem("tasks", JSON.stringify(tasks));
        });

        var editedNameHeading = document.createElement("h1");
        editedNameHeading.textContent = editedTask.name;

        var editedCategoryParagraph = document.createElement("p");
        editedCategoryParagraph.textContent =
          "Category: " + editedTask.category;

        editedCheckboxDiv.appendChild(editedCheckbox);

        editedInfoDiv.appendChild(editedNameHeading);
        editedInfoDiv.appendChild(editedCategoryParagraph);

        editedActionDiv.appendChild(editIcon);
        editedActionDiv.appendChild(deleteIcon);

        editedTaskDiv.appendChild(editedCheckboxDiv);
        editedTaskDiv.appendChild(editedInfoDiv);
        editedTaskDiv.appendChild(editedActionDiv);

        taskContainer.appendChild(editedTaskDiv);

        // Hide the add-box after editing
        addBox.style.display = "none";
      });
    });

    var deleteIcon = document.createElement("i");
    deleteIcon.style.cursor = "pointer";
    deleteIcon.classList.add("fa-solid", "fa-trash-can");
    deleteIcon.addEventListener("click", function () {
      // Show the confirmation message
      var conMsg = document.getElementById("con-msg");
      conMsg.style.display = "block";
      conMsg.style.display = "flex";
      conMsg.style.gap = "10px";
      conMsg.style.backgroundColor = "white";

      // Add event listener to the delete button
      var delBtn = document.getElementById("del");
      delBtn.addEventListener("click", function () {
        // Get the tasks array from local storage
        var tasks = JSON.parse(localStorage.getItem("tasks"));

        // Find the index of the task to be deleted
        var taskIndex = tasks.findIndex(function (t) {
          return t.name === task.name && t.category === task.category;
        });

        // Remove the task from the tasks array
        tasks.splice(taskIndex, 1);

        // Save the updated tasks array back to local storage
        localStorage.setItem("tasks", JSON.stringify(tasks));

        taskDiv.remove(); // Remove the task div
        conMsg.style.display = "none"; // Hide the confirmation message
      });

      // Add event listener to the cancel button
      var canBtn = document.getElementById("can");
      canBtn.addEventListener("click", function () {
        conMsg.style.display = "none"; // Hide the confirmation message
      });
    });

    checkboxDiv.appendChild(checkbox);

    infoDiv.appendChild(nameHeading);
    infoDiv.appendChild(categoryParagraph);

    actionDiv.appendChild(editIcon);
    actionDiv.appendChild(deleteIcon);

    taskDiv.appendChild(checkboxDiv);
    taskDiv.appendChild(infoDiv);
    taskDiv.appendChild(actionDiv);

    var taskContainer = document.querySelector(".task-container");
    taskContainer.appendChild(taskDiv);

    // Apply CSS to the task div
    taskDiv.style.backgroundColor = "rgb(240, 230, 247)";
    taskDiv.style.padding = "10px";
    taskDiv.style.margin = "10px";
    taskDiv.style.borderRadius = "20px";
    taskDiv.style.border = "1px solid #ccc";
    taskDiv.style.display = "flex";

    checkboxDiv.style.marginRight = "10px";
    infoDiv.style.marginRight = "auto"; // Pushes actionDiv to the right
    actionDiv.style.marginLeft = "auto"; // Pushes infoDiv to the left

    actionDiv.style.display = "flex";
    actionDiv.style.alignItems = "center";
    actionDiv.style.gap = "20px";
  });
});
let selectedCategory = "Categories";
let filter = "All";

// Filter tasks based on category selection
document.querySelectorAll("#list-options").forEach(function (option) {
  option.addEventListener("change", function () {
    selectedCategory = this.value;
    filterTasksByCategory();
  });
});

// Filter tasks based on button click
document.querySelectorAll(".but").forEach(function (button) {
  button.addEventListener("click", function () {
    filter = this.value;
    filterTasksByCategory();
  });
});

function filterTasksByCategory() {
  var taskDivs = document.querySelectorAll(".task");

  taskDivs.forEach(function (taskDiv) {
    var checkbox = taskDiv.querySelector("input[type='checkbox']");
    var category = taskDiv
      .querySelector("p")
      .textContent.replace("Category: ", "");

    if (selectedCategory === "Categories" || category === selectedCategory) {
      if (filter === "All") {
        taskDiv.style.display = "flex";
      } else if (filter === "Done" && checkbox.checked) {
        taskDiv.style.display = "flex";
      } else if (filter === "Not done" && !checkbox.checked) {
        taskDiv.style.display = "flex";
      } else {
        taskDiv.style.display = "none";
      }
    } else {
      taskDiv.style.display = "none";
    }
  });
}



function addTask() {
  var nameInput = document.getElementById("t-name");
  var categorySelect = document.getElementById("list-options1");
  var addBox = document.getElementById("add-box");
  var conMsg = document.getElementById("con-msg");
  var delBtn = document.getElementById("del");
  var canBtn = document.getElementById("can");

  if (nameInput.value.trim() !== "" && categorySelect.value !== "Categories") {
    // Create an object to store task details
    var taskDetails = {
      name: nameInput.value,
      category: categorySelect.value,
    };

    // Get existing tasks from local storage or initialize an empty array
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Add the new task details to the tasks array
    tasks.push(taskDetails);

    // Save the updated tasks array back to local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Refresh the page to display the updated tasks
    location.reload();
  }
}
