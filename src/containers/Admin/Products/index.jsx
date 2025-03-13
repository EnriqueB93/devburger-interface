import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { CheckCircle, PencilSimple, XCircle } from '@phosphor-icons/react';

import { useEffect, useState } from 'react';

import { api } from '../../../services/api';
import { formatPrice } from '../../../utils/formatPrice';

import { useNavigate } from 'react-router-dom';
import { Container, EditButton, ImageProduct } from './styles';

export function Products() {
	const [product, setProduct] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		async function loadProduct() {
			const { data } = await api.get('/products');
			console.log(data);
			setProduct(data);
		}
		loadProduct();
	}, []);

	function isOffer(offer) {
		if (offer) {
			return <CheckCircle color="#61a120" size="28px" />;
		}
		return <XCircle color="#ff3205" size="28px" />;
	}

	function editProduct() {
		navigate('/admin/editar-producto', { state: { product } });
	}

	return (
		<Container>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Produto</TableCell>
							<TableCell align="center">Preço</TableCell>
							<TableCell align="center">Producto em Oferta</TableCell>
							<TableCell align="center">Image do Producto</TableCell>
							<TableCell align="center">Editar Produto</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{product.map((product) => (
							<TableRow
								key={product.id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{product.name}
								</TableCell>
								<TableCell align="center">
									{formatPrice(product.price)}
								</TableCell>
								<TableCell align="center">{isOffer(product.offer)}</TableCell>
								<TableCell align="center">
									<ImageProduct src={product.url} />
								</TableCell>
								<TableCell align="center">
									<EditButton>
										<PencilSimple onClick={() => editProduct(product)} />
									</EditButton>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	);
}
