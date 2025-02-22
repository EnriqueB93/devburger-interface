import { Banner, Container, Content, Title } from './styles';

import Logo from '../../assets/Logo.svg';

export function Cart() {
	return (
		<Container>
			<Banner>
				<img src={Logo} alt="logo" />
			</Banner>

			<Title>Checkout - Pedido</Title>

			<Content>
				{/* <CartItems />
				<CartResume /> */}
			</Content>
		</Container>
	);
}
