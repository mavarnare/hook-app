import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

const handleToggle = jest.fn(() => {});
const handleDelete = jest.fn(() => {});

describe('Pruebas en <TodoListItem />', () => {
    
    const index = 0;
    const wrapper = shallow(
        <TodoListItem
            todo={ demoTodos[0] }
            index={ index }
            handleToggle={ handleToggle }
            handleDelete={ handleDelete }
        />
    );

    test('debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('debe llamar a la función de borrar', () => {
        const button = wrapper.find('button');
        button.simulate('click');

        expect( handleDelete ).toHaveBeenCalledWith<Number>(demoTodos[0].id);
    });
    
    test('debe llamar a la función de toggle', () => {
        const paragraph = wrapper.find('p');
        paragraph.simulate('click');

        expect( handleToggle ).toHaveBeenCalledWith<Number>(demoTodos[0].id);
    });
    
    test('debe mostrar el texto correctamente', () => {
        const paragraph = wrapper.find('p');
        expect( paragraph.text() ).toBe(`${index + 1}. ${demoTodos[0].desc}`);
    });
    
    test('debe tener la clase .complete si todo.done === true', () => {
        const wrapperUndoneTodo = shallow(
            <TodoListItem
                todo={ demoTodos[0] }
            />
        );
        const paragraphUndoneTodo = wrapperUndoneTodo.find('p');
        expect( paragraphUndoneTodo.hasClass('complete') ).toBe(false);

        demoTodos[0].done = true;

        const wrapperDoneTodo = shallow(
            <TodoListItem
                todo={ demoTodos[0] }
            />
        );
        const paragraphDoneTodo = wrapperDoneTodo.find('p');
        expect( paragraphDoneTodo.hasClass('complete') ).toBe(true);
    });
});
