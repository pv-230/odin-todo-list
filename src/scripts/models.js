/**
 * Represents a todo object.
 * @param {string} t Title
 * @param {string} d Description
 * @param {string} dd Due date
 * @param {number} p Priority
 * @returns Object containing public functions
 */
const Todo = (t, d, dd, p) => {
  let title = t;
  let description = d;
  let dueDate = dd;
  let priority = p;

  // Getters
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriorty = () => priority;
  const getInfo = () =>
    `Title: ${title}\n` +
    `Description: ${description}\n` +
    `Due date: ${dueDate}\n` +
    `Priority: ${priority}\n`;

  // Setters
  const setTitle = (newTitle) => (title = newTitle);
  const setDescription = (newDescription) => (description = newDescription);
  const setDueDate = (newDueDate) => (dueDate = newDueDate);
  const setPriority = (newPriority) => (priority = newPriority);

  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriorty,
    getInfo,
    setTitle,
    setDescription,
    setDueDate,
    setPriority,
  };
};

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

export { Todo, Project };
