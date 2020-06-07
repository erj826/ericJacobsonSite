import React from "react"
import styled from "@emotion/styled"

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

const Wrapper = styled.section`
  height: calc(100vh - 25px); // Leave space for the footer
  width: 100vw;
  position: relative;
`

const TitleContainer = styled.div`
  font-size: 10vh;
  padding-top: 20px;
  align-self: start;
  text-align: center;
  margin-bottom: 40px;
`

const GridWrap = styled.div`
  display: grid;
  max-width: 70vw;
  margin: auto;
  grid-row-gap: 30px;
  justify-items: center;
  grid-template-columns: 0.2fr 0.2fr 0.2fr 0.2fr 0.2fr;
`

const Technologies = [
  { url: "https://reactjs.org/", img: react, alt: "React JS"},
  { url: "https://www.php.net/", img: php, alt: "PHP" },
  { url: "https://www.typescriptlang.org/", img: ts, alt: "TypeScript" },
  { url: "https://www.gatsbyjs.org/", img: gatsby, alt: "Gatsby JS" },
  { url: "https://sass-lang.com/", img: sass, alt: "SASS" },
  { url: "https://grafana.com/", img: grafana, alt: "Grafana" },
  { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", img: js, alt: "JavaScript" },
  { url: "https://www.elastic.co/kibana", img: kibana, alt: "Kibana" },
  { url: "https://graphql.org/", img: gql, alt: "GraphQL" },
  { url: "https://git-scm.com/", img: git, alt: "Git" },
  { url: null, img: null, alt: null},
  { url: "https://webpack.js.org/", img: webpack, alt: "Webpack" },
  { url: "https://azure.microsoft.com/en-us/services/sql-database/", img: sql, alt: "SQL" },
  { url: "https://www.datadoghq.com/", img: datadog, alt: "Datadog" },
  { url: null, img: null },
]

const Tech = () => {
  return (
    <Wrapper id="tech">
      <TitleContainer>Current Tech</TitleContainer>
      <GridWrap>
        {Technologies.map(({ url, img, alt }) => (
          <a href={url} target="_blank" rel="noreferrer">
            <img src={img} alt={alt} height="75px" width="auto" />
          </a>
        ))}
      </GridWrap>
    </Wrapper>
  )
}

export default Tech
