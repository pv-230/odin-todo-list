import './reset.css';
import './main-content.css';
import * as projects from '../projects/projects';
import '../todos/todos';

const loadContent = () => {
  projects.displayProjList();
};

export { loadContent };
