import './tasks.css';

/**
 * Displays all tasks for a project and show project info.
 * @param {Object} state
 */
const displayTaskList = (state) => {
  const currentProject = state.projArr[state.currentProj];

  const projectTitle = document.querySelector('.tasks__project-title');
  projectTitle.textContent = currentProject.getTitle();

  const projectDescrip = document.querySelector('.tasks__project-descrip');
  projectDescrip.textContent = currentProject.getDescription();

  const tasksList = document.querySelector('.tasks__list');
  while (tasksList.firstChild) {
    tasksList.removeChild(tasksList.lastChild);
  }

  let item;
  if (currentProject.getTasks().length === 0) {
    item = document.createElement('div');
    item.classList.add('tasks__item');
    item.textContent = 'No tasks.';
    tasksList.appendChild(item);
  } else {
    currentProject.getTasks().forEach((task) => {
      item = document.createElement('div');
      item.classList.add('tasks__item');
      item.textContent = task.getTitle();
      tasksList.appendChild(item);
    });
  }
};

export { displayTaskList };
