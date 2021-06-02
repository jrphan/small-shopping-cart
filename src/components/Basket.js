import React from 'react'

export default function Basket(props) {
    const {cartItems, onAdd, onRemove} = props;
    const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemPrice *0.14;
    const shippingPrice = itemPrice > 2000  ? 0 : 50;
    const totalPrice = itemPrice + taxPrice + shippingPrice;
    return (
        <aside className="block col-1">
            <h2>Cart Item</h2>
            <div>
                {cartItems.length === 0 && <div>Cart is Empty</div> }
            </div>
            {cartItems.map((item) => (
                <div key={item.id} className='row'>
                    <div className="col-2">{item.name}</div>
                    <div className="col-2">
                        <button onClick={()=> onAdd(item)}  className='add'>+</button>
                        <button onClick={()=> onRemove(item)}  className='remove'>-</button>
                    </div>
                    <div className="col-2 text-right">
                        {item.qty} x ${item.price}
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                    <hr></hr>
                    <div className='row'>
                        <div className='col-2'>Item Price</div>
                        <div className='col-1'>${itemPrice.toFixed(2)}</div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>Tax Price</div>
                        <div className='col-1'>${taxPrice.toFixed(2)}</div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>Shipping Price</div>
                        <div className='col-1'>${shippingPrice.toFixed(2)}</div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <strong>
                                Total Price
                            </strong>
                        </div>
                        <div className='col-1'>
                            <strong>
                                ${totalPrice.toFixed(2)}
                            </strong>
                        </div>
                    </div>
                </>
            )}
            <hr></hr>
            {/* <div className='row'>
                <button onClick={() => alert('Implement Checkout')}> Checkout</button>
            </div> */}

        </aside>
    )
}
