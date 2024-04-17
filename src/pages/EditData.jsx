import { useState } from 'react';
import { supabase } from '../supabase/supabase';

const EditData = ({ user, onUpdate }) => {
  const [nombre, setNombre] = useState(user.nombre);
  const [descripcion, setDescripcion] = useState(user.descripcion);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase
        .from('productos')
        .update({ nombre, descripcion })
        .eq('id', user.id);

      if (error) {
        console.error('Error al actualizar datos:', error);
      } else {
        console.log('Datos actualizados correctamente:', data);
        onUpdate(); // Llama a la función onUpdate para actualizar la lista de usuarios
      }
    } catch (err) {
      console.error('Error al actualizar datos:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="descripcion"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <button type="submit">Actualizar</button>
    </form>
  );
};

export default EditData;