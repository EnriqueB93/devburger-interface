import PropTypes from 'prop-types';
import { CartButton } from '../../components/CartButton';
import { useCart } from '../../hooks/CartContext';
import { CardImage, Container } from './styles';

export function CardProduct({ product }) {
	const { putProductInCart } = useCart();
	return (
		<Container>
			<CardImage src={product.url} alt={product.name} />
			<div>
				<p>{product.name}</p>
				<strong>{product.currencyValue}</strong>
			</div>
			<CartButton onClick={() => putProductInCart(product)} />
		</Container>
	);
}

CardProduct.propTypes = { product: PropTypes.object };
