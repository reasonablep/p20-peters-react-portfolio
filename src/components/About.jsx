const About = ({profilepic}) => {

    return (

        <div id='about'>
            <div className="bio-container">
                <img src={profilepic}></img>
                <div className="bio">
                    <h2>Biography</h2>
                    <p>
                        I am a recent graduate from the UC Santa Cruz BMB major, and I am currently pursuing a certificate in full-stack web development in order to pursue a career in bioinformatics. I have over 15 years of work experience in several different fields including telecommunication, retail, fitness, and event planning.
                    </p>
                </div>
            </div>
        </div>
    )

};

export default About;