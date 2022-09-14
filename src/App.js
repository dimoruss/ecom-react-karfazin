import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar/NavBar';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './component/ItemDetailComtainer/ItemDetailContainer';
import Cart from "./components/Cart";


function App() {
	return (
		<>
      <BrowserRouter>
            <NavBar />
            <ItemDetailContainer />
      </>
			<Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
