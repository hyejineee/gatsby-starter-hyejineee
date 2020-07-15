import React from "react"

import style from "../styles/main.module.css"
import Header from "./header/header"
import useSiteMetadata from "../hooks/get-site-mata"

const Layout = ({ children }) => {
  const { siteMetadata } = useSiteMetadata()

  return (
    <div className={style.container}>
      <header className={style.header}>
        <Header />
      </header>

      <main className={style.wrapper}>{children}</main>
    </div>
  )
}
export default Layout
