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
projects.displayProjList(state);
tasks.initTasks(state);
