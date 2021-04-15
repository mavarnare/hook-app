import { shallow } from "enzyme";
import { TodoList } from "../../../components/08-useReducer/TodoList";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en <TodoList />', () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoList
            todos={ demoTodos }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
        />
    );
    test('debe renderizar correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('debe renderizar el número correcto de hijos', () => {
        expect( demoTodos.length ).toBe(wrapper.find(TodoListItem).length);
        expect( wrapper.find(TodoListItem).at(0).prop('handleDelete') ).toEqual( expect.any(Function) );
        expect( wrapper.find(TodoListItem).at(0).prop('handleToggle') ).toEqual( expect.any(Function) );
    });
    
});
