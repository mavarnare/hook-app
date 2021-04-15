import { todoReducer } from "../../../components/08-useReducer/todoReducer";

const demoTodoList = [{
    id: 1,
    desc: 'Aprender React',
    done: false,
}, {
    id: 2,
    desc: 'Aprender Mongo',
    done: false,
}];

describe('Pruebas de la función todoReducer', () => {
    test('debe ser una función', () => {
        expect( todoReducer ).toBeInstanceOf(Function);
    });

    test('debe retornar el estado por defecto', () => {
        const state = todoReducer(demoTodoList, {}); 
        expect( state ).toEqual(demoTodoList);
    });

    test('debe añadir un todo', () => {
        const newTodo = {
            id: 3,
            desc: 'Aprender Node',
            done: false,
        };
        const action = {
            type: 'add',
            payload: newTodo,
        };
        const result = todoReducer(demoTodoList, action);
        expect( result.length ).toBe(demoTodoList.length + 1);
        expect( result ).toEqual([ ...demoTodoList, newTodo ]);
    });

    test('debe eliminar un todo', () => {
        const targetTodoId = 1;
        const action = {
            type: 'delete',
            payload: targetTodoId,
        };
        const result = todoReducer(demoTodoList, action);
        const expectedState = demoTodoList.filter(todo => todo.id !== targetTodoId);
        expect( result.length ).toBe(demoTodoList.length - 1);
        expect( result ).toEqual(expectedState);
    });

    test('debe cambiar el done del todo indicado', () => {
        const targetTodoId = 1;
        const action = {
            type: 'toggle',
            payload: targetTodoId,
        };
        const allTodosPending = demoTodoList.every(todo => todo.done === false);
        expect(allTodosPending).toBe(true);

        const result = todoReducer(demoTodoList, action);
        const doneTodo = result.find(todo => todo.id === targetTodoId);
        expect( doneTodo.done ).toBe(true);

        const restOfTodosPending = result.filter(todo => todo.id !== targetTodoId).every(todo => todo.done === false);
        expect( restOfTodosPending ).toBe(true);
    });
});
