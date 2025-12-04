document.querySelectorAll('input[name="priority"]').forEach((radio) => {
    if (radio.checked) {
        selectedPriority = 
        radio.value.charAt(0).toUpperCase() + radio.value.slice(1);
    }
});

const newTask = {
    id: Date.now(),
    title: taskTitleInput.value.trim(),
    description: taskDescriptionInput.value.trim(),
    priority: selectedPriority,
    date: taskDateInput.value,
    completed: false,
};

if (!taskTitleInput.value.trim()) {
    alert("Please enter a task title");
    return;
}

taskTitleInput.value = "";
taskDescriptionInput.value = "";

const now = new Date();
const month = String(now.getMonth() + 1).padStart(2, "0");
const day = String(now.getDate()).padStart(2, "0");
const year = now.getFullYear();
taskDateInput.value = `${month}/${day}/${year}`;

document.querySelectorAll('input[name="priority"]').forEach((radio) => {
    radio.checked = radio.value === "low";
});

tasks.unshift(newTask);

editingTaskId = taskId;

taskModal.style.display = "flex";

let selectedPriority = "Low";

if (editingTaskId === null) {
    // Create new task logic
} else {
    // Update existing task logic
}

selectTask(tasks[0].id);

const filteredTasks = tasks.filter((task) =>
task.title.toLowerCase().includes(searchTerm)
);

const searchTerm = searchInput.value.toLowerCase().trim();

if (filteredTasks.length === 0) {
    tasksWrapper.innerHTML = `
    <div class="empty-state">
      <p>No tasks match your search. Try a different query.</p>
    </div>
    `;
    taskDetailsPanel.innerHTML = "";
}

if (searchTerm === "") {
  renderTasks();
  if (tasks.length > 0) {
    selectTask(tasks[0].id);
  }
  return;
}

const task = tasks.find((t) => t.id === taskId);