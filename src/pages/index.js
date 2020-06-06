import React, { Fragment } from "react"
import Header from "../components/header"
import About from "../components/about"
import Experience from "../components/experience"
import Tech from "../components/tech"

const Home = () => {
  return (
    <Fragment>
      <Header />
      <About />
      <Experience />
      <Tech />
    </Fragment>
  )
}

export default Home
