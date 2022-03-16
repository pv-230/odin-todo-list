/**
 * Represents a todo object.
 * @param {string} t
 * @param {string} d
 * @param {string} dd
 * @param {number} p
 * @returns Public API
 */
const Todo = (t, d, dd, p) => {
  let title = t;
  let description = d;
  let dueDate = dd;
  let priority = p;

  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriorty = () => priority;

  const setTitle = (newTitle) => (title = newTitle);
  const setDescription = (newDescription) => (description = newDescription);
  const setDueDate = (newDueDate) => (dueDate = newDueDate);
  const setPriority = (newPriority) => (priority = newPriority);

  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriorty,
    setTitle,
    setDescription,
    setDueDate,
    setPriority,
  };
};

/**
 * Represents a project object.
 * @param {string} t
 * @param {string} d
 * @returns Public API
 */
const Project = (t, d) => {
  let title = typeof t === 'string' ? t : 'Default';
  let description = typeof t === 'string' ? d : 'This is the default project.';
  const todos = [];

  const getTitle = () => title;
  const getDescription = () => description;
  const getTodos = () => [...todos];

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
    setTitle,
    setDescription,
    addTodo,
    removeTodo,
  };
};

export { Todo, Project };
