/* //import React from "react";
import { Fragment } from "react";
//Fragment realiza lo mismo quie las <> </> solas

    //fragment
const sumaEdades = (a,b) =>{
        return a + b;
    }

/* const newMensaje = {
   nombre :'Nicolas',
   apellido: 'Lemus'
}

export const FirsApp = () =>{

    
    return (
        <Fragment>
            <h2>{sumaEdades(10,18)}</h2>
            <p>voy por mas</p>
        </Fragment>
    //<> </> igual que fragment 
        /* <>
            <h2>hola soy nico</h2>
            <p>voy por mas</p>
        </>
    )
};
 */

import { PropTypes } from "prop-types";

export const FirsApp = ({title , edad}) => {


    
  return (
    <>
        <h1>{ title }</h1>
        <h2>{edad}</h2>
    </>
  )
}

FirsApp.propTypes = {
    edad:PropTypes.number.isRequiered,
    title:PropTypes.string.isRequiered
}
FirsApp.defaultProps ={
    edad:28,
    title:"no hay titulo"
}