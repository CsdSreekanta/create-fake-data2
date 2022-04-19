import React from 'react';
import { addToDb } from '../Utilities/MealDb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name, price, id} =props.cosmetic

   const addToCart =(id)=>{
      addToDb(id)
  
   }

    return (
        <div className='product'>
            <h1>Buy this:{name}</h1>
            <p>Only for:${price}</p>
            <p>Product id:{id}</p>
            <button onClick={() =>addToCart(id)}>Add to Cart</button>
           
        </div>
    );
};

export default Cosmetic;