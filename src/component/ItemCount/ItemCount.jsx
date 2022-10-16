import React, { useEffect, useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
	const [count, setCount] = useState(parseInt(initial));
	const decrease = () => {
		setCount(count - 1);
	};

	const increase = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);

	return (
		<div className="card item-count">
			<div className="card-body">
		<div className="counter flexcenter">
			<button className="button-55" disabled={count <= 1} onClick={decrease}> - </button>
			<span> {count} </span>
			<button className="button-55" disabled={count >= stock} onClick={increase}> + </button>
			<div className="text-center">
				<button className="button-55" disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
			</div>
			<p className="text-center">
				Solo <b>quedan</b> {stock}
			</p>
		</div>
		</div>
		</div>
	);
};

export default ItemCount;