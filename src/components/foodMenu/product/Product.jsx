import React from 'react'
import ProductRender from './ProductRend'
import { connect } from "react-redux"

const Product = ({arrayCart, setArrayCart, selectedProducts}) => {

  
  return (
    <>
    {selectedProducts.map( product => 

        <ProductRender 
          product={product}
          key={product.id}
      />
    )}
    </>
  )
}

const mapStateToProps = state => ({
  selectedProducts : state.selectedProducts
})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Product)

