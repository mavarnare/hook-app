import React from 'react'
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';

describe('Pruebas en <HookApp />', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
    });
    
});
