import './tasks.css';
import Task from '../../models/Task';

let state = null;

/**
 * Displays project info for the currently selected project.
 */
const displayProjectInfo = () => {
  const currentProject = state.projArr[state.currentProj];

  const projectTitle = document.querySelector('.tasks__project-title');
  if (projectTitle) {
    projectTitle.textContent = currentProject.getTitle();
  }

  const projectDescrip = document.querySelector('.tasks__project-descrip');
  if (projectDescrip) {
    projectDescrip.textContent = currentProject.getDescription();
  }
};

/**
 * Displays all tasks for a project and show project info.
 */
const displayTaskList = () => {
  const currentProject = state.projArr[state.currentProj];

  // Clears all tasks from the display
  const tasksList = document.querySelector('.tasks__list');
  while (tasksList.firstChild) {
    tasksList.removeChild(tasksList.lastChild);
  }

  // Repopulates the task list
  let item;
  if (currentProject.getTasks().length === 0) {
    item = document.createElement('div');
    item.classList.add('tasks__no-task');
    item.textContent = 'You have no tasks.';
    tasksList.appendChild(item);
  } else {
    currentProject.getTasks().forEach((task, index) => {
      item = document.createElement('div');
      item.classList.add('tasks__item');

      // Sets priority color
      const taskPriorityTab = document.createElement('div');
      taskPriorityTab.classList.add('item__tab');
      const taskPriority = Number(task.getPriority());
      if (taskPriority === 1) {
        taskPriorityTab.classList.add('item__tab_red');
      } else if (taskPriority === 2) {
        taskPriorityTab.classList.add('item__tab_yellow');
      } else if (taskPriority === 3) {
        taskPriorityTab.classList.add('item__tab_green');
      }

      // Sets title
      const taskTitle = document.createElement('span');
      taskTitle.classList.add('item__title');
      taskTitle.textContent = task.getTitle();

      // Sets due date
      const taskDate = document.createElement('span');
      taskDate.classList.add('item__date');
      const dueDate = task.getDueDate();
      if (dueDate) {
        taskDate.textContent = `Due: ${dueDate}`;
      }

      // Task delete button
      const deleteBtn = document.createElement('div');
      deleteBtn.classList.add('item__close-btn');
      deleteBtn.setAttribute('data-index', index);
      deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const i = e.currentTarget.getAttribute('data-index');
        state.projArr[state.currentProj].removeTask(i);
        displayTaskList();
      });

      // Expands task when clicked
      item.addEventListener('click', (e) => {
        if (e.currentTarget.classList.contains('tasks__item_expanded')) {
          e.currentTarget.classList.remove('tasks__item_expanded');
          e.currentTarget.querySelector('.item__description').remove();
          e.currentTarget.querySelector('.item__edit-btn').remove();
        } else {
          e.currentTarget.classList.add('tasks__item_expanded');

          const taskDescription = document.createElement('span');
          taskDescription.classList.add('item__description');
          taskDescription.textContent = task.getDescription();
          e.currentTarget.appendChild(taskDescription);

          const editBtn = document.createElement('button');
          editBtn.setAttribute('type', 'text');
          editBtn.classList.add('item__edit-btn');
          e.currentTarget.appendChild(editBtn);
        }
      });

      item.appendChild(taskPriorityTab);
      item.appendChild(taskTitle);
      item.appendChild(taskDate);
      item.appendChild(deleteBtn);
      tasksList.appendChild(item);
    });
  }
};

/**
 * Initializes the task view.
 * @param {Object} s App state.
 */
const updateTasks = (s) => {
  state = s;
  displayProjectInfo();
  displayTaskList();
};

/**
 * Closes the input form for new tasks.
 */
const closeNewTask = () => {
  const addTaskBtn = document.querySelector('.tasks__add-task-btn');
  addTaskBtn.classList.remove('hidden');

  const newTaskInputs = document.querySelector('.new-task__inputs');
  newTaskInputs.remove();
};

/**
 * Adds the new task to the current project.
 */
const addNewTask = () => {
  const title = document.querySelector('.new-task__title').value;
  const descrip = document.querySelector('.new-task__description').value;
  const date = document.querySelector('.new-task__date').value;
  const priority = document.querySelector('.new-task__priority').value;

  if (!title) {
    const titleInput = document.querySelector('.new-task__title');
    titleInput.classList.add('new-task__title_invalid');
    return;
  }

  state.projArr[state.currentProj].addTask(
    Task(title, descrip, date, priority)
  );
  closeNewTask();
  displayTaskList();
};

/**
 * Shows a form where the user can enter information about a new task.
 */
const displayNewTask = () => {
  const addTaskBtn = document.querySelector('.tasks__add-task-btn');
  addTaskBtn.classList.add('hidden');

  // Parent and reference nodes
  const taskView = document.querySelector('.tasks__view');
  const taskList = document.querySelector('.tasks__list');

  // Parent container for the task options
  const newTask = document.createElement('div');
  newTask.classList.add('new-task__inputs');

  // Title input
  const newTaskTitle = document.createElement('input');
  newTaskTitle.classList.add('new-task__title');
  newTaskTitle.setAttribute('type', 'text');
  newTaskTitle.setAttribute('placeholder', 'Enter title');
  newTaskTitle.setAttribute('maxlength', '30');

  // Description input
  const newTaskDescription = document.createElement('input');
  newTaskDescription.classList.add('new-task__description');
  newTaskDescription.setAttribute('type', 'text');
  newTaskDescription.setAttribute('placeholder', 'Enter description');
  newTaskDescription.setAttribute('maxlength', '100');

  // Due date input
  const newTaskDate = document.createElement('input');
  newTaskDate.classList.add('new-task__date');
  newTaskDate.setAttribute('type', 'date');

  // Priority input
  const newTaskPriority = document.createElement('select');
  newTaskPriority.classList.add('new-task__priority');
  let option = document.createElement('option');
  option.textContent = 'Select a priority level';
  option.value = 0;
  newTaskPriority.appendChild(option);
  for (let i = 1; i <= 3; i += 1) {
    option = document.createElement('option');
    option.textContent = `${i}`;
    option.value = i;
    newTaskPriority.appendChild(option);
  }

  // Confirmation button
  const acceptBtn = document.createElement('button');
  acceptBtn.classList.add('new-task__accept-btn');
  acceptBtn.setAttribute('type', 'button');
  acceptBtn.textContent = 'Accept';
  acceptBtn.addEventListener('click', addNewTask);

  // Cancel button
  const cancelBtn = document.createElement('button');
  cancelBtn.classList.add('new-task__cancel-btn');
  cancelBtn.setAttribute('type', 'button');
  cancelBtn.textContent = 'Cancel';
  cancelBtn.addEventListener('click', closeNewTask);

  newTask.appendChild(newTaskTitle);
  newTask.appendChild(newTaskDescription);
  newTask.appendChild(newTaskDate);
  newTask.appendChild(newTaskPriority);
  newTask.appendChild(acceptBtn);
  newTask.appendChild(cancelBtn);

  taskView.insertBefore(newTask, taskList);
};

// Event listeners
const addTaskBtn = document.querySelector('.tasks__add-task-btn');
addTaskBtn.addEventListener('click', displayNewTask);

export { updateTasks };
