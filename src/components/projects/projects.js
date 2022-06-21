import './projects.css';
import Project from '../../models/Project';

const state = {
  projArr: [], // Stores all projects
  currentProj: null, // Currently selected project by index
};

const displayProjList = () => {
  const projectsList = document.querySelector('.projects__list');

  while (projectsList.firstChild) {
    projectsList.removeChild(projectsList.lastChild);
  }

  state.projArr.forEach((proj) => {
    const listItem = document.createElement('div');
    listItem.classList.add('projects__item');
    listItem.textContent = proj.getTitle(); // TODO: Temp info display
    projectsList.appendChild(listItem);
  });
};

const addProject = () => {
  state.projArr.push(Project());
  displayProjList();
};

// Add project event
const addBtn = document.querySelector('.projects__add-btn');
addBtn.addEventListener('click', addProject);

export { displayProjList };
