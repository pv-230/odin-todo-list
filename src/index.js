import './index.html';
import './reset.css';
import './components/main-content/main-content';
import * as projects from './components/projects/projects';
import * as tasks from './components/tasks/tasks';
import Project from './models/Project';

const state = {
  projArr: [Project()], // Stores all projects
  currentProj: 0, // Currently selected project by index
};

projects.displayProjList(state);
tasks.displayProjectInfo(state);
tasks.displayTaskList(state);
