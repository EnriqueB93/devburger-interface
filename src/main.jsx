import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Login } from './components/Login/index.jsx';
import GlobalStyles from './styles/globalStyles.js';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<GlobalStyles />
		<Login />
	</StrictMode>,
);
