import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';

import './style.css'
import { TodoAdd } from './TodoAdd';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos])

    const handleDelete = ( todoId ) => {
        if (!todoId) {
            return;
        }

        const action = {
            type: 'delete',
            payload: todoId,
        };

        dispatch( action );
    }

    const handleToggle = ( todoId ) => {
        if ( !todoId ) {
            return;
        }

        const action = {
            type: 'toggle',
            payload: todoId,
        }

        dispatch( action );
    }

    const handleAddTodo = ( newTodo ) => {
        dispatch({
            type: 'add',
            payload: newTodo,
        });
    }

    return (
        <div>
            <h1>TodoApp ( { todos.length } )</h1>
            <hr />

            <div className="row">

                <div className="col-7">
                <ul className="list-group list-group-flush">
                    <TodoList
                        todos={ todos }
                        handleToggle={ handleToggle }
                        handleDelete={ handleDelete }
                    />
                </ul>
                </div>

                <div className="col-5">
                    <TodoAdd
                        handleAddTodo={ handleAddTodo }
                    />
                </div>
            </div>
        </div>
    )
}
