import React, { Fragment } from "react"
import styled from "@emotion/styled"
import Typer from "../components/typer"
import scrollTo from "gatsby-plugin-smoothscroll"
import useMedia from "use-media"

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  @media only screen and (min-width: 540px) {
    display: grid;
    grid-template-columns: 70vw 30vw;
  }
`

const TitleContainer = styled.div`
  font-size: 8vh;
  padding: 40px 0 0 40px;
  @media only screen and (min-width: 540px) {
    font-size: 10vh;
    align-self: end;
    padding: 0 0 60px 40px;
  }
`

const MenuContainer = styled.div`
  font-size: 6vh;
  text-align: center;
  display: block;
  @media only screen and (min-width: 540px) {
    font-size: 8vh;
    text-align: left;
  }
`

const MenuItem = styled.a`
  cursor: pointer;
  display: inline-block;
  min-width: 250px;
  color: white;
  background-color: black;
  text-decoration: none;
  margin-bottom: 3px;
  @media only screen and (min-width: 540px) {
    color: black;
    background-color: white;
    min-width: 270px;
    margin-left: 20px;
    margin-bottom: 0;
    &:hover {
      background-color: black;
      color: white;
    }
  }
`

const VerticalLine = styled.div`
  position: absolute;
  border-right: 2px solid black;
  border-left: 2px solid black;
  bottom: 15%;
  @media only screen and (min-width: 540px) {
    border-right: none;
    top: 50%;
    bottom: 0;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
`

const menuOptions = [
  { content: "About me", section: "#about" },
  { content: "Experience", section: "#experience" },
  { content: "Skills", section: "#skills" },
]

const Header = () => {
  const isDesktop = useMedia({ minWidth: 540 })
  return (
    <Wrapper>
      <TitleContainer>
        {isDesktop && <Typer strings={["Eric Jacobson^800"]} />}
        {!isDesktop && (
          <Fragment>
            <Typer strings={["Eric"]} />
            <br />
            <Typer strings={["^800Jacobson^800"]} />
          </Fragment>
        )}
      </TitleContainer>
      <MenuContainer>
        <VerticalLine>
          {menuOptions.map((option, index) => (
            <MenuItem onClick={() => scrollTo(option.section)} key={index}>
              {option.content}
            </MenuItem>
          ))}
          <MenuItem
            href="https://github.com/erj826"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </MenuItem>
        </VerticalLine>
      </MenuContainer>
    </Wrapper>
  )
}

export default Header
