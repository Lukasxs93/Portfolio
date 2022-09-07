import { useState, createContext } from 'react';
import quizzy from '../assets/quizzy.png';
import weatherApp from '../assets/weather-app.png';
import watchList from '../assets/watchList.png';
export const ProjectContext = createContext();

const ProjectContextProvider = ({ children }) => {
	const [projects, setProjects] = useState([
		{
			Name: 'Quizzy',
			Description:
				'Quizzy is , as the name sugests, a quiz game !, \
                           the project was carried over by me and a fellow student,\
                           the game utilizes an api to retrieve a set number of questions,\
                           it then rearanges the answers in a non predictable pattern. the \
                           user is allowed 2 attempts per question and can use a 50% button up to 3 times.\
						   In this project I was in charge of the functionality of the game itself, from retrieving the data\
						   to validate the user interaction.',
			TechStack: ['Javascript', 'HTML', 'CSS'],
			Index: 1,
			url: 'https://lukasxs93.github.io/quizzy/',
			img: quizzy,
		},
		{
			Name: 'WeatherApp',
			Description:
				'WeatherApp is a small project I started during the react course this summer,\
                          it utilizes a free weather api to perform calls based on a user input. \
                          the app displays data in a clear and intuitive way, all the icons are dynamic and change\
                          based on the data recieved. at the stage in which is now, the app is \
                          a display of knowledge in gathering and displaying data asyncronusly, storing data in localstorage\
                          performing parallel asyncronus calls. The project was realized in Javascript React, using hooks and Context api',
			TechStack: ['Javascript', 'HTML', 'CSS', 'React'],
			Index: 2,
			url: 'https://heroic-strudel-4e686e.netlify.app/',
			img: weatherApp,
		},
		{
			Name: 'Watch List',
			Description:
				'In order to give an answer to the modern question "What platform streams my favourite tv series" or \
			              "I wander if this Movie is on Netflix ?!" , I, Luca Porcelli, bring you the solution ! \
						  thanks to the power of ... other people collecting the data ... I can show them to you , and solve your queries!\
						  ',
			TechStack: ['HTML', 'CSS', 'React', 'Javascript'],
			Index: 3,
			url: 'https://storied-bonbon-d38d5f.netlify.app',
			img: watchList,
		},
	]);

	return (
		<ProjectContext.Provider value={[projects, setProjects]}>
			{children}
		</ProjectContext.Provider>
	);
};

export default ProjectContextProvider;
