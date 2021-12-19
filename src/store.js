import { createStore } from "redux";
import dataProducts from "./assets/data"

const initialState = {
    productsCart : [],
    totalValue : 0,
    selectedProducts : dataProducts[0].products
}

const addtotal = (cart) => {
    let total = 0;
    cart.map( x => (
        total += x.price*x.quantity
    ))

    return total
}

const reducerFood = (state = initialState, action) => {
    
    switch (action.type) {
        case "CHANGE_CATEGORY":
            console.log(state)
            return{
                ...initialState,
                // selectedProducts: action.products
            }

         case "ADD_PRODUCT":
            console.log(state)
            const exist = state.productsCart.find(x => x.id === action.product.id)
            if (exist) {
                let addAmount = state.productsCart.map(prod => {
                  if(prod.id === action.product.id){
                    prod.quantity += action.product.quantity
                    return prod
                  } else {return prod}
                })
                const priceTotal = addtotal (addAmount)
                return{
                    ...initialState,
                    productsCart : addAmount,
                    totalValue : priceTotal
                }
              } else {
                const price = addtotal ([action.product])
                const priceTotal = price + addtotal(state.productsCart)
                return{
                    ...initialState,
                    productsCart : state.productsCart.concat(action.product),
                    totalValue : priceTotal
                }
              }
    
        default:
            return state
    }


}

export default createStore(reducerFood)
