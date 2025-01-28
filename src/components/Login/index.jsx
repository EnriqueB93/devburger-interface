import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { api } from '../../services/api';

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

const schema = yup
	.object({
		email: yup
			.string()
			.email('O email não e valido')
			.required('O email e obrigatorio'),
		password: yup
			.string()
			.min(6, 'A senha debe ter minimo 6 caracteres')
			.required('Digite uma senha'),
	})
	.required();

export function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	console.log(errors);

	const onSubmit = async (data) => {
		const response = await api.post('/session', {
			email: data.email,
			password: data.password,
		});

		console.log(response);
	};

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

				<Form onSubmit={handleSubmit(onSubmit)}>
					<InputContainer>
						{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
						<label>Email</label>
						<input type="email" {...register('email')} />
						<p>{errors.email?.message}</p>
					</InputContainer>
					<InputContainer>
						{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
						<label> Senha</label>
						<input type="password" {...register('password')} />
						<p>{errors.password?.message}</p>
					</InputContainer>
					<Button type="submit">Entrar</Button>
				</Form>
				<Link>Não possui conta? Clique aqui.</Link>
			</RightContainer>
		</Container>
	);
}
