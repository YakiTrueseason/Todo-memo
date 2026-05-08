import React from 'react'
import Task from './Task';

const TodoList = ({ todos, toggleTodo }) => {
    return todos.map((todo) => <Task todo={todo} key={todo.id} toggleTodo={toggleTodo} />);
};

export default TodoList
