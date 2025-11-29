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

  // Event listeners
  addTaskBtn.addEventListener("click", openAddTaskModal);
  closeModalBtn.addEventListener("click", closeModal);
  saveTaskBtn.addEventListener("click", saveTask);
  searchInput.addEventListener("input", searchTasks);
  searchButton.addEventListener("click", searchTasks);

  // Close modal when clicking outside
  window.addEventListener("click", function (event) {
    if (event.target === taskModal) {
      closeModal();
    }
  });
});

// Render tasks in the task list
function renderTasks() {
  tasksWrapper.innerHTML = "";

  if (tasks.length === 0) {
    showEmptyState();
    return;
  }

  tasks.forEach((task) => {
    const taskCard = createTaskCard(task);
    tasksWrapper.appendChild(taskCard);
  });
}

// Create a task card element
function createTaskCard(task) {
  const taskCard = document.createElement("div");
  taskCard.className = "task-card";
  taskCard.dataset.id = task.id;

  // Create task card content
  taskCard.innerHTML = `
  <div class="task-status">
  <div class="status-circle ${task.completed ? "completed" : ""}">
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="${
    task.completed ? "white" : "currentColor"
  }" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          </div>
          <div class="task-title">${task.title}</div>
          </div>
          <div class="task-description">${truncateText(
            task.description,
            100
          )}</div>
          <div class="task-info">
          <span class="priority-info">Priority: <span
          class="${task.priority.toLowerCase()}">${task.priority}</span></span>
          <span class="date-info">Created on: ${task.date}</span>
          </div>
          `;

  // Add click event to select this task
  taskCard.addEventListener("click", () => selectTask(task.id));

  // Add click event to toggle completion status
  const statusCircle = taskCard.querySelector(".status-circle");
  statusCircle.addEventListener("click", (e) => {
    e.stopPropogation();
    toggleTaskCompletion(task.id);
  });

  return taskCard;
}

// Select a task and show its details
function selectTask(taskId) {
  // Deselect all tasks
  document.querySelectorAll(".task-card").forEach((card) => {
    card.classList.remove("selected");
  });

  // Select the clicked task
  const taskCard = document.querySelector(`.task-card[data-id=${taskId}"]`);
  if (taskCard) {
    taskCard.classList.add("selected");
  }

  // Find the task data
  const task = tasks.find((t) => t.id === taskId);
  if (!task) return;
  
}

// Sample task data for initial display
const sampleTasks = [
  {
    id: 1,
    title: "Module 2: Build and Apply",
    description:
      "Go through all lessons in Module 2, ensuring you pause to take notes and code along actively. This module introduces real-world projects, so take the time to understand how the concepts from Module 1 are applied in practical scenarios.",
    priority: "Extreme",
    date: "05/05/2025",
    completed: false,
  },
  {
    id: 2,
    title: "Module 1: The Foundations",
    description:
      "Go through all lessons inside Module 1 at your own pace. As you progress, make detailed notes to reinforce your understanding and practice writing the code alongside the instructor.",
    priority: "Extreme",
    date: "05/01/2025",
    completed: true,
  },
];
