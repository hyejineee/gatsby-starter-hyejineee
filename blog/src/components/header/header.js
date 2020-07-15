import React from "react"

// import Category from "./categories"
// import HeaderBio from "./header-bio"
import useSiteMetadata from "../../hooks/get-site-mata"

const Header = () => {

    const { siteMetadata } = useSiteMetadata();

  return (
    <header >
      <div>
        <p> {siteMetadata.title} </p>
      </div>
      <div >
        {/* <HeaderBio siteMetadata={siteMetadata} /> */}
        {/* <Category categories={siteMetadata.categories} /> */}
      </div>
    </header>
  )
}

export default Header
