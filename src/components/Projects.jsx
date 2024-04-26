import { projectImages } from './Variables/projectImages.jsx'

const Projects = (props) => {

    return props?.items?.
        length === 0 ?

        <h1>Projects empty</h1>

        :

        <div id='projects'>
            <h1>{props.projects}</h1>
            <section className="projects-container">
                <p>
                    Project 1:{props.eachProject.project1}
                </p>
                <a href="https://reasonablep.github.io/password-generator-challenge-1/"
                    target="blank">
                <img style={{ width: '50%', height: 'auto' }} src={projectImages.project2}></img>
                </a>
                <p>
                    Project 2:{props.eachProject.project2}
                </p>
                <a href="https://reasonablep.github.io/weather-dash-challenge/" target="_blank">
                <img style={{ width: '50%', height: 'auto' }} src={projectImages.project2}></img>
                </a>
                <p>
                    Project 3:{props.eachProject.project3}
                </p>
                <a href="https://reasonablep.github.io/JavaScript_code_quiz_p4/" target="_blank"><img style={{ width: '50%', height: 'auto' }} src={projectImages.project3}></img>
                </a>
                <p>
                    Project 4:{props.eachProject.project4}
                </p>
                <a href="https://tonymagr.github.io/project1-trailer-phone-imyou/" target="_blank">
                    <img style={{ width: '50%', height: 'auto' }} src={projectImages.project4}></img>
                </a>
                <p>
                    Project 5:{props.eachProject.project5}
                </p>
                <a href="https://p14-techie-thoughts-ea6c22c69d49.herokuapp.com/login" target="_blank">
                    <img style={{ width: '50%', height: 'auto' }} src={projectImages.project5}></img>
                </a>
                <p>
                    Project 6:{props.eachProject.project6}
                </p>
                <a href="https://leveluplounge-4438f7fc5ebe.herokuapp.com/" target="_blank">
                    <img style={{ width: '50%', height: 'auto' }} src={projectImages.project6}></img>
                </a>
            </section>
        </div>

}

export default Projects