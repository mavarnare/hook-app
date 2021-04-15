import { act } from "@testing-library/react";
import { shallow } from "enzyme";
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";

const handleAddTodo = jest.fn();

describe('Pruebas de <TodoAdd />', () => {
    const wrapper = shallow(
        <TodoAdd
            handleAddTodo={ handleAddTodo }
        />
    );

    test('debe renderizar correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    test('no debe llamar a handleAddTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} });
        expect( handleAddTodo ).toHaveBeenCalledTimes(0);
    })
    test('debe llamar la función handleAddTodo', () => {
        const input = wrapper.find('input');
        const value = 'Todo description for test';
        const event = {
            target: {
                name: 'description',
                value,
            },
            preventDefault: () => {},
        };

        act(() => {
            input.simulate('change', event);
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit(event);

        expect( handleAddTodo ).toHaveBeenCalledTimes(1);
        expect( handleAddTodo ).toHaveBeenCalledWith( expect.any(Object) );
        expect( handleAddTodo ).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false,
        });
        expect( wrapper.find('input').prop('value') ).toBe('');
    });
    
});
