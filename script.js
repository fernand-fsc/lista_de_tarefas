const taskInput = document.getElementById('task');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button onclick="toggleTask(this)">Concluir</button>
        <button class="delete-button" onclick="deleteTask(this)">Excluir</button>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
}

function toggleTask(button) {
    const li = button.parentElement;
    li.classList.toggle('completed');
    const completeButton = li.querySelector('button');
    completeButton.textContent = li.classList.contains('completed') ? 'Desfazer' : 'Concluir';
}

function deleteTask(button) {
    const li = button.parentElement;
    taskList.removeChild(li);
}
