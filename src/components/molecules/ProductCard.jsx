import { Link } from "react-router-dom"
import { formatPrice } from "../../helpers/number";


const ProductCard = ({ product }) => {
  const { images, product_name, id, price, description } = product;

  return (
    <article className="border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
      <div className="mb-5 rounded-lg overflow-hidden">
        <Link to={`productos/${id}`}>
          <img
            src={images[0]}
            alt={product_name}
            className="align-middle h-40 w-full object-cover" />
        </Link>
      </div>
      <div className="mb-6">
        <Link to={`productos/${id}`}>
          <h3 className="text-xl font-semibold tracking-light text-gray-900 mb-2">
            { product_name }
          </h3>
        </Link>
        <p className="text-gray-500 line-clamp-2">{ description }</p>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold text-gray-900">
          {formatPrice(price)}
        </span>
      </div>
    </article>
  )
}

export default ProductCard