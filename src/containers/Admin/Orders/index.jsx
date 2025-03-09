import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { func } from 'prop-types';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { Row } from './Row';
import { OrderStatusOptions } from './orderStatusOptions';
import { Filter, FilterOptions } from './styles';

export function Orders() {
	const [orders, setOrders] = useState([]);
	const [activeStatus, setActiveStatus] = useState(0);
	const [rows, setRows] = useState([]);
	const [filterdOrders, setFilterdOrders] = useState([]);

	useEffect(() => {
		async function loadOrders() {
			const { data } = await api.get('orders');

			setOrders(data);
			setFilterdOrders(data);
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
		const newRows = filterdOrders.map((order) => createData(order));

		setRows(newRows);
	}, [filterdOrders]);

	function handleStatus(status) {
		if (status.id === 0) {
			setFilterdOrders(orders);
		} else {
			const newOrder = orders.filter((order) => order.status === status.value);
			setFilterdOrders(newOrder);
		}

		setActiveStatus(status.id);
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (activeStatus === 0) {
			setFilterdOrders(orders);
		} else {
			const statusIndex = OrderStatusOptions.findIndex(
				(item) => item.id === activeStatus,
			);

			const newStatusIndex = orders.filter(
				(order) => order.status === OrderStatusOptions[statusIndex].value,
			);
			setFilterdOrders(newStatusIndex);
		}
	}, [orders]);

	return (
		<>
			<Filter>
				{OrderStatusOptions.map((status) => (
					<FilterOptions
						key={status.id}
						onClick={() => handleStatus(status)}
						$isActiveStatus={activeStatus === status.id}
					>
						{status.label}
					</FilterOptions>
				))}
			</Filter>
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
		</>
	);
}
