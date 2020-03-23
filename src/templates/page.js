import React from "react"
import Layout from "../components/layout"

const page = ({ pageContext }) => {
  return (
    <Layout>
      <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
    </Layout>
  )
}

export default page
