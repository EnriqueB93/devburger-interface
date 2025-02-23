import { useCart } from '../../hooks/CartContext';

import { formatPrice } from '../../utils/formatPrice';

import TrashImage from '../../assets/trash.svg';
import { Table } from '../index';
import {
	ButtonGrup,
	EmpyCart,
	ProductImage,
	TotalPrice,
	TrashButton,
} from './styles';

export function CartItems() {
	const { cartProducts, increaseProduct, decreaseProduct, deleteProduct } =
		useCart();

	return (
		<Table.Root>
			<Table.Header>
				<Table.Tr>
					{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
					<Table.Th></Table.Th>
					<Table.Th>Items</Table.Th>
					<Table.Th>preço</Table.Th>
					<Table.Th>Quantidade</Table.Th>
					<Table.Th>Total</Table.Th>
					{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
					<Table.Th></Table.Th>
				</Table.Tr>
			</Table.Header>
			<Table.Body>
				{cartProducts?.length ? (
					cartProducts.map((product) => (
						<Table.Tr key={product.id}>
							<Table.Td>
								<ProductImage src={product.url} alt={product.name} />
							</Table.Td>
							<Table.Td>{product.name}</Table.Td>
							<Table.Td>{product.currencyValue}</Table.Td>
							<Table.Td>
								<ButtonGrup>
									<button
										type="button"
										onClick={() => decreaseProduct(product.id)}
									>
										-
									</button>
									{product.quantity}
									<button
										type="button"
										onClick={() => increaseProduct(product.id)}
									>
										+
									</button>
								</ButtonGrup>
							</Table.Td>

							<Table.Td>
								<TotalPrice>
									{formatPrice(product.quantity * product.price)}
								</TotalPrice>
							</Table.Td>

							<Table.Td>
								<TrashButton
									src={TrashImage}
									alt="lixeira"
									onClick={() => deleteProduct(product.id)}
								/>
							</Table.Td>
						</Table.Tr>
					))
				) : (
					<Table.Tr>
						<Table.Td>
							<EmpyCart>Seu carrinho está vazio</EmpyCart>
						</Table.Td>
					</Table.Tr>
				)}
			</Table.Body>
		</Table.Root>
	);
}
