import { Banner, Container, Content } from './styles';

export function Home() {
	return (
		<>
			<main>
				<Banner>
					<h1>Bem-vindo(a)</h1>
				</Banner>

				<Container>
					<Content>
						<div>carrossel categorias</div>
						<div>carrossel prouctos</div>
					</Content>
				</Container>
			</main>
		</>
	);
}
