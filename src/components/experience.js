import React from "react"
import styled from "@emotion/styled"
import Typer from "../components/typer"

import wayfair from "../../static/images/wayfair.png"
import bu from "../../static/images/bu.jpeg"
import redhat from "../../static/images/redhat.png"
import bose from "../../static/images/bose.png"

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
`

const ItemContainer = styled.div``

const Experience = () => {
  return (
    <Wrapper id="experience">
      <TitleContainer>Experience</TitleContainer>
      <ItemContainer>
        <img src={wayfair} height="75px" width="75px" />
      </ItemContainer>
    </Wrapper>
  )
}

export default Experience
