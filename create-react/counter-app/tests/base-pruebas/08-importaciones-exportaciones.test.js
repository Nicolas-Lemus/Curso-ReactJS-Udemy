import {getHeroeById, getHeroesByOwner} from "../../src/base-pruebas/08-imp-exp"

 describe('pruebas en 8-importaciones',()=>{
    test ('getHeroeById debde de retornar un heroe por ID',()=>{


        const id = 1;
        const hero = getHeroeById(id);
        
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

    })


    test ('getHeroeById debde de retornar undefined si no existe el id',()=>{


        const id = 100;
        const hero = getHeroeById(id);
        
        expect(hero).toBeFalsy();

    })

    test('getHeroesByOwner debe de regresar heroes de DC', () => {
      const owner = 'DC';
      const heroes = getHeroesByOwner ( owner);

      expect(heroes.length).toBe (3);
      
      expect(heroes).toEqual([
        { id: 1, name: 'Batman', owner: 'DC' },
        { id: 3, name: 'Superman', owner: 'DC' },
        { id: 4, name: 'Flash', owner: 'DC' }
      ]);
    })
    
})