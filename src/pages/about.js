import React from 'react';
import Layout from '../components/layout';
import CallToAction from '../components/callToAction';

const AboutMe = () => {
    return(
    <Layout pageTitle="About Me">
        <p>Welcome to my part of the internets!<br/>
        This is my blog where I write about books I've read and so on.
        </p>
        <CallToAction></CallToAction>
    </Layout>
    )
}

export default AboutMe;