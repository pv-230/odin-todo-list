import './projects.css';
import * as tasks from '../tasks/tasks';
import Project from '../../models/Project';

const state = {
  projArr: [Project()], // Stores all projects starting with the default
  currentProj: 0, // Currently selected project by index
};

// HTML elements
const menuBtn = document.querySelector('.projects__menu-btn');
const projects = document.querySelector('.projects');
const menuGroup = document.querySelector('.projects__title-group');
const menuTitle = document.querySelector('.projects__menu-title');
const projectsInput = document.querySelector('.projects__new-item');
const projectsList = document.querySelector('.projects__list');
const projectInfo = document.querySelector('.tasks__project-info');
const addProjectBtn = document.querySelector('.projects__add-btn');
const projectTitle = document.querySelector('.tasks__project-title');
const editTitleBtn = document.querySelector('.tasks__edit-title-btn');
const projectDescrip = document.querySelector('.tasks__project-descrip');
const editDescripBtn = document.querySelector('.tasks__edit-descrip-btn');

/**
 * Checks to see if the user is editing project info.
 * @returns True if currently editing project info.
 */
const isEditing = () => {
  const saveTitleBtn = document.querySelector('.tasks__save-title-btn');
  const saveDescripBtn = document.querySelector('.tasks__save-descrip-btn');

  if (saveTitleBtn || saveDescripBtn) {
    return true;
  }

  return false;
};

/**
 * Displays all existing projects in the sidebar.
 */
const displayProjList = () => {
  while (projectsList.firstChild) {
    projectsList.removeChild(projectsList.lastChild);
  }

  // Adds all existing projects to the sidebar
  state.projArr.forEach((p, i) => {
    const listItem = document.createElement('li');
    listItem.classList.add('projects__item');
    listItem.setAttribute('data-index', i);

    // Event listener for selections
    listItem.addEventListener('click', (e) => {
      if (!isEditing()) {
        const dataIndex = Number(e.currentTarget.getAttribute('data-index'));
        state.currentProj = dataIndex;
        displayProjList();
        tasks.updateTasks(state);
      }
    });

    // Highlight selected project
    if (state.currentProj === i) {
      listItem.classList.add('projects__item_selected');
    }

    // Sets project title
    const listItemTitle = document.createElement('span');
    listItemTitle.classList.add('projects__item-title');
    listItemTitle.textContent = p.getTitle();
    listItem.appendChild(listItemTitle);

    // Shows project delete button if more than one project
    if (state.projArr.length > 1) {
      const deleteBtn = document.createElement('div');
      deleteBtn.classList.add('projects__delete-btn');
      deleteBtn.setAttribute('data-index', i);
      deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const dataIndex = Number(e.currentTarget.getAttribute('data-index'));
        state.projArr.splice(dataIndex, 1);
        state.currentProj = 0;
        displayProjList();
        tasks.updateTasks(state);
      });
      listItem.appendChild(deleteBtn);
    }

    projectsList.appendChild(listItem);
  });
};

/**
 * Event listener for adding new projects.
 */
addProjectBtn.addEventListener('click', () => {
  const newProjectTitle = document.querySelector(
    '.projects__new-item-input'
  ).value;

  if (newProjectTitle && !isEditing()) {
    document.querySelector('.projects__new-item-input').value = '';
    const newProject = Project(newProjectTitle, 'No description.');
    state.projArr.push(newProject);
    state.currentProj = state.projArr.length - 1;
    displayProjList();
    tasks.updateTasks(state);
  }
});

/**
 * Event listener for the menu button (show/hide projects).
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

/**
 * Event listener to edit project title.
 */
editTitleBtn.addEventListener('click', () => {
  if (!document.querySelector('.tasks__new-title-input')) {
    editDescripBtn.classList.add('hidden');

    const saveTitleBtn = document.createElement('button');
    saveTitleBtn.classList.add('tasks__save-title-btn');

    const newTitleInput = document.createElement('input');
    newTitleInput.classList.add('tasks__new-title-input');
    newTitleInput.setAttribute('type', 'text');
    newTitleInput.setAttribute('maxlength', '30');
    newTitleInput.value = state.projArr[state.currentProj].getTitle();

    saveTitleBtn.addEventListener('click', () => {
      state.projArr[state.currentProj].setTitle(newTitleInput.value);
      saveTitleBtn.replaceWith(editTitleBtn);
      newTitleInput.replaceWith(projectTitle);
      editDescripBtn.classList.remove('hidden');
      displayProjList();
      tasks.updateTasks(state);
    });

    editTitleBtn.replaceWith(saveTitleBtn);
    projectTitle.replaceWith(newTitleInput);
  }
});

/**
 * Event listener to edit project description.
 */
editDescripBtn.addEventListener('click', () => {
  if (!document.querySelector('.tasks__new-descrip-input')) {
    editTitleBtn.classList.add('hidden');

    const saveDescripBtn = document.createElement('button');
    saveDescripBtn.classList.add('tasks__save-descrip-btn');

    const newDescripInput = document.createElement('input');
    newDescripInput.classList.add('tasks__new-descrip-input');
    newDescripInput.setAttribute('type', 'text');
    newDescripInput.setAttribute('maxlength', '250');
    newDescripInput.value = state.projArr[state.currentProj].getDescription();

    saveDescripBtn.addEventListener('click', () => {
      state.projArr[state.currentProj].setDescription(newDescripInput.value);
      saveDescripBtn.replaceWith(editDescripBtn);
      newDescripInput.replaceWith(projectDescrip);
      editTitleBtn.classList.remove('hidden');
      displayProjList();
      tasks.updateTasks(state);
    });

    editDescripBtn.replaceWith(saveDescripBtn);
    projectDescrip.replaceWith(newDescripInput);
  }
});

// Initialize views
displayProjList();
tasks.updateTasks(state);
