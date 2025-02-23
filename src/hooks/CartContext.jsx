import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
	const [cartProducts, setCartproducts] = useState([]);

	const putProductInCart = (product) => {
		const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

		let newProductInCart = [...cartProducts];

		if (cartIndex >= 0) {
			newProductInCart = cartProducts;

			newProductInCart[cartIndex].quantity =
				newProductInCart[cartIndex].quantity + 1;

			setCartproducts(newProductInCart);
		} else {
			product.quantity = 1;
			newProductInCart = [...cartProducts, product];

			setCartproducts(newProductInCart);
		}
		updateLocalStorage(newProductInCart);
	};

	const clearCart = (product) => {
		setCartproducts([]);
		updateLocalStorage([]);
	};

	const deleteProduct = (productId) => {
		const newCart = cartProducts.filter((prd) => prd.id !== productId);

		setCartproducts(newCart);
		updateLocalStorage(newCart);
	};

	const increaseProduct = (productId) => {
		const newCart = cartProducts.map((prd) => {
			return prd.id === productId
				? { ...prd, quantity: prd.quantity + 1 }
				: prd;
		});
		setCartproducts(newCart);
		updateLocalStorage(newCart);
	};

	const decreaseProduct = (productId) => {
		const cartIndex = cartProducts.findIndex((prd) => prd.id === productId);
		if (cartProducts[cartIndex].quantity > 1) {
			const newCart = cartProducts.map((prd) => {
				return prd.id === productId
					? { ...prd, quantity: prd.quantity - 1 }
					: prd;
			});
			setCartproducts(newCart);
			updateLocalStorage(newCart);
		} else {
			deleteProduct(productId);
		}
	};

	useEffect(() => {
		const clientCartData = localStorage.getItem('devburguer:cartinfo');
		if (clientCartData) {
			setCartproducts(JSON.parse(clientCartData));
		}
	}, []);

	const updateLocalStorage = (products) => {
		localStorage.setItem('devburguer:cartinfo', JSON.stringify(products));
	};
	return (
		<CartContext.Provider
			value={{
				cartProducts,
				clearCart,
				putProductInCart,
				increaseProduct,
				decreaseProduct,
				deleteProduct,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	const context = useContext(CartContext);

	if (!context) {
		throw new Error('useCart must be with a context');
	}
	return context;
};
