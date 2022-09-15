import './index.html';
import './reset.css';
import './index.css';
import * as projects from './components/projects/projects';
import * as tasks from './components/tasks/tasks';
import Project from './models/Project';
import Task from './models/Task';

const state = {
  projArr: [Project()], // Stores all projects
  currentProj: 0, // Currently selected project by index
  getCurrentProj: () => state.projArr[state.currentProj],
};

// Temp
state
  .getCurrentProj()
  .addTask(Task('Test Title', 'Test Description', '2022-09-22', 1));

// Setup the display
projects.initProjects(state);
tasks.initTasks(state);

// Event listener for adding new projects
const addProjectBtn = document.querySelector('.projects__add-btn');
addProjectBtn.addEventListener('click', () => {
  const newProjectTitle = document.querySelector(
    '.projects__new-item-input'
  ).value;

  console.log(newProjectTitle);

  if (newProjectTitle) {
    state.projArr.push(Project(newProjectTitle, 'No description.'));
    projects.initProjects(state);
    tasks.initTasks(state);
  }
});
