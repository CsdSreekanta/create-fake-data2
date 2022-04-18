import React from 'react';

const Cosmetic = (props) => {
    const {name, price, id} =props.cosmetic
    return (
        <div>
            <h1>Buy this:{name}</h1>
            <p>Only for:${price}</p>
            <p>Product id:{id}</p>
        </div>
    );
};

export default Cosmetic;