import React from 'react';

const Cosmetics = () => {
    const cosmetics =[
        {id:1, name:'shirt', price:100},
        {id:2, name:'T-shirt', price:200},
        {id:3, name:'Fatuya', price:400},
        {id:4, name:'Panjabi', price:600},
        {id:5, name:'Paijama', price:900},
        {id:6, name:'pantaq', price:700},
    ]
    return (
        <div>
            {
                cosmetics.map(cosmetic =>console.log(cosmetic))
            }
            
        </div>
    );
};

export default Cosmetics;