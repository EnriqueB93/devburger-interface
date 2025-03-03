import { SignOut } from '@phosphor-icons/react';
import Logo from '../../assets/Logo.svg';

import { navLinks } from './navLinks';
import { Container, Footer, NavLink, NavLinkContainer } from './styles';

import { useResolvedPath } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';

export function SideNavAdmin() {
	const { logout } = useUser();
	const { pathname } = useResolvedPath();

	return (
		<Container>
			<img src={Logo} alt="hamburger logo devburger" />

			<NavLinkContainer>
				{navLinks.map((link) => (
					<NavLink
						key={link.id}
						to={link.path}
						$active={pathname === link.path}
					>
						{link.icon}

						{link.label}
					</NavLink>
				))}
			</NavLinkContainer>

			<Footer>
				<NavLink to="/login" onClick={logout}>
					<SignOut />
					<p>Sair</p>
				</NavLink>
			</Footer>
		</Container>
	);
}
