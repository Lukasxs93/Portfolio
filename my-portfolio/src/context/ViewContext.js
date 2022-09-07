import { useState, createContext } from 'react';

export const ViewContext = createContext();

const VievContextProvider = ({ children }) => {
	const [view, setView] = useState('about');
	return (
		<ViewContext.Provider value={{ view, setView }}>
			{children}
		</ViewContext.Provider>
	);
};

export default VievContextProvider;
