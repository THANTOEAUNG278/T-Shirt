import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Products = () => {
  const {id} = useParams();
  const [product,setProduct] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    const getProducts =async()=>{
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`)
      setProduct(await response.json());
      setLoading(false)
    }
    getProducts();
  },[input]);
  return (
    <div>
      {loading ? <Loading/>: <ShowProduct/>}
    </div>
  )
}
export default Products;

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      Loading...
    </div>
  );
};