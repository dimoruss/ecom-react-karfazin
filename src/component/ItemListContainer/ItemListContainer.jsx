import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Title from "../Title/Title";
import { collection, getDocs, getFirestore, query, where} from "firebase/firestore";


/*const products = [
	{
		id: 1,
		image:
			"https://media.vandal.net/i/864x486/5-2020/202053019345410_1.jpg.webp",
		category: "games",
		title: "Deep Rock Galactic",
		price: 300,
	},
	{
		id: 2,
		image:
			"https://img.zonared.com/images/noticias/26300/26352/1.jpg",
		category: "games",
		title: "Metal Gear Solid",
		price: 300,
	},
	{
		id: 3,
		image:
			"https://cdn.dlcompare.com/game_tetiere/img/project-zomboid-img-4.jpg",
		category: "games",
		title: "Proyect Zomboid",
		price: 300,
	},
	{
		id: 4,
		image:
			"https://i.blogs.es/eaaf81/ps5-mando/1366_2000.webp",
		category: "accesorios",
		title: "Mando PS5",
		price: 300,
	},
	{
		id: 5,
		image:
			"https://acf.geeknetic.es/imgw/imagenes/Tutoriales/1242-gamepad-xbox-one-s-1.jpg?f=webp",
		category: "accesorios",
		title: "Mando Xbox",
		price: 300,
	},
];*/

export const ItemListContainer = ({ texto }) => {
	const [data, setData] = useState([]);
	const { categoriaId } = useParams();

	useEffect(() => {
		const querydb = getFirestore();
		const queryCollection = collection(querydb, "items");
		if (categoriaId) {
			const queryFilter = query(
				queryCollection,
				where("category", "==", categoriaId),
			);
			getDocs(queryFilter).then((res) =>
				setData(
					res.docs.map((product) => ({ id: product.id, ...product.data() })),
				),
			);
		} else {
			getDocs(queryCollection).then((res) =>
				setData(
					res.docs.map((product) => ({ id: product.id, ...product.data() })),
				),
			);
		}
	}, [categoriaId]);

	return (
		<>
			<Title greeting={texto} />
			<ItemList data={data} />
		</>
	);
};
export default ItemListContainer;