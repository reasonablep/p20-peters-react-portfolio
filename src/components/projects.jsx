import { projectImages } from './Variables/projectImages.jsx'
import React, { useState, useEffect } from 'react'

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
        <img   style={{ width: '50%', height: 'auto' }} src={projectImages.project2}></img>
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
    </section>
</div>

}

export default Projects