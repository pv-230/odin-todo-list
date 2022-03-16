import { Todo, Project } from './models';

const todo = Todo('Test', 'Test', '2022-03-25', 1);
console.log(
  `Title: ${todo.getTitle()}\n` +
    `Description: ${todo.getDescription()}\n` +
    `Due date: ${todo.getDueDate()}\n` +
    `Priority: ${todo.getPriorty()}\n`
);

const project = Project();
console.log(
  `Title: ${project.getTitle()}\n` +
    `Description: ${project.getDescription()}\n`
);

project.addTodo(todo);
project.addTodo(Todo('2', '2', '2022-03-18', 2));

project.removeTodo(todo);

project.getTodos().forEach((td) => console.log(td.getTitle()));
