import { Banner, CategoryMenu, Container, ProductContainer } from './styles';

export function Menu() {
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

			{/* <CategoryMenu>categorias</CategoryMenu>

			<ProductContainer>productos</ProductContainer> */}
		</Container>
	);
}
