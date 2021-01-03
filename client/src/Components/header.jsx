import React, { useState } from 'react'
import '../styles/header.css'
import { Link } from '@reach/router';


const Header = props => {

    return (
        <div id="header">
            <Link className="links" to="/">Home</Link>
            <Link className="links" to="/Login">Login</Link>
            <Link className="links" to="/articles/new">Add Article</Link>
        </div>
    )

}

export default Header;