import './main-content.css';
import Project from '../projects/projects';
import Todo from '../todos/todos';

console.log('Creating new project and adding todos...');
const todo = Todo('Todo #1', 'This is Todo #1', '2022-07-01', 1);
const project = Project();
project.addTodo(todo);
project.addTodo(Todo('Todo #2', 'This is Todo #2', '2022-07-01', 2));
project.getTodos().forEach((td) => console.log(td.getInfo()));

console.log('Removing first todo...');
project.removeTodo(todo);
project.getTodos().forEach((td) => console.log(td.getInfo()));
