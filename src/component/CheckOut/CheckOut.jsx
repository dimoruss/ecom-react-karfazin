import React from "react";
import { useState } from "react";
import { useCartContext } from '../../context/CarContext';
import ItemCart from "../ItemCart/ItemCart"
import Form from "../Form/Form";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart, totalPrice } = useCartContext();

  const [orderId, setOrderId] = useState("");

  const handleId = (orderNumber) => {
    setOrderId(orderNumber);
  };

  if (cart.length === 0) {
    return (
      <div className="container mt-5">
        <div className="col-md-12">
          <h1 className="text-center">Carrito vacio</h1>
          <Link to="/">
            <button className="btn btn-primary">Ir Tienda</button>
          </Link>
        </div>
      </div>
    );
  }

  if (orderId) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Gracias por comprar </h1>
            <h3 className="text-center mt-3">
              Nro de seguimiento : {orderId}
            </h3>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <Form handleId={handleId} />
        </div>
        <div className="col-md-6">
          {cart.map((product) => (
            <ItemCart key={product.id} product={product} />
          ))}
          <p className="text-center">
            <b>Total a pagar : ${totalPrice()}</b>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;