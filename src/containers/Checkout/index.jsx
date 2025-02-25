import { Elements } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';
import { CheckoutForm } from '../../components/CheckoutForm';

import { stripePromise } from '../../config/stripe/stripeConfig';

export function Checkout() {
	const {
		state: { clientSecret },
	} = useLocation();

	if (!clientSecret) {
		return <div>Erro, tente novamente</div>;
	}

	return (
		<div>
			<Elements stripe={stripePromise} options={clientSecret}>
				<CheckoutForm />
			</Elements>
		</div>
	);
}
