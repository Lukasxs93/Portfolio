import './App.css';
import Background from './components/Background';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Project from './components/Project';
import ProjectContextProvider from './context/ProjectContext';
import { ViewContext } from './context/ViewContext';
import { useContext } from 'react';
import About from './components/About';

function App() {
	const { view } = useContext(ViewContext);
	console.log(view);
	return (
		<div className='App'>
			<Background />
			<Header />
			{view === 'about' ? (
				<>
					<Hero />
					<About />
				</>
			) : (
				<></>
			)}

			<ProjectContextProvider>
				{view === 'projects' ? <Project /> : <></>}
			</ProjectContextProvider>
			<Footer />
		</div>
	);
}

export default App;
