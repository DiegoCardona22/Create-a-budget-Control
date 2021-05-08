import Error from './Error';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {
    
    const [cantidad, guardarCantidad] = useState(0)
    const [error, guardarError] = useState(false)
    
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value))
    }

    const agregarPresupuesto = e => {
        e.preventDefault();
        
        if (cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }
    return(
        <>
            <h2>Coloca tu presupuesto</h2>
            { error ?  <Error mensaje='El presupuesto es incorrecto'/> : null}
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    className='u-full-width'
                    onChange={definirPresupuesto}
                    placeholder='Coloca tu presupuesto'
                    type='number'
                />
                <input
                    className='button-primary u-full-width'
                    type='submit'
                    value='Definir presupuesto'
                />
            </form>
        </>
    );
};

Pregunta.propTypes = {
    actualizarPregunta: PropTypes.func.isRequired,
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired
};

export default Pregunta;