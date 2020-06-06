import React from "react"
import styled from "@emotion/styled"

import Typer from "../components/type_wrapper"
import img1 from "../../static/images/img1.jpeg"

const Wrapper = styled.div`
  background-color: white;
  height: 100vh;
  width: 100vw;
  position: absolute;
  display: flex;
  justify-content: space-between;
`

const TitleContainer = styled.div`
  font-size: 10vh;
  padding-top: 65vh;
  padding-left: 5vw;
  // max-width: 50vw;
  // display: inline-flex;
`

const ImageContainer = styled.div`
  // max-width: 50vw;
  // display: inline-flex;
`

export default function Home() {
  return (
    <Wrapper>
      <TitleContainer>
        <Typer strings={["Eric Jacobson^2400"]}/>
      </TitleContainer>
      <ImageContainer>
      <img src={img1} alt="" width="500" height="auto"/>
      </ImageContainer>
    </Wrapper>
  )
}
