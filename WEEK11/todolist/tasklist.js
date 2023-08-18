document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.getElementById('taskList');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.sort((a, b) => a.startDate - b.startDate);

    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h2>${task.name}</h2>
            <p>Start Date: ${task.startDate.toLocaleString()}</p>
            <p>Days Left: ${calculateDaysLeft(task.endDate)}</p>
        `;
        taskList.appendChild(listItem);
    });

    function calculateDaysLeft(endDate) {
        const today = new Date();
        const diffTime = endDate - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }
});
