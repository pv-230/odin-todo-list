import './projects.css';

/**
 * Displays all existing projects in the sidebar.
 * @param {Object} state
 */
const displayProjList = (state) => {
  const projectsList = document.querySelector('.projects__list');

  while (projectsList.firstChild) {
    projectsList.removeChild(projectsList.lastChild);
  }

  // Adds an input to allow the user to add new projects
  const newItem = document.createElement('li');
  newItem.classList.add('projects__new-item');

  const newItemInput = document.createElement('input');
  newItemInput.classList.add('projects__new-item-input');
  newItemInput.placeholder = 'New Project';

  const addBtn = document.createElement('div');
  addBtn.classList.add('projects__add-btn');

  newItem.appendChild(newItemInput);
  newItem.appendChild(addBtn);
  projectsList.appendChild(newItem);

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
 * Event listener for the menu button (show/hide projects)
 */
const menuBtn = document.querySelector('.projects__menu-btn');
menuBtn.addEventListener('click', () => {
  if (menuBtn.classList.contains('projects__menu-btn_open')) {
    menuBtn.classList.replace(
      'projects__menu-btn_open',
      'projects__menu-btn_closed'
    );

    const projects = document.querySelector('.projects');
    projects.classList.add('projects_closed');

    const projectInfo = document.querySelector(
      '.tasks__project-info',
      HTMLElement
    );
    projectInfo.style.padding = '20px 20px 20px 85px';

    const menuGroup = document.querySelector('.projects__title-group');
    menuGroup.classList.add('projects__title-group_closed');

    const menuTitle = document.querySelector('.projects__menu-title');
    menuTitle.classList.add('hidden');

    const projectsList = document.querySelector('.projects__list');
    projectsList.classList.add('hidden');
  } else {
    menuBtn.classList.replace(
      'projects__menu-btn_closed',
      'projects__menu-btn_open'
    );

    const projects = document.querySelector('.projects');
    projects.classList.remove('projects_closed');

    const projectInfo = document.querySelector(
      '.tasks__project-info',
      HTMLElement
    );
    projectInfo.style.padding = '20px';

    const menuGroup = document.querySelector('.projects__title-group');
    menuGroup.classList.remove('projects__title-group_closed');

    const menuTitle = document.querySelector('.projects__menu-title');
    menuTitle.classList.remove('hidden');

    const projectsList = document.querySelector('.projects__list');
    projectsList.classList.remove('hidden');
  }
});

export { displayProjList };
