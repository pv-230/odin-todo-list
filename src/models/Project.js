/**
 * Represents a project object.
 * @param {string} t Title
 * @param {string} d Description
 * @returns Object containing public functions
 */
const Project = (t, d) => {
  let title = typeof t === 'string' ? t : 'Default';
  let description = typeof t === 'string' ? d : 'This is the default project.';
  const tasks = [];

  // Getters
  const getTitle = () => title;
  const getDescription = () => description;
  const getTasks = () => [...tasks];
  const getInfo = () => `Title: ${title}\nDescription: ${description}\n`;

  // Setters
  const setTitle = (newTitle) => (title = newTitle);
  const setDescription = (newDescription) => (description = newDescription);

  // Adds a task object to the list.
  const addTask = (taskItem) => tasks.push(taskItem);

  // Removes a task object from the list.
  const removeTask = (index) => {
    tasks.splice(index, 1);
  };

  return {
    getTitle,
    getDescription,
    getTasks,
    getInfo,
    setTitle,
    setDescription,
    addTask,
    removeTask,
  };
};

export default Project;
