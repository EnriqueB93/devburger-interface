import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import { CardProduct } from '../CardProduct';
import {
	BackButton,
	Banner,
	CategoryButton,
	CategoryMenu,
	Container,
	ProductContainer,
} from './styles';

import { Header } from '../../components/Header/index';

import { useLocation, useNavigate } from 'react-router-dom';

export function Menu() {
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProduct] = useState([]);

	const navigate = useNavigate();

	const { search } = useLocation();

	const queryparams = new URLSearchParams(search);

	const [activeCategory, setActiveCategory] = useState(() => {
		const categotyId = +queryparams.get('categorias');
		if (categotyId) {
			return categotyId;
		}
		return 0;
	});

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

	useEffect(() => {
		if (activeCategory === 0) {
			setFilteredProduct(products);
		} else {
			const newFilteredProduct = products.filter(
				(products) => products.category_id === activeCategory,
			);
			setFilteredProduct(newFilteredProduct);
		}
	}, [products, activeCategory]);

	return (
		<Container>
			<Header />

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
					<CategoryButton
						key={category.id}
						$isActiveCategory={category.id === activeCategory}
						onClick={() => {
							navigate(
								{
									pathname: '/cardapio',
									search: `?categorias=${category.id}`,
								},
								{ replace: true },
							);
							setActiveCategory(category.id);
						}}
					>
						{category.name}
					</CategoryButton>
				))}
			</CategoryMenu>

			<ProductContainer>
				{filteredProducts.map((product) => (
					<CardProduct key={product.id} product={product} />
				))}
			</ProductContainer>
			<BackButton to="/">Voltar</BackButton>
		</Container>
	);
}
