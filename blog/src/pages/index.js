import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import usePosts from "../hooks/get-posts"
import PostList from "../components/post-list";

const IndexPage = () =>{
  const {edges} = usePosts();

  return (
    <Layout>
       <SEO title="Home" />
      <PostList posts={edges} />
    </Layout>
  );
}

export default IndexPage



