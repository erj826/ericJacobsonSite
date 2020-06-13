import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import About from "../components/about"
import Experience from "../components/experience"
import Skills from "../components/skills"
import Footer from "../components/footer"

const Home = () => {
  return (
    <Fragment>
      <Helmet title="Eric's Site" defer={false} />
      <Header />
      <About />
      <Experience />
      <Skills />
      <Footer />
    </Fragment>
  )
}

export default Home
