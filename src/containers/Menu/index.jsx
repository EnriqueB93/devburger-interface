import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import { CardProduct } from '../CardProduct';
import {
	Banner,
	CategoryButton,
	CategoryMenu,
	Container,
	ProductContainer,
} from './styles';

export function Menu() {
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function loadCategories() {
			const { data } = await api.get('/categories');

			const newCategories = [{ id: 0, name: 'Todo' }, ...data];

			setCategories(newCategories);
		}
		loadCategories();

		async function loadProducts() {
			const { data } = await api.get('/products');

			const newProducts = data.map((product) => ({
				currencyValue: formatPrice(product.price),
				...product,
			}));

			setProducts(newProducts);
		}
		loadProducts();
	}, []);

	return (
		<Container>
			<Banner>
				<h1>
					O MELHOR
					<br />
					HAMBÚRGUER
					<br />
					ESTÁ AQUI!
					<span>Esse cardápio está irresistível!</span>
				</h1>
			</Banner>

			<CategoryMenu>
				{categories.map((category) => (
					<CategoryButton key={category.id}>{category.name}</CategoryButton>
				))}
			</CategoryMenu>

			<ProductContainer>
				{products.map((product) => (
					<CardProduct key={product.id} product={product} />
				))}
			</ProductContainer>
		</Container>
	);
}
