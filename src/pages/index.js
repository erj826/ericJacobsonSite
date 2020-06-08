import React, { Fragment } from "react"
import Header from "../components/header"
import About from "../components/about"
import Experience from "../components/experience"
import Skills from "../components/skills"
import Footer from "../components/footer"

const Home = () => {
  return (
    <Fragment>
      <Header />
      <About />
      <Experience />
      <Skills />
      <Footer />
    </Fragment>
  )
}

export default Home
