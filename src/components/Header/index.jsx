import {
	Container,
	Content,
	HeaderLink,
	LinkContainer,
	Logout,
	Navigation,
	Option,
	Profile,
} from './style';

import { ShoppingCart, User } from '@phosphor-icons/react';

export function Header() {
	return (
		<Container>
			<Content>
				<Navigation>
					<div>
						<HeaderLink>Home</HeaderLink>
						<HeaderLink>Cardápio</HeaderLink>
					</div>
				</Navigation>
				<Option>
					<Profile>
						<User color="#fff" size={30} />
						<div>
							<p>
								Olá, <span>Enrique</span>
							</p>
							<Logout>Sair</Logout>
						</div>
					</Profile>
					<LinkContainer>
						<ShoppingCart color="#fff" size={30} />
						<HeaderLink>Carrinho</HeaderLink>
					</LinkContainer>
				</Option>
			</Content>
		</Container>
	);
}
