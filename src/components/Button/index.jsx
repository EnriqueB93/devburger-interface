import PropTypes from 'prop-types';
import { ContainerButton } from '../Button/styles';

export function Button({ children, ...props }) {
	return <ContainerButton {...props}>{children}</ContainerButton>;
}

Button.prototype = {
	children: PropTypes.string,
};
