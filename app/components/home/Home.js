import React from 'react'
import { Link } from 'react-router-dom'

import homeStyle from "./assets/Home.module.scss"

const Home = () => {
  return (
    <div className={homeStyle.container} data-tid="container">
        <h2>Home</h2>
        <Link to="/counter">to Counter</Link>
      </div>
  )
}

export default Home