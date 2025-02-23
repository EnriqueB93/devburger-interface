import { Banner, Container, Content, Title } from './styles';

import Logo from '../../assets/Logo.svg';
import { CartItems, CartResume } from '../../components';

export function Cart() {
	return (
		<Container>
			<Banner>
				<img src={Logo} alt="logo" />
			</Banner>

			<Title>Checkout - Pedido</Title>

			<Content>
				<CartItems />
				<CartResume />
			</Content>
		</Container>
	);
}
