const About = (props) => {

// If no props //

    return props?.items?.
length === 0 ?

<h1>About Empty</h1>

// Else render about section // 

: 

<div>
    <h1 className="header">{props.header}</h1>
    <h2 className="banner">{props.banner}</h2>
    <div className = "bio-container">
    <img className="profilepic" src={props.profilepic}></img>
    <div className="bio">
        <h2>Biography</h2>
        <p>
    I am a recent graduate from the UC Santa Cruz BMB major, and I am currently pursuing a certificate in full-stack web development in order to pursue a career in bioinformatics. I have over 15 years of work experience in several different fields including telecommunication, retail, fitness, and event planning.
        </p>
    </div>
</div>
</div>


};

export default About;