import { useContext } from "react";
import { ViewContext } from "../context/ViewContext";

function NavLinks() {

     const {setView} = useContext(ViewContext);
    

    const setAbout =()=>{
        setView('about');
    }
    const setProjects=()=>{
        setView('projects');
    }
    const setWork =()=>{
        setView('work');
    }

    return ( 
        <ul className="navigationLinksContainer">
            <li><button onClick={setAbout}>About</button></li>
            <li><button onClick={setProjects}>Projects</button></li>
            <li><button onClick={setWork}>Work With Me</button></li>
        </ul>
     );
}

export default NavLinks;