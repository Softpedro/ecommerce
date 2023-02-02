import useFetch from "../../hooks/useFetch";
import Loader from "../atoms/Loader";
import ProductCard from "../molecules/ProductCard";

const Products = () => {
  const { data, error, loading } = useFetch("public/products");
  if(loading) return <Loader />
  if(error) return <p>{error?.message}</p>
  return (
    <section className="container py-16 max-w-200 m-auto px-4">
      <h1 className="text-3xl mb-6">Explora nuestro productos</h1>
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data?.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Products;
