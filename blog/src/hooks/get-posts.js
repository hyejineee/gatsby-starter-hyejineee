import { graphql, useStaticQuery } from "gatsby";

const usePosts = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
          edges {
            node {
              frontmatter {
                category
                date
                path
                summary
                tags
                title
              }
            }
          }
        }
      }
    `
  );

  return allMarkdownRemark;
};
export default usePosts;


// const fakeData = JSON.parse(`{
//   "edges": [
//     {
//       "node": {
//         "frontmatter": {
//           "category": "Sample",
//           "date": "2018-08-15",
//           "path": "/hello-world/",
//           "summary": "You can create your own blog with Gatsby!",
//           "tags": [
//             "tag",
//             "should",
//             "be",
//             "array"
//           ],
//           "title": "Hello, World!"
//         }
//       }
//     },
//     {
//       "node": {
//         "frontmatter": {
//           "category": "Sample",
//           "date": "2018-08-16",
//           "path": "/hello-world/",
//           "summary": "You can create your own blog with Gatsby!",
//           "tags": [
//             "tag",
//             "should",
//             "be",
//             "array"
//           ],
//           "title": "Hello, World!"
//         }
//       }
//     },
//     {
//       "node": {
//         "frontmatter": {
//           "category": "Sample",
//           "date": "2018-08-17",
//           "path": "/hello-world/",
//           "summary": "You can create your own blog with Gatsby!",
//           "tags": [
//             "tag",
//             "should",
//             "be",
//             "array"
//           ],
//           "title": "Hello, World!"
//         }
//       }
//     },
//     {
//       "node": {
//         "frontmatter": {
//           "category": "Sample",
//           "date": "2018-08-18",
//           "path": "/hello-world/",
//           "summary": "You can create your own blog with Gatsby!",
//           "tags": [
//             "tag",
//             "should",
//             "be",
//             "array"
//           ],
//           "title": "웹을 지탱하는 기술"
//         }
//       }
//     },
//     {
//       "node": {
//         "frontmatter": {
//           "category": "Sample",
//           "date": "2018-08-19",
//           "path": "/hello-world/",
//           "summary": "You can create your own blog with Gatsby!",
//           "tags": [
//             "tag",
//             "should",
//             "be",
//             "array"
//           ],
//           "title": "Hello, World!"
//         }
//       }
//     },
//     {
//       "node": {
//         "frontmatter": {
//           "category": "Sample",
//           "date": "2018-08-20",
//           "path": "/test/",
//           "summary": "You can create your own blog with Gatsby!",
//           "tags": [
//             "tag",
//             "should",
//             "be",
//             "array"
//           ],
//           "title": "개츠비 테스트 환경 만들기ㅣ"
//         }
//       }
//     }
//   ]
// }`);
