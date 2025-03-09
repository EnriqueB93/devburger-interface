import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { formatData } from '../../../utils/formatData';
import { OrderStatusOptions } from './orderStatusOptions';
import { ProductImage, SelectStatus } from './styles';

export function Row({ row, orders, setOrders }) {
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);

	async function newStatusOrder(id, status) {
		try {
			setLoading(true);
			await api.put(`/orders/${id}`, { status });

			const newOrders = orders.map((order) =>
				order._id === id ? { ...order, status } : order,
			);

			setOrders(newOrders);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	}

	return (
		<>
			<TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
				<TableCell>
					<IconButton
						aria-label="expand row"
						size="small"
						onClick={() => setOpen(!open)}
					>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell component="th" scope="row">
					{row.orderId}
				</TableCell>
				<TableCell>{row.name}</TableCell>
				<TableCell>{formatData(row.date)}</TableCell>
				<TableCell>
					<SelectStatus
						options={OrderStatusOptions.filter((status) => status.id !== 0)}
						placeholder="Status"
						defaultValue={OrderStatusOptions.find(
							(status) => status.value === row.status || null,
						)}
						onChange={(status) => newStatusOrder(row.orderId, status.value)}
						isLoading={loading}
						menuPortalTarget={document.body}
					/>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box sx={{ margin: 1 }}>
							<Typography variant="h6" gutterBottom component="div">
								pedido
							</Typography>
							<Table size="small" aria-label="purchases">
								<TableHead>
									<TableRow>
										<TableCell>Quatidade</TableCell>
										<TableCell>producto</TableCell>
										<TableCell>categoris</TableCell>
										<TableCell>_</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{row.products.map((products) => (
										<TableRow key={products._id}>
											<TableCell component="th" scope="row">
												{products.quantity}
											</TableCell>
											<TableCell>{products.name}</TableCell>
											<TableCell>{products.category}</TableCell>
											<TableCell>
												<ProductImage src={products.url} alt={products.name} />
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</>
	);
}

Row.propTypes = {
	orders: PropTypes.array.isRequired,
	setOrders: PropTypes.func.isRequired,
	row: PropTypes.shape({
		orderId: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired,
		products: PropTypes.arrayOf(
			PropTypes.shape({
				category: PropTypes.string.isRequired,
				_id: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired,
				price: PropTypes.number.isRequired,
				quantity: PropTypes.string.isRequired,
				url: PropTypes.string.isRequired,
			}),
		).isRequired,
		status: PropTypes.string.isRequired,
	}).isRequired,
};
