import React from "react"
import styled from "@emotion/styled"
import useMedia from "use-media"
import img1 from "../../static/images/img1.jpeg"

const Wrapper = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  @media only screen and (min-width: 540px) {
    display: grid;
    grid-template-columns: 50vw 50vw;
  }
`

const TitleContainer = styled.div`
  font-size: 8vh;
  text-align: center;
  @media only screen and (min-width: 540px) {
    font-size: 10vh;
  }
`

const ImageContainer = styled.div`
  background: url(${img1});
  background-position: center;
  background-size: cover;
  height: 40vh;
  @media only screen and (min-width: 540px) {
    height: 100vh;
  }
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
  const isDesktop = useMedia({ minWidth: 540 })
  return (
    <Wrapper id="about">
      {isDesktop && <ImageContainer />}
      <TextContainer>
        <TitleContainer>About me</TitleContainer>
        <ParagraphContainer>
          Hey! I'm Eric. I began my coding journey back in high school and got
          my B.A. in Computer Science from Boston University. My attraction to
          computer science and programming is driven by my determination to
          solve problems. I'm always excited to take on a new challenge and
          learn how to use the newest and greatest tech. Outside of work I love
          to travel and spend time outside. My favorite country is Denmark where
          I spent a semester as an exchange student at the University of
          Copenhagen.
        </ParagraphContainer>
      </TextContainer>
      {!isDesktop && <ImageContainer />}
    </Wrapper>
  )
}

export default About
