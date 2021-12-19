import React  from 'react'
import {connect} from "react-redux"
import './slider.css'


const Icons = ({image, name, id, products, changeCategory}) => {

  // const readName = e => {
    // if (e.target.parentElement.className === 'category'){
    //   updateCategory(e.target.parentElement.id)
    // } else {
    //   updateCategory(e.target.id)
    // }
  //   updateCategory(id)
  // }

  return (
    <div className="category" id={id} onClick={() => changeCategory(products)}>
      <img className="iconCateg" src={image} alt={name}/>
      <p className="nameCateg">{name}</p>
    </div>
  )
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
    changeCategory(products) {
      dispatch({
        type: "CHANGE_CATEGORY",
        products
      })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Icons)

