import React, {useState, useEffect} from 'react'
import Products from './components/foodMenu/Products'
import StartApp from './components/startApp/StartApp'
import ShopCart from './components/shopCart/ShopCart';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from  "react-redux"
import store from "./store"
import './App.css';
import './index.css'

function App() {
  // -------state of the selected products------
  const [arrayCart, setArrayCart] = useState([])

  // -------total value------
  const [totalValue, setTotalValue] = useState(0)

  // ------add the total value ---------
  useEffect(() => {
      let addTotal = 0
     
      if (arrayCart.length === 0){
        addTotal = 0
      } else{
        arrayCart.map( x => (
          addTotal += x.price*x.quantity
          ))
        }
      setTotalValue(addTotal)
  
    }, [arrayCart])

  return (
    <Provider store={store}>
      
      <Router>
        <div className="fullScreen">

          <Switch>
            <Route path="/shopcart">
              <ShopCart
                arrayCart={arrayCart}
                setArrayCart={setArrayCart}
                totalValue={totalValue}
              />
            </Route>
            <Route path="/products">
              <Products 
                arrayCart={arrayCart}
                setArrayCart={setArrayCart}
                totalValue={totalValue}
                setTotalValue={setTotalValue}
              />
            </Route>
            <Route path="/">
              <StartApp />
            </Route>
          </Switch>
        </div>

      </Router>
    </Provider>
  );
}

export default App;
