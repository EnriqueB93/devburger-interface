import {
	PaymentElement,
	useElements,
	useStripe,
} from '@stripe/react-stripe-js';
import { useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import './styles.css';

import { toast } from 'react-toastify';
import { useCart } from '../../../hooks/CartContext';
import { api } from '../../../services/api';

export function CheckoutForm() {
	const { cartProducts, clearCart } = useCart();
	const navigate = useNavigate();

	const stripe = useStripe();
	const elements = useElements();

	const {
		state: { dpmCheckerLink },
	} = useLocation();

	const [message, setMessage] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!stripe || !elements) {
			console.error('Stripe o Elements co falha, tente novamente');
			return;
		}

		setIsLoading(true);

		const { error, paymentIntent } = await stripe.confirmPayment({
			elements,
			redirect: 'if_required',
		});
		console.log(paymentIntent);
		console.log(error);

		if (error) {
			setMessage(error.message);
			toast.error(error.message);
		} else if (paymentIntent && paymentIntent.status === 'succeeded') {
			try {
				const products = cartProducts.map((products) => {
					return {
						id: products.id,
						quantity: products.quantity,
						price: products.price,
					};
				});
				const { status } = await api.post(
					'/orders',
					{ products },

					{ validateStatus: () => true },
				);

				if (status === 200 || status === 201) {
					setTimeout(() => {
						navigate(
							`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`,
						);
					}, 2000);
					clearCart();
					toast.success('Pedido realizado com sucesso!');
				} else if (status === 409) {
					toast.error('Falha ao realizar o seo pedido.');
				} else {
					throw new Error();
				}
				console.log(status);
			} catch (error) {
				toast.error('Falha no sistema');
			}
		} else {
			navigate(
				`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`,
			);
		}

		setIsLoading(false);
	};

	const paymentElementOptions = {
		layout: 'accordion',
	};

	return (
		<div className="container">
			<form id="payment-form" onSubmit={handleSubmit}>
				<PaymentElement id="payment-element" options={paymentElementOptions} />
				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<button
					className="button"
					disabled={isLoading || !stripe || !elements}
					id="submit"
				>
					<span id="button-text">
						{isLoading ? (
							// biome-ignore lint/style/useSelfClosingElements: <explanation>
							<div className="spinner" id="spinner"></div>
						) : (
							'Pagar Agora'
						)}
					</span>
				</button>
				{/* Show any error or success messages */}
				{message && <div id="payment-message">{message}</div>}
			</form>
		</div>
	);
}
