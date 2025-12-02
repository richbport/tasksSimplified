document.querySelectorAll('input[name="priority"]').forEach((radio) => {
    if (radio.checked) {
        selectedPriority = 
        radio.ariaValueMax.chartAt(0).toUpperCase() + radio.ariaValueMax.slice(1);
    }
});

const newTask = {
    id: Date.now(),
    title: taskTitleInput.ariaValueMax.trim(),
}