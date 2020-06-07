import React from "react"
import styled from "@emotion/styled"
import Typer from "../components/typer"

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
import java from "../../static/images/icons/java.png"

const Wrapper = styled.section`
  height: 100vh;
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
  { url: "https://reactjs.org/", img: react },
  { url: "https://www.php.net/", img: php },
  { url: "https://www.typescriptlang.org/", img: ts },
  { url: "https://www.gatsbyjs.org/", img: gatsby },
  { url: "https://sass-lang.com/", img: sass },
  { url: "https://grafana.com/", img: grafana },
  { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", img: js },
  { url: "https://www.elastic.co/kibana", img: kibana },
  { url: "https://graphql.org/", img: gql },
  { url: "https://git-scm.com/", img: git },
  { url: "https://webpack.js.org/", img: webpack },
  { url: "https://azure.microsoft.com/en-us/services/sql-database/", img: sql },
  { url: "https://www.datadoghq.com/", img: datadog },
  { url: "https://www.python.org/", img: python },
  { url: "https://www.java.com/en/", img: java },
]

const Tech = () => {
  return (
    <Wrapper id="tech">
      <TitleContainer>Current Tech</TitleContainer>
      <GridWrap>
        {Technologies.map(({ url, img }) => (
          <a href={url}>
            <img src={img} height="75px" width="auto" />
          </a>
        ))}
      </GridWrap>
    </Wrapper>
  )
}

export default Tech
