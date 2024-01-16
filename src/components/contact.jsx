const Contact = (props) => {

    return props?.items?.
    length === 0 ?

    <h1>No data</h1>
    
    :

    <div>
        <h1 className="contact-me">{props.contactbanner}</h1>
        <h2>
            <p>
                <ul className="contact-me">
                    <li>Linkedin:</li>
                    <li>E-mail:</li>
                    <li>Resume:</li>
                </ul>
            </p>
        </h2>
    </div>
}

export default Contact;