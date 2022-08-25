import {ImFacebook2,ImGithub,ImLinkedin}from 'react-icons/im'
function QuickLinks() {
    return (             
         <div className='quickLinks'>
           <a href='https://www.facebook.com/lukasx' target='blank'><ImFacebook2/></a>
           <a href='https://github.com/Lukasxs93' target='blank'><ImGithub/></a>
           <a href='https://linkedin.com/in/luca-porcelli-2367a7210' target='blank'><ImLinkedin/></a>
         </div>        
     );
}

export default QuickLinks;