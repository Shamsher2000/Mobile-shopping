import React from 'react'
import "../styles/StarProduct.css"


const StarProduct = ({starProduct}) => {
    return (
        <div className="starProduct">
        <div> <a href={starProduct[0].url}> <img src={starProduct[0].image} alt="1st Product" /></a></div>
         <div>
         <a href={"http://localhost:3000 "}> <img src={starProduct[1].image} alt="1st Product" /></a>
         <a href={"http://localhost:3000 "}> <img src={starProduct[2].image} alt="1st Product" /></a>
         <a href={"http://localhost:3000 "}> <img src={starProduct[3].image} alt="1st Product" /></a>
         </div>
      </div>
    )
}

export default StarProduct
