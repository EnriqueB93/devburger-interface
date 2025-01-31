import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { toast } from 'react-toastify';

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
import { Button } from '../../components/Button';

const schema = yup
	.object({
		name: yup.string().required('O nome e obrigatorio.'),
		email: yup
			.string()
			.email('O email não e valido.')
			.required('O email e obrigatorio.'),
		password: yup
			.string()
			.min(6, 'A senha debe ter minimo 6 caracteres.')
			.required('Digite uma senha.'),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref('password')], 'As senhas deven ser iguais.')
			.required('confirma sua senha.'),
	})
	.required();

export function Register() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	console.log(errors);

	const onSubmit = async (data) => {
		try {
			const { status } = await api.post(
				'/users',
				{
					name: data.name,
					email: data.email,
					password: data.password,
				},
				{
					validateStatus: () => true,
				},
			);

			if (status === 200 || status === 201) {
				toast.success('Conta criada con sucesso!');
			} else if (status === 409) {
				toast.error('Email ja cadastrardo! Faca login para continuar.');
			} else {
				throw new Error();
			}
			console.log(status);
		} catch (error) {
			toast.error('Falha no sistema');
		}
	};

	return (
		<Container>
			<LeftContainer>
				<img src={Logo} alt="DevBurguer" />
			</LeftContainer>

			<RightContainer>
				<Title>
					<span> Criar conta.</span>
				</Title>

				<Form onSubmit={handleSubmit(onSubmit)}>
					<InputContainer>
						{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
						<label>Nome</label>
						<input type="text" {...register('name')} />
						<p>{errors.name?.message}</p>
					</InputContainer>
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
					<InputContainer>
						{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
						<label> Confirmar senha</label>
						<input type="password" {...register('confirmPassword')} />
						<p>{errors.confirmPassword?.message}</p>
					</InputContainer>
					<Button type="submit">Entrar</Button>
				</Form>
				<Link>Ja possui conta? Clique aqui.</Link>
			</RightContainer>
		</Container>
	);
}
