import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useCartContext } from '../../context/CarContext';
import { getFirestore } from "firebase/firestore";

const Form = ({ handleId }) => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [direc, setDirec] = useState("");
const [tel, setTel] = useState("");

const { totalPrice, cart } = useCartContext();

const handleSubmit = (sub) => {
    sub.preventDefault();

const orden = {
    buyer: { name, tel, email, direc},
    cart: cart,
    date: serverTimestamp(),
    total: totalPrice(),
};
    const db = getFirestore();
    const refOrden = collection(db, "orders");
    addDoc(refOrden, orden).then((res) => {
    handleId(res.id);
});
};
const handleName = (sub) => {
    setName(sub.target.value);
};
const handleTel = (sub) => {
    setTel(sub.target.value);
};
const handleDirec = (sub) => {
    setDirec(sub.target.value);
};
const handleEmail = (sub) => {
    setEmail(sub.target.value);
};

return (
    <div className="col-md-9">
        <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-12">
                <label htmlFor="nombre" className="form-label"> Nombre y Apellido </label>
                <input  type="text" className="form-control" id="nombre" onChange={handleName} value={name}/>
            </div>
            <div className="col-md-12">
                <label htmlFor="telefono" className="form-label"> Telefono </label>
                <input type="text" className="form-control" id="telefono" onChange={handleTel} value={tel}/>
            </div>
            <div className="col-md-12">
                <label htmlFor="email" className="form-label"> Email </label>
                <input type="email" className="form-control" id="email" onChange={handleEmail} value={email}/>
            </div>
            <div className="col-md-12">
                <label htmlFor="direccion" className="form-label"> Direccion </label>
                <input type="text" className="form-control" id="direccion" onChange={handleDirec} value={direc}/>
            </div>
            <div className="col-12">
                <button className="btn btn-success">Generar orden</button>
            </div>
        </form>
    </div>
    );
};

export default Form;
