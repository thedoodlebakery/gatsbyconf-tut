import React from 'react';
import {Link} from 'gatsby';

const Layout = () =>{
    <header>
        <title>Verbose Reader</title>
        <nav>
            <Link to="/index">Home</Link>
            <Link to="/about">About</Link>
        </nav>
    </header>
    
}

export default Layout;