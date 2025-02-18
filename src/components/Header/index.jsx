import { useNavigate, useResolvedPath } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';

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
	const navigate = useNavigate();
	const { pathname } = useResolvedPath();
	const { logout, userInf } = useUser();

	function logoutUser() {
		logout();
		navigate('/login');
	}
	return (
		<Container>
			<Content>
				<Navigation>
					<div>
						<HeaderLink to="/" $isActive={pathname === '/'}>
							Home
						</HeaderLink>
						<hr />
						<HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'}>
							Cardápio
						</HeaderLink>
					</div>
				</Navigation>
				<Option>
					<Profile>
						<User color="#fff" size={30} />
						<div>
							<p>
								Olá, <span> {userInf.name}</span>
							</p>
							<Logout onClick={logoutUser}>Sair</Logout>
						</div>
					</Profile>
					<LinkContainer>
						<ShoppingCart color="#fff" size={30} />
						<HeaderLink to="/carrinho">Carrinho</HeaderLink>
					</LinkContainer>
				</Option>
			</Content>
		</Container>
	);
}
