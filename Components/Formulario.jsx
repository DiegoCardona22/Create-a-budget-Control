import Error from './Error';
import PropTypes from 'prop-types';
import React, {useState} from 'react';
import shortid from 'shortid';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {
    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }
        guardarGasto(gasto);
        guardarCrearGasto(true);
        guardarNombre('');
        guardarCantidad(0);
    }
    return(
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agregar gastos aquí</h2>
            {error ? <Error mensaje='Ambos campos son obligatorios 
            o presupuesto es incorrecto'/> : null}
            <div className='campo'>
                <label>Nombre Gasto</label>
                <input
                    className='u-full-width'
                    onChange={e => guardarNombre(e.target.value)}
                    placeholder="Ej. Transporte"
                    type='text'
                    value={nombre}
                />
            </div>
            <div className='campo'>
                <label>Cantidad Gasto</label>
                <input
                    className='u-full-width'
                    onChange={e => guardarCantidad(parseInt(e.target.value))}
                    placeholder="Ej. 300"
                    type='number'
                    value={cantidad}
                />
            </div>
            <input
                className='button-primary u-full-width'
                type='submit'
                value='Agregar Gasto'
            />
        </form>
    );
};

Formulario.propTypes = {
    guardarCrearGasto: PropTypes.func.isRequired,
    guardarGasto: PropTypes.func.isRequired
};

export default Formulario;