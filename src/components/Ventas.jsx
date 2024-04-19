import { useProducts } from "../context/ProductsContext";
import { useStoreProducts } from "../store/store";
import { shallow } from "zustand/shallow";

const Ventas = () => {
  const {productos} = useProducts();
  const {contador,title} = useStoreProducts((state)=>({
    contador:state.contador,
    title:state.title
  }),shallow)
  const {increment} = useStoreProducts();
  return (
    <div>
      <h1>{title}:{contador}</h1>
      <button
      onClick={()=>{increment(1)}}>incrementar</button>
    </div>
  )
}

export default Ventas