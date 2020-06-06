import React, { Fragment } from "react"
import Header from "../components/header"
import About from "../components/about"
import Experience from "../components/experience"

const Home = () => {
  return (
    <Fragment>
      <Header />
      <About />
      <Experience />
    </Fragment>
  )
}

export default Home
