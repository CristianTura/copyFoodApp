import React, {useState} from 'react'
import Slider from './slider/Slider'
import Total from './totalPrice/Total'
import logo from '../../assets/img/logo.png'
import './Products.css'
import Product from './product/Product'


const Products = ({arrayCart, setArrayCart, totalValue, setTotalValue}) => {

  // -------state to filter products according to category------
  const [nameCategory, updateCategory] = useState('burger')


  return (
    <div className="screenDesktop-1">
      <header>
        <img src={logo} alt="Los Paisanos"/>
      </header>

      <h3>Categorías</h3>  
      <Slider/>
      
      <div className="containerProducts">
       <Product 
        setArrayCart={setArrayCart}
        arrayCart={arrayCart}
        />
      </div>

      <Total
        arrayCart={arrayCart}
        setTotalValue={setTotalValue}
      />

      <footer className="footerProducts">
          <p>Contactanos - 310 416 5543</p>
      </footer>
    </div>
  )
}

export default  Products
