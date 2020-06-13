// query for events and create pages
exports.createPages = async ({ actions, graphql, reporter }) => {
    const basePath = "/"
    
    actions.createPage({
      path: basePath,
      component: require.resolve("./src/templates/post-list-template.js"),
    })
  
    const result = await graphql(`
      query {
        allEvent(sort: { fields: startDate, order: ASC }) {
          nodes {
            id
            slug
          }
        }
      }
    `)
  
    if (result.errors) {
      reporter.panic("error loading events", result.errors)
      return
    }
  
    const events = result.data.allEvent.nodes
    events.forEach(event => {
      const slug = event.slug
      actions.createPage({
        path: slug,
        component: require.resolve("./src/templates/post-template.js"),
        context: {
          eventID: event.id,
        },
      })
    })
  }