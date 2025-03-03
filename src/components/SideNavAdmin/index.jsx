import { SignOut } from '@phosphor-icons/react';
import Logo from '../../assets/Logo.svg';

import { navLinks } from './navLinks';
import { Container, Footer, NavLink, NavLinkContainer } from './styles';

import { useUser } from '../../hooks/UserContext';

export function SideNavAdmin() {
	const { logout } = useUser();

	return (
		<Container>
			<img src={Logo} alt="hamburger logo devburger" />

			<NavLinkContainer>
				{navLinks.map((link) => (
					<NavLink key={link.id} to={link.path}>
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
