import React from "react"
import styled from "@emotion/styled"
import img1 from "../../static/images/img1.jpeg"

const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
  position: relative;
  @media only screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 50vw 50vw;
  }
`

const TitleContainer = styled.div`
  font-size: 10vh;
  text-align: center;
`

const ImageContainer = styled.div`
  background-image: url(${img1});
  height: 100vh;
  background-size: cover;
`

const ParagraphContainer = styled.div`
  font-size: 1.3rem;
  padding: 12px 36px 36px;
`

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const About = () => {
  return (
    <Wrapper id="about">
      <ImageContainer />
      <TextContainer>
        <TitleContainer>About me</TitleContainer>
        <ParagraphContainer>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ParagraphContainer>
      </TextContainer>
    </Wrapper>
  )
}

export default About
