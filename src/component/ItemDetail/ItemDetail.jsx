import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CarContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

export const ItemDetail = ({ data }) => {
	const [goToCart, setGoToCart] = useState(false);
	const { addProduct } = useCartContext();

	const onAdd = (quantity) => {
		setGoToCart(true);
		addProduct(data, quantity);
	};

	return (
			<div className="container mt-5">
				<div className="row">
					<div className="col-md-6">
						<img src={data.image} alt={data.title}	className="img-fluid border border-info"/>
					</div>
					<div className="col-md-6">
						<h2 className="text-center detail_title">{data.title}</h2>
						<p className="text-center detail_title">${data.price}</p>
						{goToCart ? (
							<div className="row mt-5">
								<div className="col-md-6 text-center">
									<Link to="/cart">
										<button className="btn btn-primary">Ir al carrito</button>
									</Link>
								</div>
							<div className="col-md-6 text-center">
								<Link to="/">
									<button className="btn btn-primary">Seguir comprando</button>
								</Link>
							</div>
						</div>
					) : (
						<div className="col-md-6 offset-3">
							<ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
export default ItemDetail;