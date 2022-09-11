import './tasks.css';

/**
 * Displays project info for the currently selected project.
 * @param {Object} state
 */
const displayProjectInfo = (state) => {
  const currentProject = state.projArr[state.currentProj];

  const projectTitle = document.querySelector('.tasks__project-title');
  projectTitle.textContent = currentProject.getTitle();

  const projectDescrip = document.querySelector('.tasks__project-descrip');
  projectDescrip.textContent = currentProject.getDescription();
};

/**
 * Displays all tasks for a project and show project info.
 * @param {Object} state
 */
const displayTaskList = (state) => {
  const currentProject = state.projArr[state.currentProj];

  const tasksList = document.querySelector('.tasks__list');
  while (tasksList.firstChild) {
    tasksList.removeChild(tasksList.lastChild);
  }

  let item;
  if (currentProject.getTasks().length === 0) {
    item = document.createElement('div');
    item.classList.add('tasks__item');
    item.classList.add('tasks__item_no-tasks');
    item.textContent = 'You have no tasks.';
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

const displayNewTaskForm = () => {
  // Parent and reference nodes
  const taskView = document.querySelector('.tasks__view');
  const taskList = document.querySelector('.tasks__list');

  // Parent container for the task options
  const newTaskForm = document.createElement('form');
  newTaskForm.classList.add('tasks__item');
  newTaskForm.classList.add('tasks__item_form');

  const newTaskTitle = document.createElement('input');
  newTaskTitle.classList.add('item-form__title');
  newTaskTitle.setAttribute('type', 'text');
  newTaskTitle.setAttribute('required', true);
  newTaskTitle.setAttribute('placeholder', 'Enter title');

  const newTaskDescription = document.createElement('input');
  newTaskDescription.classList.add('item-form__description');
  newTaskDescription.setAttribute('type', 'text');
  newTaskDescription.setAttribute('placeholder', 'Enter description');

  const newTaskDate = document.createElement('input');
  newTaskDate.classList.add('item-form__date');
  newTaskDate.setAttribute('type', 'date');

  const acceptBtn = document.createElement('button');
  acceptBtn.classList.add('item__accept-btn');
  acceptBtn.setAttribute('type', 'button');
  acceptBtn.textContent = 'Accept';

  const cancelBtn = document.createElement('button');
  cancelBtn.classList.add('item__cancel-btn');
  cancelBtn.setAttribute('type', 'button');
  cancelBtn.textContent = 'Cancel';

  newTaskForm.appendChild(newTaskTitle);
  newTaskForm.appendChild(newTaskDescription);
  newTaskForm.appendChild(newTaskDate);
  newTaskForm.appendChild(acceptBtn);
  newTaskForm.appendChild(cancelBtn);

  taskView.insertBefore(newTaskForm, taskList);
};

// Event listeners
const addTaskBtn = document.querySelector('.tasks__add-task-btn');
addTaskBtn.addEventListener('click', displayNewTaskForm);

export { displayTaskList, displayProjectInfo };
