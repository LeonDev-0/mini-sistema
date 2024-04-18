import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/supabase";

export const ProductsContext = createContext();

export const useProducts = () => {
    const contextProducts = useContext(ProductsContext)
    return contextProducts;
}

export const ProductsProvider = ({ children }) => {

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

    const handleDelete = async(id)=>{
        try {
            const {data,error} = await supabase.from('productos').delete().eq('id',id);
            
            if(error){
                console.error('error al eliminar datos:',error);
            }else{
                console.log('Datos eliminados correctamente:',data);
            }
    
        } catch (err) {
            console.error('error al eliminar datos:',err);
            
        }
      };

    return (
        <ProductsContext.Provider value={{productos,handleDelete}}>
            {children}
        </ProductsContext.Provider>
    )
}
