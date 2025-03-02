import { Route, Routes } from 'react-router-dom';
import {
	Cart,
	Checkout,
	CompletePayment,
	EditProduct,
	Home,
	Login,
	Menu,
	NewProduct,
	Orders,
	Products,
	Register,
} from '../containers';
import { AdminLayout } from '../layouts/adminLayout';
import { UserLayout } from '../layouts/userLayout';

export function Router() {
	return (
		<>
			<Routes>
				<Route path="/" element={<UserLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/cardapio" element={<Menu />} />
					<Route path="/carrinho" element={<Cart />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/complete" element={<CompletePayment />} />
				</Route>

				<Route path="/login" element={<Login />} />
				<Route path="/cadastro" element={<Register />} />

				<Route path="/admin" element={<AdminLayout />}>
					<Route path="/admin/pedidos" element={<Orders />} />
					<Route path="/admin/productos" element={<Products />} />
					<Route path="/admin/editar-producto" element={<EditProduct />} />
					<Route path="/admin/novo-producto" element={<NewProduct />} />
				</Route>
			</Routes>
		</>
	);
}
