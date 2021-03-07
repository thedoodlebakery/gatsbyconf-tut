import React from 'react';
import { Link } from 'gatsby';


const AboutMe = () => {
    return(
    <main>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
        <title>About Me</title>
        <h1>Hello! My name is Paula.</h1>
        <p>Welcome to my little corner of the internets.
        This is a blog where I talk about books that I like to read.</p>
    </main>
    )
}

export default AboutMe;