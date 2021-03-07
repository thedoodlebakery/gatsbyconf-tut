import * as React from "react";
import {Link} from "gatsby";

// markup
const IndexPage = () => {
  return (
    <main>
    <Link to='/'>Home</Link>
    <Link to='/about'> About</Link>
      <title>Home Page</title>
      <h1>
        Congratulations
        <br />
        <span>— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      
    </main>
  )
}

export default IndexPage
