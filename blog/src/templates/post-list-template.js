import React from "react";
import usePosts from "../hooks/get-posts"
import Layout from "../components/layout";
import PostList from "../components/post-list";

const EventsTemplate = () => {

  const {edges} = usePosts();

  return (
    <Layout>
      <PostList posts={edges} />
    </Layout>
  );
};

export default EventsTemplate;
