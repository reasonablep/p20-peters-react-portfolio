const About = (props) => {

// If no props //

    return props?.items?.
length === 0 ?

<h1>About Empty</h1>

// Else render about section // 

: 

<div className="header">
    <h1>{props.banner}</h1>
    <h2>{props.title}</h2>
    <div className="about">
        <h1>About Me:</h1>
        <p>
            Biography
        </p>
        <img>{props.profilepic}</img>
    </div>
</div>


};

export default About;