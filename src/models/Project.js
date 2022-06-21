/**
 * Represents a project object.
 * @param {string} t Title
 * @param {string} d Description
 * @returns Object containing public functions
 */
const Project = (t, d) => {
  let title = typeof t === 'string' ? t : 'Default';
  let description = typeof t === 'string' ? d : 'This is the default project.';
  const todos = [];

  // Getters
  const getTitle = () => title;
  const getDescription = () => description;
  const getTodos = () => [...todos];
  const getInfo = () => `Title: ${title}\nDescription: ${description}\n`;

  // Setters
  const setTitle = (newTitle) => (title = newTitle);
  const setDescription = (newDescription) => (description = newDescription);

  // Adds a todo object to the list.
  const addTodo = (todoItem) => todos.push(todoItem);

  // Removes a todo object from the list.
  const removeTodo = (todoItem) => {
    const tdIndex = todos.findIndex((td) => td === todoItem);

    if (tdIndex >= 0) {
      // Todo object was found in list
      todos.splice(tdIndex, 1);
    }
  };

  return {
    getTitle,
    getDescription,
    getTodos,
    getInfo,
    setTitle,
    setDescription,
    addTodo,
    removeTodo,
  };
};

export default Project;
