import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
  test('getUser debe de retornar un objeto', () => {
    
    const testUser = {
        uid: 'ABC123',
        username: 'El_Papi1502'
    };

    const user = getUser();
    //toEqual o & toStrictEqua se usan para objetos ---no toBe IMPORTANTE!!!---

    /* expect(user).toEqual/(testUser); */
    expect(user).toStrictEqual/(testUser);

  })

  test('getUsuarioActivo debe de retornar un objeto',()=>{

    const name = 'Nicolas';

    const user = getUsuarioActivo( name );

    expect( user ).toStrictEqual({
        uid: 'ABC567', userName : name})
  })
  
})
