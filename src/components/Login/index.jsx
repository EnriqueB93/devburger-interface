import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import {
	Container,
	Form,
	InputContainer,
	LeftContainer,
	Link,
	RightContainer,
	Title,
} from './styles';

import Logo from '../../assets/Logo.svg';
import { Button } from '../Button';

export function Login() {
	return (
		<Container>
			<LeftContainer>
				<img src={Logo} alt="DevBurguer" />
			</LeftContainer>

			<RightContainer>
				<Title>
					Olá, seja bem vindo ao <span> Dev Burguer!</span>
					<br />
					Acesse com seu<span> Login e senha.</span>
				</Title>

				<Form>
					<InputContainer>
						{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
						<label>Email</label>
						<input type="email" />
					</InputContainer>
					<InputContainer>
						{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
						<label> Senha</label>
						<input type="password" />
					</InputContainer>
					<Button>Entrar</Button>
				</Form>
				<Link>Não possui conta? Clique aqui.</Link>
			</RightContainer>
		</Container>
	);
}
