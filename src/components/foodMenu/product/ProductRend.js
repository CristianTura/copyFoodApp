import React, {useState} from 'react'
import { connect } from "react-redux"
import './product.css'

const ProductRender = ({product, arrayCart, setArrayCart, productsCart, addProducts}) => {

  // -------Read the amont of the product----
  const [quantity, setQuantity] = useState(1)
  const getQuantity = e => {
    setQuantity(e.target.value)
  }

  // -------create object width data of product----
  let objectData = {
	"title": product.title, 
	"img": product.img,
	"id": product.id,
	"quantity": parseInt(quantity),
	"price": product.unPrice
  }

  // -------create object width data of product----
  const readDataProduct = e => {
    e.preventDefault()


      // -------filter and add amount to avoid repeated products----
      const exist = productsCart.find(x => x.id === objectData.id)
      if (exist) {
        let addAmount = productsCart.map(prod => {
          if(prod.id === objectData.id){
            prod.quantity += objectData.quantity
            return prod
          } else {return prod}
        })
        setArrayCart(addAmount)
      } else {
        setArrayCart([
            ...arrayCart, objectData
        ])
      }
        
        // -------reset amount----
        setQuantity(1)
    
    

  }

  return (
    <form className="containerProduct" id={product.id} >

      <div className="textProduct">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
      </div>

      <div className="visualProduct">

        <div className="imgPr">
           <img src={product.img} alt={product.title} />
        </div>

        <div className="counter">
          <div className="price">
            <p>$ {product.unPrice}</p>
            <input onChange={getQuantity} value={quantity} type="number" min="1" placeholder="0"  />
          </div>
          <button type="button" onClick={() => addProducts(objectData)}>Adicionar</button>
        </div>

      </div>

    </form>
  )
}

const mapStateToProps = state => ({
	productsCart: state.productsCart,
})

const mapDispatchToProps = dispatch => ({
	addProducts(product) {
		dispatch({
			type: "ADD_PRODUCT",
			product
		})
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductRender)

