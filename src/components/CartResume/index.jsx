import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { useCart } from '../../hooks/CartContext';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';

import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import { Container } from './styles';

export function CartResume() {
	const [finalPrice, setFinalPrice] = useState(0);
	const [deriveryTax] = useState(500);
	const { cartProducts } = useCart();

	const navigate = useNavigate();

	useEffect(() => {
		const sumAllItems = cartProducts.reduce((acc, current) => {
			return current.price * current.quantity + acc;
		}, 0);
		setFinalPrice(sumAllItems);
	}, [cartProducts]);

	const submitOrder = async () => {
		const products = cartProducts.map((products) => {
			return {
				id: products.id,
				quantity: products.quantity,
				price: products.price,
			};
		});

		try {
			const { data } = await api.post('/create-payment-intent', { products });
			navigate('/checkout', { state: data });
		} catch (error) {
			toast.error('Erro, tente novamente', {
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: false,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light',
			});
		}
	};

	return (
		<div>
			<Container>
				<div className="container-top">
					<h2 className="title">Resumo do carrinho</h2>
					<p className="items">Items</p>
					<p className="items-price">{formatPrice(finalPrice)}</p>
					<p className="delivery-tax">Taxa de Entrega</p>
					<p className="delivery-tax-price">{formatPrice(deriveryTax)}</p>
				</div>
				<div className="container-bottom">
					<p>Total</p>
					<p>{formatPrice(finalPrice + deriveryTax)}</p>
				</div>
			</Container>
			<Button onClick={submitOrder}>Finalizar Pedido</Button>
		</div>
	);
}
