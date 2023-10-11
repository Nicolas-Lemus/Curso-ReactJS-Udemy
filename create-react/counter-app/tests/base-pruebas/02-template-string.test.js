import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Pruevas en 02-template-string', () => {

  test('getSaludo debe de retornar "Hola Fernando"', () => {
    
    const name = 'Fernando';
    const mensaje = getSaludo( name ); 

    expect( mensaje ).toBe(`Hola ${ name }`)
  })
  
})
