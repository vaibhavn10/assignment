import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import notFound from "../assets/image-not-available.png";

function Details({}) {
    const {pid} = useParams();
    const navigate=useNavigate();
    const [product, setProduct] = useState([]);
    const fetchData = async() =>{
      const url = `https://world.openfoodfacts.org/api/v0/product/${pid}.json`
      const res = await fetch(url);
      const data = await res.json();
      setProduct(data.product)
    }
    useEffect(() => {
      fetchData()
    }, [])
    
  return (
    <div className="flex flex-col px-4 md:px-16 py-4 relative">
      <div className='flex items-center gap-3 text-sm mb-10 md:mb-4'>
        <button className='scale-[80%] p-3 pr-2 bg-red-500 text-white flex items-center justify-center hover:bg-red-600 rounded-md duration-200' onClick={()=>{
          navigate("/")
        }}><i className="fa-solid fa-chevron-left h-4 w-4"></i></button>
        Go back
      </div>
      <img
        src={product.image_url ? product.image_url : notFound}
        alt={product.image_url ? product.image_url : "Product Image"}
        className="w-full max-h-96 object-contain mb-4"
      />
      <h1 className="text-2xl font-bold my-3 text-red-500">{product.brands || "..."}</h1>
      <p className="text-gray-700 mb-4">
        <strong>Category:</strong> {product.categories || "Unknown"}
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Ingredients:</strong> {product.ingredients_tags || "Not available"}
      </p>
      <h2 className="text-xl font-semibold mb-2">Nutritional Values</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Energy: {product.nutriments?.energy || "N/A"}</li>
        <li>Fat: {product.nutriments?.fat || "N/A"}</li>
        <li>Carbohydrates: {product.nutriments?.carbohydrates || "N/A"}</li>
        <li>Proteins: {product.nutriments?.proteins || "N/A"}</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Labels</h2>
      <p className="text-gray-600">{product.labels || "No labels available"}</p>
    </div>
  )
}

export default Details
