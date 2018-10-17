import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>My name is Alan and I'm a Software Engineer</p>
    <p>Born and raised in the web back when AOL was still alive</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage