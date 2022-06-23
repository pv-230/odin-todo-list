import './reset.css';
import * as mainContent from './components/main-content/main-content';
import * as projects from './components/projects/projects';
import * as tasks from './components/tasks/tasks';
import Project from './models/Project';

const state = {
  projArr: [Project()], // Stores all projects
  currentProj: 0, // Currently selected project by index
};

const addProject = () => {
  state.projArr.push(Project());
  projects.displayProjList(state.projArr);
};

projects.displayProjList(state.projArr);
tasks.displayTaskList(state.projArr[state.currentProj]);
