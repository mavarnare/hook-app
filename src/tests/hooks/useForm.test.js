import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('Pruebas en useForm', () => {
    const initialForm = {
        name: 'Mavar',
        email: 'mavarnare@gmail.com',
    };

    test('debe regresar un formulario por defecto', () => {
        const { result } = renderHook(() => useForm());
        const [ values, handleInputChange, reset ] = result.current;

        const emptyObject = {};

        expect(values).toEqual(emptyObject);
        expect(typeof handleInputChange).toBe('function');
        expect(reset).toBeInstanceOf(Function);
    });

    test('debe inicializar el valor del hook con el estado inicial', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [ values ] = result.current;

        expect(values).toEqual(initialForm);
    });

    test('debe cambiar el valor del formulario (cambiar name)', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [ values, handleInputChange ] = result.current;
        const newName = 'a';

        expect(values.name).toBe(initialForm.name);

        const event = { target: { name: 'name', value: newName } };
        act(() => handleInputChange(event));

        const [ { name: changedName } ] = result.current;
        expect(changedName).toBe(newName);
    });

    test('debe restablecer el formulario con RESET', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [ values, handleInputChange, reset ] = result.current;
        
        expect(values).toEqual(initialForm);

        const newName = 'Alfonso';
        const event = { target: { name: 'name', value: newName } };
        act(() => handleInputChange(event));

        const [ changedForm ] = result.current;
        expect(changedForm).not.toEqual(initialForm);
        expect(changedForm).toEqual({ ...initialForm, name: newName});

        act(() => reset());
        const [ resetForm ] = result.current;
        expect(resetForm).toEqual(initialForm);
    });
});
