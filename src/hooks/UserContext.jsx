import { createContext, useContext, useEffect, useState } from 'react';

const userContext = createContext({});

export const UserProvider = ({ children }) => {
	const [userInf, setUserInf] = useState({ id: 1, name: 'Enrique' });

	return (
		<userContext.Provider value={{ userInf }}>{children}</userContext.Provider>
	);
};

export const useUser = () => {
	const context = useContext(userContext);

	if (!context) {
		throw new Error('useUser most be a valid context');
	}
	return context;
};
