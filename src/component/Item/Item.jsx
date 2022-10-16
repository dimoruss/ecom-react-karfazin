import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ info }) => {

	return (
		<div className="col-md-4 mt-4 ">
			<div className="card card-product box2">
				<div className="">
				
				<Link to={`/detalle/${info.id}`}>
					<img src={info.image} className="card-img-top" width="150" height="300" alt={info.title} />
				</Link>
				<div className="card-body">
					<h2 className="card-title text-center">
						<b>{info.title}</b>
					</h2>
					<p className="col-md-12 card-text text-center">${info.price}</p>
					<Link to={`/detalle/${info.id}`}>
						<button className="button-55">Ver mas</button>
					</Link>
				</div>
				</div>
			</div>
		</div>
	);
};


export default Item;