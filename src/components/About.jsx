const About = ({profilepic}) => {

    return (

        <div id='about'>
            <div className="bio-container">
                <img className="profilepic" src={profilepic}></img>
                <div className="bio">
                    <h2>Biography</h2>
                    <p>
                        I am a graduate student entering my final semester of the Master of Science in Bioinformatics (BMB) program at San Jose State University. I also hold a bachelors degree in Biochemistry and Molecular Biology (BMB) from the UC Santa Cruz in 2023. I have over 20 years of work experience in several different fields including AI model evaluation, telecommunication, retail, fitness, and event planning.
                    </p>
                </div>
            </div>
        </div>
    )

};

export default About;