import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabase";
import { useNavigate } from "react-router-dom";
import DisplayData from "./DisplayData";
import FormularioProductos from "../components/FormularioProductos";

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserSession = async () => {
      try {
        const session = await supabase.auth.getSession();
        if (!session.data.session) {
          navigate("/login");
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error al obtener la sesión del usuario:", error.message);
        navigate("/login");
      }
    };

    getUserSession();
  }, [navigate]);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <FormularioProductos />
      <DisplayData />
      <button onClick={() => supabase.auth.signOut()}>Cerrar sesión</button>
    </div>
  );
};

export default Home;

//comenteario agregado
