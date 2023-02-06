import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { API_URL } from "../../constants/env"
import { CartContext } from "../../context/CartContext"

const Product = () => {

  const {state, dispatch} = useContext(CartContext)
  const params = useParams()
  const [product, setProduct] = useState()

  useEffect(() => {
    axios
      .get(`${ API_URL }/public/products/${params.id}`)
      .then((resp) => {
        setProduct(resp.data.data)
      })
  }, [])

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    })
  }

  const removeFormCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product
    })
  }

  return (
    <div>
      <h1 className="text-3xl">Producto: {product?.product_name}</h1>
      <p>
        {JSON.stringify(product)}
      </p>
      {!state.cart.find((c) => c.id === product?.id) ? (
        <button
          className="bg-gradient"
          onClick={addToCart}
        >Agregar al carrito</button>
      ) : (
        <button
          className="bg-gradient"
          onClick={removeFormCart}
        >Quitar al carrito</button>
      )}
    </div>
  )
}

export default Product