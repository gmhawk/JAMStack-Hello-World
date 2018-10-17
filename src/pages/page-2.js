import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Hi People, welcome to the second page</h1>
    <p>I don't have a longer story for you =( </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
