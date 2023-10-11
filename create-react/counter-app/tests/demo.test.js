describe('Pruebas en <Pruebas/>', () => {
    test('Esta prueba no debe de fallar',()=>{
    
        // 1. inicializacion
        const mensaje1='hola mundo';
        // 2. estimulo
        const mensaje2= mensaje1.trim();
        //3. verificacion
        expect( mensaje1 ).toBe(mensaje2)
        })
})

