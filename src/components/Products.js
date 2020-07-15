import React, {useContext} from 'react';

// Components
import Product from './Product';
import ProductContext from "../contexts/ProductContext";

const Products = props => {
	const productValues = useContext(ProductContext);

	return (
		<div className="products-container">
			{productValues.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={productValues.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
