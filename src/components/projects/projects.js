import './projects.css';

const displayProjList = (projArr) => {
  const projectsList = document.querySelector('.projects__list');

  while (projectsList.firstChild) {
    projectsList.removeChild(projectsList.lastChild);
  }

  projArr.forEach((proj) => {
    const listItem = document.createElement('li');
    listItem.classList.add('projects__item');

    const listItemTitle = document.createElement('span');
    listItemTitle.classList.add('projects__item-title');
    listItemTitle.textContent = proj.getTitle();

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('projects__delete-btn');
    deleteBtn.textContent = 'X';

    listItem.appendChild(listItemTitle);
    listItem.appendChild(deleteBtn);
    projectsList.appendChild(listItem);
  });
};

export { displayProjList };
