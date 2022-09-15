import './projects.css';
import * as tasks from '../tasks/tasks';
import Project from '../../models/Project';
import Task from '../../models/Task';

const state = {
  projArr: [Project()], // Stores all projects
  currentProj: 0, // Currently selected project by index
  getCurrentProj: () => state.projArr[state.currentProj],
};

// Common nodes
const menuBtn = document.querySelector('.projects__menu-btn');
const projects = document.querySelector('.projects');
const menuGroup = document.querySelector('.projects__title-group');
const menuTitle = document.querySelector('.projects__menu-title');
const projectsInput = document.querySelector('.projects__new-item');
const projectsList = document.querySelector('.projects__list');
const projectInfo = document.querySelector('.tasks__project-info');
const addProjectBtn = document.querySelector('.projects__add-btn');

// Temp for testing
state
  .getCurrentProj()
  .addTask(Task('Test Title', 'Test Description', '2022-09-22', 1));

// Show tasks
tasks.updateTasks(state);

/**
 * Displays all existing projects in the sidebar.
 */
const displayProjList = () => {
  while (projectsList.firstChild) {
    projectsList.removeChild(projectsList.lastChild);
  }

  // Adds all existing projects to the sidebar
  state.projArr.forEach((proj, i) => {
    const listItem = document.createElement('li');
    listItem.classList.add('projects__item');
    listItem.setAttribute('data-index', i);

    // Highlight selected project
    if (i === state.currentProj) {
      listItem.classList.add('projects__item_selected');
    }

    // Event listener for selections
    listItem.addEventListener('click', (e) => {
      const index = Number(e.currentTarget.getAttribute('data-index'));
      state.currentProj = index;
      displayProjList();
      tasks.updateTasks(state);
    });

    const listItemTitle = document.createElement('span');
    listItemTitle.classList.add('projects__item-title');
    listItemTitle.textContent = proj.getTitle();

    const deleteBtn = document.createElement('div');
    deleteBtn.classList.add('projects__delete-btn');

    listItem.appendChild(listItemTitle);
    listItem.appendChild(deleteBtn);
    projectsList.appendChild(listItem);
  });
};

/**
 * Event listener for adding new projects
 */
addProjectBtn.addEventListener('click', () => {
  const newProjectTitle = document.querySelector(
    '.projects__new-item-input'
  ).value;

  document.querySelector('.projects__new-item-input').value = '';

  if (newProjectTitle) {
    state.projArr.push(Project(newProjectTitle, 'No description.'));
    state.currentProj = state.projArr.length - 1;
    tasks.updateTasks(state);
    displayProjList();
  }
});

/**
 * Event listener for the menu button (show/hide projects)
 */
menuBtn.addEventListener('click', () => {
  if (menuBtn.classList.contains('projects__menu-btn_open')) {
    menuBtn.classList.replace(
      'projects__menu-btn_open',
      'projects__menu-btn_closed'
    );
    projects.classList.add('projects_closed');
    projectInfo.style.padding = '20px 20px 20px 85px';
    menuGroup.classList.add('projects__title-group_closed');
    menuTitle.classList.add('hidden');
    projectsInput.classList.add('hidden');
    projectsList.classList.add('hidden');
  } else {
    menuBtn.classList.replace(
      'projects__menu-btn_closed',
      'projects__menu-btn_open'
    );
    projects.classList.remove('projects_closed');
    projectInfo.style.padding = '20px';
    menuGroup.classList.remove('projects__title-group_closed');
    menuTitle.classList.remove('hidden');
    projectsInput.classList.remove('hidden');
    projectsList.classList.remove('hidden');
  }
});

displayProjList();
