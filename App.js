import ControlPresupuesto from './Components/ControlPresupuesto';
import Formulario from './Components/Formulario';
import Listado from './Components/Listado';
import Pregunta from './Components/Pregunta';
import React, { useState, useEffect } from 'react';

function App() {
  
  const [presupuesto, guardarPresupuesto] = useState(0)
  const [restante, guardarRestante] = useState(0)
  const [mostrarPregunta, actualizarPregunta] = useState(true)
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({})
  const [crearGasto, guardarCrearGasto] = useState(false)

  useEffect(() => {
    if(crearGasto){
      guardarGastos([
        ...gastos,
        gasto
      ])

      const presupuestoRestante = restante - gasto.cantidad
      guardarRestante(presupuestoRestante)
    }

    guardarCrearGasto(false)
  }, [gasto, crearGasto, gastos, restante]);

  
  return (
    <>
      <div className='container'>
        <header>
          <h1>Gasto semanal</h1>
          <div className='contenido-principal contenido'>
            {mostrarPregunta ? 
            ( 
              <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
              />
            )
              : 
            (
              <div className='row'>
                <div className='one-half column'>
                  <Formulario
                    guardarGasto={guardarGasto}
                    guardarCrearGasto={guardarCrearGasto}
                  />
                </div>
                <div className='one-half column'>
                  <Listado
                    gastos={gastos}
                  />
                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>
            )}
            
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
