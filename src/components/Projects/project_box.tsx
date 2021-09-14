import React, {Component} from "react";
import Project_Tag_Bar from "./Project_Tags"

//importing the CSS styling for the project box element
import './project_box.css';

//Project Box class containing all the elements for a single project box
class Project_Box extends Component{

    //function to render the project box on the react app
    render(){

        return(

            //div containing the project box
            <div className='project-box'>
            
            <div className='header'>
            <img src='../../../media/dog_icon.png'/>
            <h3> Dog Fixations </h3>
            <p> - Woof + Eye-tracking headsets! </p>
            </div>
            
            <div className = 'project-content'>
            <ul>
                <li>Main content</li>
                <li>Main content</li>
                <li>Main content</li>
            </ul>
            </div>

            <div className = 'project-tags'>
            {/* <Project_Tag_Bar/> */}
            </div>

            </div>
        )
    }

}

export default Project_Box