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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ParagraphContainer>
      </TextContainer>
      {!isDesktop && <ImageContainer />}
    </Wrapper>
  )
}

export default About
