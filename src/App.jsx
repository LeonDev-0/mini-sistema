import Login from "./pages/Login"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import { Route, Routes, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { supabase } from "./supabase/supabase"
import Ventas from "./components/Ventas"

function App() {
    const navigate = useNavigate();

  useEffect(()=>{
    supabase.auth.onAuthStateChange((event,session)=>{
      if(!session){
        navigate('/login')
      }
     
    })
  },[])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="login" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/ventas" element={<Ventas/>}/>
        
      </Routes>
    </div>
  )
}

export default App
