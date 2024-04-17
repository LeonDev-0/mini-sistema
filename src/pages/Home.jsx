import React, { useEffect } from 'react'
import { supabase } from '../supabase/supabase'
import { useNavigate } from 'react-router-dom'
import DisplayData from './DisplayData';
import FormularioProductos from '../components/FormularioProductos';

const Home = () => {
    const navigate = useNavigate();

    useEffect((e)=>{
        if(!supabase.auth.getUser()){
            navigate('/login');
        }
    },[navigate])
  return (
    <div>
        <FormularioProductos/>
        <DisplayData/>
        {/* <button onClick={()=>{supabase.auth.signOut()}}> */}
            Cerrar session
        {/* </button> */}
    </div>
  )
}

export default Home