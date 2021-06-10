const Navbar = (props) => {
    
    return(
        
        <div className="navbar is-link " role="navigation" aria-label="main navigation">
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                { props.category && props.category.map((info) => 
                <a className="navbar-item" key={info.id} onClick={() => props.selectCategory(info.id)} href="/">
                    {info.title}
                </a>
                )}
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                        <a className="button is-primary" href="/">
                            <strong>Sign up</strong>
                        </a>
                        <a className="button is-light" href="/"> 
                            Log in
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar