import { yupResolver } from '@hookform/resolvers/yup';
import { FileImage } from '@phosphor-icons/react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { api } from '../../../services/api';

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
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
		price: yup
			.number()
			.positive()
			.required('Digite o preço do produto')
			.typeError('Digite o preço do produto'),
		category: yup.object().required('Escolha uma categoria'),
		file: yup
			.mixed()
			.test('required', 'Escolha um arquivo para continuar', (value) => {
				return value && value.length > 0;
			})
			.test('fileSize', 'Carregue arquivos ate 5mb', (value) => {
				return value && value.length > 0 && value[0].size <= 5000000;
			})
			.test('type', 'Carregue apenas imagens PNG ou JPEG ', (value) => {
				return (
					value &&
					value.length > 0 &&
					(value[0].type === 'image/jpeg' || value[0].type === 'image/png')
				);
			}),
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

		await toast.promise(api.post('/products', productFormData), {
			pending: 'adicionando o product...',
			success: 'Produto criado con suceso',
			error: 'Falha ao adicionar producto tente novamente',
		});
	};
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
						control={control}
						render={({ field }) => (
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
					<ErrorMessage>{errors.category?.message}</ErrorMessage>
				</InputGrup>

				<Button>Adicionar Produto</Button>
			</Form>
		</Container>
	);
}
