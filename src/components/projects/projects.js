import './projects.css';

let state = null;

/**
 * Displays all existing projects in the sidebar.
 */
const displayProjList = () => {
  const projectsList = document.querySelector('.projects__list');

  while (projectsList.firstChild) {
    projectsList.removeChild(projectsList.lastChild);
  }

  // Adds all existing projects to the sidebar
  state.projArr.forEach((proj, i) => {
    const listItem = document.createElement('li');
    listItem.classList.add('projects__item');

    // Highlight selected project
    if (i === state.currentProj) {
      listItem.classList.add('projects__item_selected');
    }

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
 * Initializes the project view.
 * @param {Object} s App state.
 */
const initProjects = (s) => {
  state = s;
  displayProjList();
};

/**
 * Event listener for the menu button (show/hide projects)
 */
const menuBtn = document.querySelector('.projects__menu-btn');
const projects = document.querySelector('.projects');
const menuGroup = document.querySelector('.projects__title-group');
const menuTitle = document.querySelector('.projects__menu-title');
const projectsInput = document.querySelector('.projects__new-item');
const projectsList = document.querySelector('.projects__list');
const projectInfo = document.querySelector('.tasks__project-info');
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

export { initProjects };
