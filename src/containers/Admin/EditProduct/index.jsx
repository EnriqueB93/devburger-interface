import { yupResolver } from '@hookform/resolvers/yup';
import { FileImage } from '@phosphor-icons/react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { api } from '../../../services/api';

import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from '../../../components/Button';
import {
	Container,
	ContainerCheckbox,
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
		price: yup
			.number()
			.positive()
			.required('Digite o preço do produto')
			.typeError('Digite o preço do produto'),
		category: yup.object().required('Escolha uma categoria'),
		offer: yup.boolean(),
	})
	.required();

export function EditProduct() {
	const [fileName, setfileName] = useState(null);
	const [categories, setCategories] = useState([]);

	const navigate = useNavigate();

	const {
		state: { product },
	} = useLocation();

	useEffect(() => {
		async function loadCategories() {
			const { data } = await api.get('/categories');
			setCategories(data);
		}
		loadCategories();
	}, []);

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const onSubmit = async (data) => {
		const productFormData = new FormData();

		productFormData.append('name', data.name);
		productFormData.append('price', data.price * 100);
		productFormData.append('category_id', data.category.id);
		productFormData.append('file', data.file[0]);
		productFormData.append('offer', data.offer);

		await toast.promise(api.put(`/products/${product.id}`, productFormData), {
			pending: 'Editando o product...',
			success: 'Produto editado con suceso',
			error: 'Falha ao editar producto tente novamente',
		});

		setTimeout(() => {
			navigate('/admin/productos');
		}, 2000);
	};
	return (
		<Container>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<InputGrup>
					<LabelInput>Nome</LabelInput>
					<Input
						type="text"
						{...register('name')}
						defaultValue={product.name}
					/>
					<ErrorMessage>{errors.name?.message}</ErrorMessage>
				</InputGrup>

				<InputGrup>
					<LabelInput>Preço</LabelInput>
					<Input {...register('price')} defaultValue={product.price / 100} />
					<ErrorMessage>{errors.price?.message}</ErrorMessage>
				</InputGrup>

				<InputGrup>
					<LabelUpload>
						<FileImage />
						<input
							type="file"
							{...register('file')}
							accept="image/png, image/jpeg"
							onChange={(value) => {
								setfileName(value.target.files[0]?.name);
								register('file').onChange(value);
							}}
						/>
						{fileName || 'Upload do Produto'}
					</LabelUpload>
					<ErrorMessage>{errors.file?.message}</ErrorMessage>
				</InputGrup>

				<InputGrup>
					<LabelInput>Categoria</LabelInput>
					<Controller
						name="category"
						defaultValue={product.category}
						control={control}
						render={({ field }) => (
							<SelectCategory
								defaultValue={product.category}
								{...field}
								options={categories}
								getOptionLabel={(category) => category.name}
								getOptionValue={(category) => category.id}
								placeholder="Categorias"
								menuPortalTarget={document.body}
							/>
						)}
					/>
					<ErrorMessage>{errors.category?.message}</ErrorMessage>
				</InputGrup>

				<InputGrup>
					<ContainerCheckbox>
						<input
							type="checkbox"
							{...register('offer')}
							defaultValue={product.offer}
						/>
						<LabelInput> Produto en Oferta?</LabelInput>
					</ContainerCheckbox>
				</InputGrup>

				<Button>Editar Produto</Button>
			</Form>
		</Container>
	);
}
