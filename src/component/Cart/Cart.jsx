import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CarContext";
import ItemCart from "../ItemCart/ItemCart";


const Cart = () => {
	const { cart, totalPrice } = useCartContext();

	const order = {
		
		items: cart.map((product) => ({
			id: product.id,
			title: product.title,
			price: product.price,
			quantity: product.quantity,
		})),
		total: totalPrice(),
	};

	const handleClick = () => {
		const db = getFirestore();
		const ordersCollection = collection(db, "orders");
		addDoc(ordersCollection, order).then(({ id }) => console.log(id));
	};

	if (cart.length === 0) {
		return (
			<div className="text-center">
				<p>No hay elementos en el carrito</p>
				<Link to="/"><button>Ir a tienda</button></Link>
			</div>
		);
	}

	return (
		<>
			{cart.map((product) => (
				<ItemCart key={product.id} product={product} />
			))}
			<p>total: {totalPrice()}</p>
			<Link to="/checkout">
				<button onClick={handleClick}>Emitir compra</button>
			</Link>
		</>
	);
};

export default Cart;