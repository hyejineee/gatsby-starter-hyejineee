import React from "react"
import { graphql } from "gatsby"
import style from "./post-detail.module.css"
import Layout from "../../components/layout";


export default function Template({data}) {
  const { markdownRemark: { frontmatter, html } } = data;
  return (
    <Layout>
        <div className={style.wrapper}>
            <h1 className={style.title}>{frontmatter.title}</h1>
            <p className={style.date}>{frontmatter.date}</p>
            <div
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY년 MM월 DD일 ")
        path
        title
      }
    }
  }
`