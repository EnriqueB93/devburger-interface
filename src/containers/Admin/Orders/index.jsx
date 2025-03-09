import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { useEffect, useState } from 'react';

import { api } from '../../../services/api';

import { Row } from './Row';

export function Orders() {
	const [orders, setOrders] = useState([]);
	const [rows, setRows] = useState([]);

	useEffect(() => {
		async function loadOrders() {
			const { data } = await api.get('orders');

			setOrders(data);
			console.log(data);
		}

		loadOrders();
	}, []);

	function createData(order) {
		return {
			orderId: order._id,
			name: order.user.name,
			date: order.createdAt,
			status: order.status,
			products: order.products,
		};
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const newRows = orders.map((order) => createData(order));

		setRows(newRows);
	}, [orders]);

	return (
		<TableContainer component={Paper}>
			<Table aria-label="collapsible table">
				<TableHead>
					<TableRow>
						<TableCell />
						<TableCell>Pedidos</TableCell>
						<TableCell>Cliente</TableCell>
						<TableCell>Data do pedido</TableCell>
						<TableCell>Status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<Row
							key={row.orderId}
							row={row}
							orders={orders}
							setOrders={setOrders}
						/>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
