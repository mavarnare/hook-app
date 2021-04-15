import React from 'react'
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos, handleToggle, handleDelete }) => {
    return (
        <ul>
            {
                todos.map( (todo, index) => (
                    <TodoListItem
                        key={ todo.id }
                        todo={ todo }
                        index={ index }
                        handleToggle={ handleToggle }
                        handleDelete={ handleDelete }
                    />
                ))
            }
        </ul>
    )
}

export default TodoList;
