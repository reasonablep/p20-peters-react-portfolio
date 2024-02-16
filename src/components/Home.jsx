function Home(props) 
{
    return (
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

        </div>
    )
}

export default Home;