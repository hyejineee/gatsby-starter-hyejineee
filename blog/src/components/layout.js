import React from "react";

import style from "../styles/main.module.css";
import Category from "./categories";
import HeaderBio from "./header-bio";
import useSiteMetadata from "../hooks/get-site-mata";

const Layout = ({ children }) => {
  
  const {siteMetadata} = useSiteMetadata();

  return (
    <div className={style.container}>
      <header className={style.header}>
        <div>
          <p> hyejineee.dev </p>
        </div>
        <div className={style.wrapper}>
          <HeaderBio siteMetadata={siteMetadata} />
          <Category categories={siteMetadata.categories} />
        </div>
      </header>

      <main className={style.wrapper}>{children}</main>
    </div>
  );
};
export default Layout;
