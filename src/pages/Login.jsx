import React, { useEffect } from 'react'
import { useState } from 'react'
import { supabase } from '../supabase/supabase'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
        const result = await supabase.auth.signInWithOtp({email,
        })
        console.log(result)
        }catch(error){
       console.log(error) 
        }

    }

    useEffect(()=>{
        if(supabase.auth.getUser()){
            navigate('/')
        }
    },[navigate]);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='email'
                    name='email'
                    placeholder='tucorre@gmail.com' 
                    onChange={e=>setEmail(e.target.value)}
                    />
                <button>
                    Enviar
                </button>
            </form>
        </div>
    )
}

export default Login