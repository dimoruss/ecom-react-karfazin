import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc, getFirestore} from "firebase/firestore";

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

const ItemDetailContainer = () => {
	const [data, setData] = useState({});
    const { detalleId } = useParams();

	useEffect(() => {
		const querydb = getFirestore();
		const queryDoc = doc(querydb, "items", detalleId);
		getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
	}, [detalleId]);

	return <ItemDetail data={data} />;
};

export default ItemDetailContainer;