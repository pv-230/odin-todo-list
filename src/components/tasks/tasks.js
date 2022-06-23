import './tasks.css';

const displayTaskList = (proj) => {
  const tasksList = document.querySelector('.tasks__list');

  while (tasksList.firstChild) {
    tasksList.removeChild(tasksList.lastChild);
  }

  let listItem;
  if (proj.getTasks().length === 0) {
    listItem = document.createElement('div');
    listItem.classList.add('tasks__item');
    listItem.textContent = 'No tasks.';
    tasksList.appendChild(listItem);
  } else {
    proj.getTasks().forEach((task) => {
      listItem = document.createElement('div');
      listItem.classList.add('tasks__item');
      listItem.textContent = task.getTitle();
      tasksList.appendChild(listItem);
    });
  }
};

export { displayTaskList };
