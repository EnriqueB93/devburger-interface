import { createGlobalStyle } from 'styled-components';

import { ToastContainer, toast } from 'react-toastify';

const globalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
}

button{
    cursor: pointer;
}
`;

export default globalStyles;
