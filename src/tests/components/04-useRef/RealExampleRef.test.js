import { shallow } from "enzyme";
import { act } from "@testing-library/react";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";

describe('Pruebas en <RealExampleRef />', () => {

    const wrapper = shallow(<RealExampleRef />);

    test('debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find(MultipleCustomHooks).exists() ).toBe(false);
    });

    test('debe mostrar el componente <MultipleCustomHooks />', () => {
        const button = wrapper.find('button');

        button.simulate('click');
        expect( wrapper.find(MultipleCustomHooks).exists() ).toBe(true);
    });
});
