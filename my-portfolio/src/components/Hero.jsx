import Typed from 'react-typed';
function Hero() {
  
    return ( 
        <div className="hero">
             <Typed
             strings={['Hi my name is Luca and i like: Coding wonderfoul web apps',
		'Hi my name is Luca and i like: 🎣Fishing🎣',
		'Hi my name is Luca and i like: 🦜🐱 pets 🐶🐠',
		'Hi my name is Luca and i like: Perplexing my Arduino ©️',
		'Hi my name is Luca and i like: The Matrix 🔵💊🔴',
		'Hi my name is Luca and i like: New Challenges!',]}
        typeSpeed={50}
        backSpeed={50}
        
             />
              
        </div>
        
     );
}

export default Hero;