import { yupResolver } from '@hookform/resolvers/yup';
import { FileImage } from '@phosphor-icons/react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { api } from '../../../services/api';

import { useEffect, useState } from 'react';
import { Button } from '../../../components/Button';
import {
	Container,
	ErrorMessage,
	Form,
	Input,
	InputGrup,
	LabelInput,
	LabelUpload,
	SelectCategory,
} from './styles';

const schema = yup
	.object({
		name: yup.string().required('Digite o nome do produto'),
		price: yup.number().positive().required('Digite o preço do produto'),
		category: yup.object().required('Escolho uma categoria'),
		file: yup.mixed(),
	})
	.required();

export function NewProduct() {
	const [fileName, setfileName] = useState(null);
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		async function loadCategories() {
			const { data } = await api.get('/categories');
			setCategories(data);
			console.log(data);
		}
		loadCategories();
	}, []);

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
			<Form onSubmit={handleSubmit(onSubmit)}>
				<InputGrup>
					<LabelInput>Nome</LabelInput>
					<Input {...register('name')} />
					<ErrorMessage>{errors.name?.message}</ErrorMessage>
				</InputGrup>

				<InputGrup>
					<LabelInput>Preço</LabelInput>
					<Input {...register('price')} />
					<ErrorMessage>{errors.price?.message}</ErrorMessage>
				</InputGrup>

				<InputGrup>
					<LabelUpload>
						<FileImage />
						<input
							{...register('file')}
							accept="image/png, image/jpeg"
							onChange={(value) => {
								setfileName(value.target.files[0]?.name);
							}}
							type="file"
						/>
						{fileName || 'Upload do Produto'}
					</LabelUpload>
					<ErrorMessage>{errors.file?.message}</ErrorMessage>
				</InputGrup>

				<InputGrup>
					<LabelInput>Categoria</LabelInput>
					<Controller
						name="category"
						control={control}
						render={(field) => (
							<SelectCategory
								{...field}
								options={categories}
								getOptionLabel={(category) => category.name}
								getOptionValue={(category) => category.id}
								placeholder="Categorias"
								menuPortalTarget={document.body}
							/>
						)}
					/>
				</InputGrup>

				<Button>Adicionar Produto</Button>
			</Form>
		</Container>
	);
}
