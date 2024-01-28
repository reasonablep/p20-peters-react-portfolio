const About = (props) => {

    return props?.items?.
        length === 0 ?

        <h1>About Empty</h1>

        :

        <div>
            <h1 className="header">Peter's
             <span style={{
                color: 'white',
                fontWeight: '800'
             }}>Portfolio</span>
             Page</h1>
            <h2 className="banner">{props.banner}</h2>
            <p>Because the best way to
                <span style={{
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'white',
                    fontWeight: '900',
                }}>L E A R N</span>
                is to <br></br>
                <span style={{
                    color: 'white',
                    fontWeight: '800'
                }}>
                    <a href='#math-generators'>P L A Y</a>
                </span>
                </p>
            <div className="bio-container">
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