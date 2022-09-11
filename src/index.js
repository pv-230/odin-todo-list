import './index.html';
import './reset.css';
import './index.css';
import * as projects from './components/projects/projects';
import * as tasks from './components/tasks/tasks';
import Project from './models/Project';

const state = {
  projArr: [Project()], // Stores all projects
  currentProj: 0, // Currently selected project by index
};

const getCurrentProj = () => state.projArr[state.currentProj];

projects.displayProjList(state);
tasks.initTasks(state);

export { getCurrentProj };
