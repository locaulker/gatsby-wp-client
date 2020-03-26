import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"
import SiteInfo from "./SiteInfo"

const MainMenuWrapper = styled.div`
  display: flex;
  background-color: rgba(3, 27, 77, 1);
`

const MainMenuInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  width: 960px;
  height: 100%;
`

const MainItem = styled(Link)`
  color: white;
  display: block;
  padding: 8px 16px;
`

const MainMenu = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          wpmenu: allWordpressWpApiMenusMenusItems(
            filter: { name: { eq: "Main Menu" } }
          ) {
            edges {
              node {
                name
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
        <MainMenuWrapper>
          <MainMenuInner>
            <SiteInfo />
            {props.wpmenu.edges[0].node.items.map(item => (
              <MainItem to={item.object_slug} key={item.title}>
                {item.title}
              </MainItem>
            ))}
          </MainMenuInner>
        </MainMenuWrapper>
      )}
    />
  )
}

export default MainMenu
