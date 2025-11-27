// Store tasks in memory
let tasks = [...sampleTasks];
let editingTaskId = null;

// DOM Elements
const taskModal = document.getElementById("taskModal");
const modalTitle = document.getElementById("modalTitle");
const taskTitleInput = document.getElementById("taskTitle");
const taskDateInput = document.getElementById("taskDate");
const taskDescriptionInput = document.getElementById("taskDescription");
const saveTaskBtn = document.getElementById("saveTaskBtn");
const tasksWrapper = document.querySelector(".tasks-wrapper");
const taskDetailsPanel = document.querySelector(".task-details");
const addTaskBtn = document.getElementById("addTaskBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");

document.addEventListener("DOMContentLoaded", function () {
// Set current date in header
updateCurrentDate();

// Render initial tasks
renderTasks();

// Select first task by default
    if (tasks.length > 0) {
        selectTask(tasks[0].id);
    } else {
        showEmptyState();
    }
})




// Sample task data for initial display
const sampleTasks = [
  {
    id: 1,
    title: "Module 2: Build and Apply",
    description:
      "Go through all lessons in Module 2, ensuring you pause to take notes and code along actively. This module introduces real-world projects, so take the time to understand how the concepts from Module 1 are applied in practical scenarios.",
    priority: "Extreme",
    date: "20/05/2025",
    completed: false,
  },
  {
    id: 2,
    title: "Module 1: The Foundations",
    description:
      "Go through all lessons inside Module 1 at your own pace. As you progress, make detailed notes to reinforce your understanding and practice writing the code alongside the instructor.",
    priority: "Extreme",
    date: "01/05/2025",
    completed: true,
  },
];
