import React  from 'react'
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import './total.css'

const Total = ({arrayCart, totalValue, productsCart}) => {

  let sum = productsCart.length

  // if(window.innerHeight > 1200){
  //   let iconcart = document.querySelector('.iconCart').height = 55
  // }
// console.log(window.innerWidth, window.innerHeight)
// console.log(totalValue)

  return (
    <div className="totalProduct">
      <div className="totalPrice">
        <h3>TOTAL</h3>
        <p className="textTotalValue">$ {totalValue}</p>
      </div>

        <Link to="/shopcart" className="linkProduct">
          <Icon icon="el:shopping-cart-sign" color="#4d2400" height="35" className="iconCart"/>
            {sum !== 0 ? 
              <div className="sum">
                <p>{sum}</p>
              </div> :
              null
            }    
          <p>Ver carrito</p>
        </Link>

    </div>
  )
}

const mapStateToProps = state => ({
	productsCart: state.productsCart,
	totalValue : state.totalValue
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Total)

