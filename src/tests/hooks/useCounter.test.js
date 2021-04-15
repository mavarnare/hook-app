import { renderHook, act } from '@testing-library/react-hooks'
import { useCounter } from '../../hooks/useCounter';

describe('Pruebas en useCounter', () => {
    test('debe retornar valores por defecto', () => {
        const { result } = renderHook( () => useCounter() );
        
        expect( result.current.counter ).toBe(10);
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.decrement ).toBe('function');
        expect( typeof result.current.reset ).toBe('function');
    })
    
    test('de retornar el counter en 100', () => {
        const { result } = renderHook( () => useCounter(100) );
        
        expect( result.current.counter ).toBe(100);
    })

    test('debe increment el counter en 1', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { increment } = result.current;

        act( () => {
            increment();
            increment();
        });

        const { counter } = result.current;
        expect(counter).toBe(102);
    })

    test('debe decrementar el counter en 1', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { decrement } = result.current;

        act( () => {
            decrement();
        });

        const { counter } = result.current;
        expect(counter).toBe(99);
    })

    test('debe reiniciar el counter al valor inicial', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { decrement, reset } = result.current;

        act( () => {
            decrement();
            decrement();
            reset();
        });

        const { counter } = result.current;
        expect(counter).toBe(100);
    })
    
});
