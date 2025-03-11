import { yupResolver } from '@hookform/resolvers/yup';
import { FileImage } from '@phosphor-icons/react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Button } from '../../../components/Button';
import {
	Container,
	Form,
	Input,
	InputGrup,
	LabelInput,
	LabelUpload,
	SelectCategory,
} from './styles';
const schema = yup
	.object({
		firstName: yup.string().required(),
		age: yup.number().positive().integer().required(),
	})
	.required();

export function NewProduct() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const onSubmit = (data) => console.log(data);
	return (
		<Container>
			<Form>
				<InputGrup>
					<LabelInput>Nome</LabelInput>
					<Input />
				</InputGrup>

				<InputGrup>
					<LabelInput>Preço</LabelInput>
					<Input />
				</InputGrup>

				<InputGrup>
					<LabelUpload>
						<FileImage />
						<input type="file" />
					</LabelUpload>
				</InputGrup>

				<InputGrup>
					<LabelInput>Categoria</LabelInput>
					<SelectCategory />
				</InputGrup>

				<Button>Adicionar Produto</Button>
			</Form>
		</Container>
	);
}
