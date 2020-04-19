import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Layout from "../layout/Layout"
import HomePage from "./home/HomePage"
import CounterPage from "./counter/CounterPage"

const Router = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/counter" exact component={CounterPage}/>
        <Route path="/" component={HomePage} />
      </Switch>
    </Layout>
  )
}

export default Router
