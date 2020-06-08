import React from "react"
import styled from "@emotion/styled"
import useMedia from "use-media"

import react from "../../static/images/icons/react.png"
import datadog from "../../static/images/icons/datadog.png"
import gatsby from "../../static/images/icons/gatsby.png"
import sass from "../../static/images/icons/sass.png"
import git from "../../static/images/icons/git.png"
import sql from "../../static/images/icons/sql.png"
import gql from "../../static/images/icons/gql.png"
import kibana from "../../static/images/icons/kibana.png"
import grafana from "../../static/images/icons/grafana.png"
import js from "../../static/images/icons/js.png"
import ts from "../../static/images/icons/ts.png"
import php from "../../static/images/icons/php.png"
import webpack from "../../static/images/icons/webpack.png"
import python from "../../static/images/icons/python.png"
import flask from "../../static/images/icons/flask.png"

const Wrapper = styled.section`
  min-height: calc(100vh - 25px); // Leave space for the footer
  width: 100vw;
  position: relative;
`

const TitleContainer = styled.div`
  font-size: 8vh;
  padding-top: 20px;
  align-self: start;
  text-align: center;
  margin-bottom: 40px;
  @media only screen and (min-width: 540px) {
    font-size: 10vh;
  }
`

const GridContainer = styled.div`
  display: grid;
  max-width: 100vw;
  margin: auto;
  grid-template-columns: auto auto auto;
  @media only screen and (min-width: 540px) {
    max-width: 70vw;
  }
  @media only screen and (min-width: 720px) {
    grid-template-columns: auto auto auto auto;
  }
  @media only screen and (min-width: 960px) {
    grid-template-columns: auto auto auto auto auto;
  }
`

const ItemContainer = styled.a`
  padding: 15px;
  display: flex;
  justify-content: center;
`

const Tech = [
  { url: "https://reactjs.org/", img: react, alt: "React JS" },
  { url: "https://www.php.net/", img: php, alt: "PHP" },
  { url: "https://www.typescriptlang.org/", img: ts, alt: "TypeScript" },
  { url: "https://www.gatsbyjs.org/", img: gatsby, alt: "Gatsby JS" },
  { url: "https://sass-lang.com/", img: sass, alt: "SASS" },
  { url: "https://grafana.com/", img: grafana, alt: "Grafana" },
  {
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    img: js,
    alt: "JavaScript",
  },
  { url: "https://www.elastic.co/kibana", img: kibana, alt: "Kibana" },
  { url: "https://graphql.org/", img: gql, alt: "GraphQL" },
  { url: "https://git-scm.com/", img: git, alt: "Git" },
  { url: "https://webpack.js.org/", img: webpack, alt: "Webpack" },
  {
    url: "https://azure.microsoft.com/en-us/services/sql-database/",
    img: sql,
    alt: "SQL",
  },
  { url: "https://www.datadoghq.com/", img: datadog, alt: "Datadog" },
  { url: "https://www.python.org/", img: python, alt: "Python" },
  {
    url: "https://flask.palletsprojects.com/en/1.1.x/",
    img: flask,
    alt: "Flask",
  },
]

const Skills = () => {
  const isDesktop = useMedia({ minWidth: 540 })
  const imgDims = isDesktop
    ? { height: "75px", width: "auto" }
    : { height: "50px", width: "auto" }
  return (
    <Wrapper id="skills">
      <TitleContainer>Skills</TitleContainer>
      <GridContainer>
        {Tech.map(({ url, img, alt }) => (
          <ItemContainer href={url} target="_blank" rel="noreferrer">
            <img src={img} alt={alt} {...imgDims} />
          </ItemContainer>
        ))}
      </GridContainer>
    </Wrapper>
  )
}

export default Skills
