import { projectImages } from './Variables/projectImages.jsx'

const Projects = (props) => {

    return props?.items?.
    length === 0 ?

    <h1>Projects empty</h1>

    : 

<div>
    <h1>{props.projects}</h1>
    <section className = "projects-container">
        <p>
           Project 1: {props.eachProject.project1}
        </p>
        <img   style={{ width: '50%', height: 'auto' }} src={projectImages.project1}></img>
        <p>
            Project 2: {props.eachProject.project2}
        </p>
        <img   style={{ width: '50%', height: 'auto' }} src={projectImages.project2}></img>
        <p>
            Project 3: {props.eachProject.project3}
        </p>
        <img   style={{ width: '50%', height: 'auto' }} src={projectImages.project3}></img>
        <p>
            Project 4: {props.eachProject.project4}
        </p>
        <img   style={{ width: '50%', height: 'auto' }} src={projectImages.project4}></img>
        <p>
            Project 5: {props.eachProject.project5}
        </p>
        <img   style={{ width: '50%', height: 'auto' }} src={projectImages.project5}></img>
        <p>
            Project 6: {props.eachProject.project6}
        </p>
        <img   style={{ width: '50%', height: 'auto' }} src={projectImages.project6}></img>
        <p>
            Project 7: {props.eachProject.project7}
        </p>
        <img   style={{ width: '50%', height: 'auto' }} src={projectImages.project7}></img>
        <p>
            Project 8: {props.eachProject.project8}
        </p>
        <img   style={{ width: '50%', height: 'auto' }} src={projectImages.project8}></img>
        <p>
            Project 9: {props.eachProject.project9}
        </p>
        <img   style={{ width: '50%', height: 'auto' }} src={projectImages.project9}></img>
        <p>
            Project 10: {props.eachProject.project10}
        </p>
        <img   style={{ width: '50%', height: 'auto' }} src={projectImages.project10}></img>
        <p>
            Project 11: {props.eachProject.project11}
        </p>
        <img   style={{ width: '50%', height: 'auto' }} src={projectImages.project11}></img>
        <p>
            Project 12: {props.eachProject.project12}
        </p>
        <img   style={{ width: '50%', height: 'auto' }} src={projectImages.project12}></img>
        <p>
            Project 13: {props.eachProject.project13}
        </p>
        <img   style={{ width: '50%', height: 'auto' }} src={projectImages.project13}></img>
        <p>
            Project 14: {props.eachProject.project14}
        </p>
        <img   style={{ width: '50%', height: 'auto' }} src={projectImages.project14}></img>
    </section>
</div>

}

export default Projects