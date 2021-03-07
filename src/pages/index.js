import * as React from "react";
import Layout from '../components/layout';
import CallToAction from '../components/callToAction'

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
    <h2>Welcome to the Verbose Reader blog!</h2>
    <CallToAction></CallToAction>
    </Layout>
    
  )
}

export default IndexPage
