import { List, ListPlus, Receipt } from '@phosphor-icons/react';

export const navLinks = [
	{
		id: 1,
		label: 'Pedidos',
		path: '/admin/pedidos',
		icon: <Receipt />,
	},
	{
		id: 2,
		label: 'Productos',
		path: '/admin/productos',
		icon: <List />,
	},
	{
		id: 3,
		label: 'Adicionar producto',
		path: '/admin/novo-producto',
		icon: <ListPlus />,
	},
];
