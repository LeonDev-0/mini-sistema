import { useState, useEffect, useContext } from 'react';
import { supabase } from '../supabase/supabase';
import EditData from './EditData';
import { useProducts } from '../context/ProductsContext';

const DisplayData = () => {
  const {productos,handleDelete} = useProducts();

  

  const handleUpdate = async()=>{
    try {
        const {data,error} = await supabase.from('productos').select();
        if(error){
            console.error('error al actualizar datos',error);
        }else{
            setProductos(data);
        }
        
    } catch (err) {
        console.error('error al actualizar datos',err)
        
    }

  };



  return (
    <div>
      <h2>Inventario</h2>
      <ul>
        {productos.map((prod) => (
          <li key={prod.id}>
            {prod.nombre} - {prod.descripcion}
            <div>
            {/* <EditData user={prod} onUpdate={handleUpdate}/> */}
            <button onClick={()=>handleDelete(prod.id)}>Eliminar</button>
            </div>
            <br />
            <br />

          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayData;