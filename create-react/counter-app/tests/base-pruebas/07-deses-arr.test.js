
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('prueba a 07-deses-arr', () => {
  test('debe de retrornar un string y un numero', () => {
    

    const [letras, numeros] = retornaArreglo();
    expect( letras ).toBe( 'ABC' );
    expect( numeros).toBe( 123 )

    expect(typeof letras).toBe('string')
    expect (typeof numeros).toBe('number')
    


  })
  
})
