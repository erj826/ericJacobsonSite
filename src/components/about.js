import React from "react"
import styled from "@emotion/styled"
import Typer from "../components/typer"
import img1 from "../../static/images/img1.jpeg"

const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 50vw 50vw;
  position: relative;
`

const TitleContainer = styled.div`
  font-size: 10vh;
  padding-top: 16vh;
  align-self: start;
  text-align: center;
`

const ImageContainer = styled.div`
  background-image: url(${img1});
  height: 100vh;
  background-size: cover;
`

const ParagraphContainer = styled.div`
  font-size: 1.3rem;
  padding: 36px;
`

const About = () => {
  return (
    <Wrapper id="about">
      <ImageContainer />
      <div>
        <TitleContainer>
          <Typer strings={["About me"]} />
        </TitleContainer>
        <ParagraphContainer>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ParagraphContainer>
      </div>
    </Wrapper>
  )
}

export default About
