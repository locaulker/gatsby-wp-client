import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

const MainMenu = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          wpmenu: allWordpressWpApiMenusMenusItems {
            edges {
              node {
                items {
                  title
                  object_slug
                }
              }
            }
          }
        }
      `}
      render={props => (
        <div>
          {props.wpmenu.edges[0].node.items.map(item => (
            <Link to={item.object_slug} key={item.title}>
              {item.title}
            </Link>
          ))}
        </div>
      )}
    />
  )
}

export default MainMenu
