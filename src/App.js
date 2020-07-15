import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Contexts
import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = (item) => {
		setCart([...cart, item]);
	};

	return (
		<div className="App">
			<CartContext.Provider value={cart}>
				<Navigation />
			</CartContext.Provider>

			{/* Routes */}
			<Route exact path="/">
				<ProductContext.Provider value={{products, addItem}} >
					<Products/>
				</ProductContext.Provider>
			</Route>

			<Route path="/cart">
				<CartContext.Provider value={cart}>
					<ShoppingCart/>
				</CartContext.Provider>
			</Route>
		</div>
	);
}

export default App;
