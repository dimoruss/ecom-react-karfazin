import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import products from "../products.json";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ texto }) => {
	const [data, setData] = useState([]);
	const { categoriaId } = useParams();

	useEffect(() => {
		const getData = new Promise((resolve) => {
			setTimeout(() => {
				resolve(films);
			}, 1000);
		});
		
		if (categoriaId) {
			getData.then((res) =>
				setData(res.filter((products) => products.category === categoriaId)),
			);
		} else {
			getData.then((res) => setData(res));
		}
	}, [categoriaId]);

	const onAdd = (quantity) => {
		console.log(`Compraste ${quantity} unidades`);
	};
	return (
		<>
			<Title greeting={texto} />
			<ItemCount initial={3} stock={5} onAdd={onAdd} />
			<ItemList data={data} />
		</>
	);
};
export default ItemListContainer;