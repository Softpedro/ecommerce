import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../../../constants/env";
import { token } from "../../../../helpers/auth";
import Loader from "../../../atoms/Loader";

const Form = () => {
  const nav = useNavigate();
  const params = useParams();
  let prm = params.id

  const [product, setProduct] = useState();
  // const [error, setError] = useState();
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    if(params?.id !== undefined){
      setLoading(true)
      axios
      .get(`${API_URL}/public/products/${prm}`)
      .then((resp) => {
        setProduct(resp.data.data)
      })
      .catch(error => {
        console.log('error')
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      product_name: e.target.productName.value,
      price: Number(e.target.price.value),
      images: [e.target.image.value],
      description: e.target.description.value,
      features: {
        color: e.target.color.value,
      }
    }
    if (!params.id) {
      axios
        .post(`${API_URL}/admin/products`, body, {
          headers: {
            Authorization: `Bearer ${token()}`,
          },
        })
        .then(() => {
          nav("/admin/productos")
        })
        .catch((err) => setError(err))
    } else {
      axios
        .put(`${API_URL}/admin/products/${params.id}`, body, {
          headers: {
            Authorization: `Bearer ${token()}`,
          },
        })
        .then(() => {
          nav("/admin/productos")
        })
        .catch((err) => setError(err))
    }
  }
  if(loading) return <Loader />
  return (
    <div className="max-w-200 m-auto mt-10 px-4">
      <h1 className="text-3xl font-medium leading-6 text-gray-900">
        {`${params.id ? "Editar" : "Crear"}`} Producto
        </h1>
      <form onSubmit={ handleSubmit }>
        <div className="col-span-6 sm:col-span-3 mt-4">
          <label htmlFor="product_name" className="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            name="productName"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue={product?.product_name}
            id="product_name" />
        </div>

        <div className="col-span-6 sm:col-span-3 mt-4">
          <label htmlFor="lbl_price" className="block text-sm font-medium text-gray-700">Precio</label>
          <input
            type="number"
            name="price"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue={product?.price}
            id="lbl_price" />
        </div>

        <div className="col-span-6 sm:col-span-3 mt-4">
          <label htmlFor="lbl_image" className="block text-sm font-medium text-gray-700">Imagen</label>
          <input
            type="url"
            name="image"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue={product?.images[0]}
            id="lbl_image" />
        </div>

        <div className="col-span-6 sm:col-span-3 mt-4">
          <label htmlFor="lbl_description" className="block text-sm font-medium text-gray-700">Descripcion</label>
          <textarea
            name="description"
            rows="10"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
            defaultValue={product?.description}
            id="lbl_description"></textarea>
        </div>
        <div className="col-span-6 sm:col-span-3 mt-4">
          <label htmlFor="lbl_color" className="block text-sm font-medium text-gray-700">Color</label>
          <input
            type="text"
            name="color"
            defaultValue={product?.features.color}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lbl_color"
          />
        </div>
        <div className="col-span-6 sm:col-span-3 mt-10">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >Guardar</button>
        </div>
      </form>
    </div>
  )
}

export default Form;