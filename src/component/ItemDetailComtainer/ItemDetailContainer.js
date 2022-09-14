import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import products from "../products.json";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
	const [data, setData] = useState({});
	const { detalleId } = useParams();

	useEffect(() => {
		const getData = new Promise((resolve) => {
			setTimeout(() => {
				resolve(products);
			}, 2000);
		});
		
			getData.then((res) =>
					setData(res.find((products) => products.id === parseInt(detalleId))),
			);
	}, [detalleId]);

		return <ItemDetail data={data} />;
};

export default ItemDetailContainer;