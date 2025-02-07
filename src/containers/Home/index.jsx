import { CategoriesCarousel } from '../CategoriesCarousel';
import { OffersCarousel } from '../OffersCarousel';
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
						<CategoriesCarousel />
						<OffersCarousel />
					</Content>
				</Container>
			</main>
		</>
	);
}
