import React from "react"
import styled from "@emotion/styled"
import Typer from "../components/typer"

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 70vw 30vw;
`

const TitleContainer = styled.div`
  font-size: 10vh;
  align-self: end;
  padding-bottom: 60px;
  padding-left: 40px;
`

const MenuContainer = styled.div`
  font-size: 8vh;
  text-align: left;
  display: block;
`

const MenuItem = styled.a`
  display: inline-block;
  min-width: 220px;
  margin-left: 20px;
  color: black;
  text-decoration: none;
  &:hover {
    background-color: black;
    color: white;
  }
`

const VerticalLine = styled.div`
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  border-left: 2px solid black;
`

const menuOptions = [
  { content: "About me", href: "#about" },
  { content: "Experience", href: "#experience" },
  { content: "Tech", href: "#tech" },
  { content: "Contact", href: "/" },
]

const Header = () => {
  return (
    <Wrapper>
      <TitleContainer>
        <Typer strings={["Eric Jacobson^2400"]} />
      </TitleContainer>
      <MenuContainer>
        <VerticalLine>
          {menuOptions.map(option => (
            <MenuItem href={option.href}>{option.content}</MenuItem>
          ))}
        </VerticalLine>
      </MenuContainer>
    </Wrapper>
  )
}

export default Header
