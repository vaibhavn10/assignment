import { Link } from "react-router-dom";
import notFound from "../assets/image-not-available.png";
function Card({ product, idx }) {
  return (
    <Link to={`/product/${product._id}`}
      className="w-full bg-white border border-gray-200 rounded-sm shadow-md overflow-hidden"
      key={idx}
    >
      <img
        src={product.image_url ? product.image_url : notFound}
        alt="Product Image"
        className="w-full h-64 object-contain object-center p-4"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {product.product_name_ro ||
            product.product_name ||
            product.product_name_en ||
            product.product_name_de}
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          <strong>Category:</strong>{" "}
          {product.categories && product.categories.length > 70
            ? product.categories.slice(0, 80) + " ..."
            : product.categories[80] + "."}
        </p>
        <div className="text-gray-600 text-sm mt-2">
          {product.ingredients_tags && product.ingredients_tags.length > 0 && (
            <div className="">
              <strong>Ingredients: </strong>
              {product.ingredients_tags.slice(0, 5).map((tag, idx) => {
                let l = product.ingredients_tags.slice(0, 5).length;
                return idx == l-1 ? tag.slice(3) + "." : tag.slice(3) + ", ";
              })}
            </div>
          )}
        </div>
        <p className="text-gray-600 text-sm mt-2">
          <strong>Nutrition Grade: </strong>
          <span className="text-green-500 font-bold">{product.nutrition_grades.toUpperCase()}</span>
        </p>
      </div>
    </Link>
  );
}

export default Card;
