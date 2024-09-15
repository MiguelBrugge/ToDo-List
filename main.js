const addTaskInput = document.getElementById('task-input');
const taskWrapper = document.getElementById('task-wrapper');
const deleteButtons = document.getElementsByClassName('delete-button');
const totalTasks = document.getElementById('total-tasks');
const totalCompletedTasks = document.getElementById('total-completed-tasks');

function createTaskElement(taskName) {
    const task = document.createElement('div');
    task.classList.add('task', 'd-flex', 'justify-content-between', 'border', 'p-1', 'px-3', 'border-3', 'rounded-3');
    task.innerHTML = `
        <b class="fs-5">${taskName}</b>
        <div class="d-flex gap-3 align-items-center">
            <i class="delete-button fa-solid fa-trash"></i>
            <input class="checkbox" type="checkbox">
        </div>
    `;
    taskWrapper.appendChild(task);
}

function addTask() {
    const taskName = addTaskInput.value;
    if (!taskName) { return }
    createTaskElement(taskName);
    addTaskInput.value = '';
    updateInfo();
}

function removeTask(event) {
    const task = event.target.closest('.task');
    task.remove();
    updateInfo();
}

function toggleTaskStatus(event) {
    const task = event.target.closest('.task');
    task.classList.toggle('task-completed');
    updateInfo();
}

// Add eventListeners to every task inside taskWrapper
taskWrapper.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-button')) {
        removeTask(event);
    } else if (event.target.classList.contains('checkbox')) {
        toggleTaskStatus(event);
    }
});

// Updates the information and visibility of the task-wrapper
function updateInfo() {
    taskWrapper.style.display = taskWrapper.children.length == 0 ? 'none': 'flex';
    totalTasks.textContent = taskWrapper.children.length;
    totalCompletedTasks.textContent = taskWrapper.getElementsByClassName('task-completed').length;
}

