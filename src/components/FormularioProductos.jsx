import React, { useState } from 'react'
import { supabase } from '../supabase/supabase';

const FormularioProductos = () => {

    const [nombre, setNombre]=useState("");
    const [descripcion, setDescripcion]=useState("");

    const hanledSubmit = async (e)=>{
        e.preventDefault()
        try {
            const {data,error}=await supabase
                .from('productos')
                .insert([{nombre,descripcion}]);
            
            if(error){
                console.error('error al insertar datos',error);
            }else{
                console.log('Datos insertados correctamente:',data)
                setNombre(" ");
                setDescripcion(" ");
            }



        } catch (err) {
            
            console.error(err,'error al insertar datos');
           
        }
    }
  return (
    <form onSubmit={hanledSubmit}>
        <h1>Registro de nuevos Productos</h1>
        <input type="text" onChange={(e)=>{setNombre(e.target.value)}}/>
        <input type="text" onChange={(e)=>{setDescripcion(e.target.value)}}/>
        <button>Guardar</button>

    </form>
  )
}

export default FormularioProductos