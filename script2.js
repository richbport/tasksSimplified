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