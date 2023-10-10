import { useState } from 'react';
import {PropTypes} from 'prop-types';





export const CounterApp = ({value}) => {


    const [valor,setValor]=useState(value);

    const  hacerClickSuma = () => {
        setValor ( valor + 1)
    };
    const hacerClickResta = () => {
        if(valor > 1){
            setValor (valor - 1 )
        }
    };
    const hacerClickReset = ()=>{
        setValor(value)
    };


    return (

        <>
            <h1>CounterApp</h1>
            <h2> Resulatado <br/>
                { valor }
            </h2>

            <button onClick={ hacerClickSuma } > 
                Sumar + 1
            </button>
            <button onClick={ hacerClickResta } > 
                Restar - 1
            </button>
            <button onClick={ hacerClickReset } > 
                Reset
            </button>
        </>
    )
    }
    
CounterApp.propTypes={
    value:PropTypes.number.isRequiered
}
