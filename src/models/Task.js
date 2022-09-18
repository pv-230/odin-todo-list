/**
 * Represents a todo object.
 * @param {string} t Title
 * @param {string} d Description
 * @param {string} dd Due date
 * @param {number} p Priority
 * @returns Object containing public functions
 */
const Task = (t, d, dd, p) => {
  let title = t;
  let description = d;
  let dueDate = dd;
  let priority = p;

  // Getters
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;

  // Setters
  const setTitle = (newTitle) => (title = newTitle);
  const setDescription = (newDescription) => (description = newDescription);
  const setDueDate = (newDueDate) => (dueDate = newDueDate);
  const setPriority = (newPriority) => (priority = newPriority);

  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    setTitle,
    setDescription,
    setDueDate,
    setPriority,
  };
};

export default Task;
