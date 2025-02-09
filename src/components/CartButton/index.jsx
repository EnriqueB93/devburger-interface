import CartImages from '../../assets/cartIcon.svg';
import { ContainerButton } from './styles';

export function CartButton({ ...props }) {
	return (
		<ContainerButton {...props}>
			<img src={CartImages} alt="cart icon" />
		</ContainerButton>
	);
}
