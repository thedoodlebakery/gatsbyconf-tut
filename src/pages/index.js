import * as React from "react";
import Layout from '../components/layout';
import CallToAction from '../components/callToAction';
import {StaticImage} from 'gatsby-plugin-image'

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
    <h2>Welcome to the Verbose Reader blog!</h2>
    <StaticImage 
    src="../images/flower-girl.jpg" 
    alt="Our cute baby girl."
    placeholder="blurred"
    layout="fixed"
    width={1000}
    height={600}
    />
    <CallToAction></CallToAction>
    </Layout>
    
  )
}

export default IndexPage
