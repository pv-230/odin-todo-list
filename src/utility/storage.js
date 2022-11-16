/**
 * Checks if localStorage is supported.
 * Source: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
 * @param {Storage} type
 * @returns true if localStorage is supported.
 */
const storageAvailable = (type) => {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
};

/**
 * Stores the current app state into localStorage.
 */
const storeState = (state) => {
  if (storageAvailable('localStorage')) {
    const stateJSON = {
      projArrJSON: [],
      currentProj: state.currentProj,
    };

    state.projArr.forEach((p) => {
      // New project object for JSON
      const projJSON = {
        title: p.getTitle(),
        description: p.getDescription(),
        taskArrJSON: [],
      };

      // Stringify each task for a project
      p.getTasks().forEach((t) => {
        const taskJSON = {
          title: t.getTitle(),
          description: t.getDescription(),
          dueDate: t.getDueDate(),
          priority: t.getPriority(),
        };
        projJSON.taskArrJSON.push(JSON.stringify(taskJSON));
      });

      stateJSON.projArrJSON.push(projJSON);
    });

    localStorage.setItem('state', JSON.stringify(stateJSON));
  }
};

export { storageAvailable, storeState };
