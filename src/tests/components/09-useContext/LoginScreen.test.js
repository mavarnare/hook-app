import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import { LoginScreen } from "../../../components/09-useContext/LoginScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('Pruebas en <LoginScreen />', () => {

    const user = {
        name: 'Mavarnare',
        email: 'mavarnare@gmail.com'
    };

    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{ user, setUser }}>
            <LoginScreen />
        </UserContext.Provider>
    );

    test('debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe ejecutar el setUser con el argumento esperado', () => {
        act(() => wrapper.find('button').prop('onClick')());
        expect( setUser ).toHaveBeenCalledTimes(1);
        expect( setUser ).toHaveBeenCalledWith({
            id: 654321,
            name: 'Mavarnare',
        });
    });
    
    
});
