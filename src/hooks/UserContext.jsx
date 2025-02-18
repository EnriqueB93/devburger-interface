import { createContext, useContext, useEffect, useState } from 'react';

const userContext = createContext({});

export const UserProvider = ({ children }) => {
	const [userInf, setUserInf] = useState({});

	const putUserData = (userInf) => {
		setUserInf(userInf);

		localStorage.setItem('devburger:userData', JSON.stringify(userInf));
	};

	const logout = () => {
		setUserInf({});

		localStorage.removeItem('devburger:userData');
	};

	useEffect(() => {
		const userInfLocalStorege = localStorage.getItem('devburger:userData');

		if (userInfLocalStorege) {
			setUserInf(JSON.parse(userInfLocalStorege));
		}
	}, []);

	return (
		<userContext.Provider value={{ userInf, putUserData, logout }}>
			{children}
		</userContext.Provider>
	);
};

export const useUser = () => {
	const context = useContext(userContext);

	if (!context) {
		throw new Error('useUser most be a valid context');
	}
	return context;
};
