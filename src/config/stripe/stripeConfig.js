import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
	'pk_test_51QvlOyR6R8vaPUzqB7WKOwh97eYHTLyqado3j7UcqcHjuWFzFpaRlgJCvFrax41zIYWO3KWn0MU9rfWTHQSIPbFY00HAUkg7VX',
);

export default stripePromise;
