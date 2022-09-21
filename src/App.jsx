import NavBar from "./component/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CarContext";
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer";
import Cart from "./component/Cart/Cart";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<CartProvider>
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemListContainer />} />
					<Route path="/categoria/:categoriaId" element={<ItemListContainer />}/>
					<Route path="/cart" element={<Cart />} />
					<Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
				</Routes>
			</CartProvider>
		</BrowserRouter>
	);
}

export default App;