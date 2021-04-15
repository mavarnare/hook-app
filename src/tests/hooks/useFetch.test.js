import { renderHook } from "@testing-library/react-hooks"
import { useFetch } from "../../hooks/useFetch"

describe('Pruebas en useFetch', () => {
    test('debe retornar la información por defecto', () => {
        const { result,  } = renderHook(() => useFetch(`https://www.breakingbadapi.com/api/quotes/1`));

        const { data, loading, error } = result.current;
        expect(data).toBeNull();
        expect(loading).toBe(true);
        expect(error).toBeNull();

    })

    test('debe tener la info deseada, loading false, error false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetch(`https://www.breakingbadapi.com/api/quotes/1`));
        await waitForNextUpdate({ timeout: 2000 });

        const { data, loading, error } = result.current;
        expect(data.length).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBeNull();
    });

    test('debe maenjar el error', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetch(`https://reqres.in/apid/users?page=2`));
        await waitForNextUpdate({ timeout: 5000 });

        const { data, loading, error } = result.current;
        expect(data).toBeNull();
        expect(loading).toBe(false);
        expect(error).toBe('No se pudo cargar la info');
    });
    
})