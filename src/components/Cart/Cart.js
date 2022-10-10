import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div style={{ height: "100vh", position: "fixed", top: 0 }}>
            <h2>Order Summary :</h2>
            <h5>Order Quantity: {cart.length} </h5>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                </p>)
            }
        </div >
    );
};

export default Cart;