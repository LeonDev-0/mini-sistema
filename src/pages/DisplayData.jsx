import { useState, useEffect } from 'react';
import { supabase } from '../supabase/supabase';
import EditData from './EditData';

const DisplayData = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from('productos').select();

        if (error) {
          console.error('Error al obtener datos:', error);
        } else {
          setProductos(data);
        }
      } catch (err) {
        console.error('Error al obtener datos:', err);
      }
    };

    fetchData();
  }, []);

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

  const handleDelete = async(id)=>{
    try {
        const {data,error} = await supabase.from('productos').delete().eq('id',id);
        
        if(error){
            console.error('error al eliminar datos:',error);
        }else{
            console.log('Datos eliminados correctamente:',data);
            handleUpdate();
        }

    } catch (err) {
        console.error('error al eliminar datos:',err);
        
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
            <EditData user={prod} onUpdate={handleUpdate}/>
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