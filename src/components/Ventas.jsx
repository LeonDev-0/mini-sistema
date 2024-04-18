import { useProducts } from "../context/ProductsContext";
const Ventas = () => {
  const obj = useProducts();
console.log(obj)

  return (
    <div>{obj.saludo}</div>
  )
}

export default Ventas