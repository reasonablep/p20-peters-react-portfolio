const Contact = (props) => {

    return props?.items?.
    length === 0 ?

    <h1>No data</h1>
    
    :

    // Contact component

    <div>
        <h1 className="contact-me">{props.contactbanner}</h1>
        <h2>
            <p>
                <ul className="contact-me">
                    <li><a href="https://www.linkedin.com/in/peter-j-martinez-49b81771">Linkedin</a></li>
                    <li><a href="mailto: pmrtnz@me.com">E-mail</a></li>
                    <li><a href="">Resume</a></li>
                </ul>
            </p>
        </h2>
    </div>
}

export default Contact;