import React from "react"
import styled from "@emotion/styled"

import wayfair from "../../static/images/wayfair.png"
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

const SubtitleContainer = styled.a`
  font-size: 4vh;
  display: flex;
  justify-content: center;
  color: #575757;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const ItemContainer = styled.div`
  font-family: "Typewriter Demi";
  display: flex;
  flex-direction: row;
  padding: 10px;
  max-width: 95vw;
  margin: auto;
  @media only screen and (min-width: 900px) {
    max-width: 90vw;
  }
  @media only screen and (min-width: 1020px) {
    max-width: 70vw;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`

const ItemTitle = styled.div`
  font-size: 1.4rem;
`

const ItemSubtitle = styled.div`
  font-size: 1rem;
  color: #575757;
`

const Description = styled.div`
  font-size: 1rem;
`

const Careers = [
  {
    icon: wayfair,
    company: "Wayfair",
    role: "Software Engineer",
    dates: "Jul 2019 - Present",
    location: "Boston, MA",
    description:
      "Full stack developer on the Hot Deals and Gateway team where we engineer the landing page for our paid advertising as well as build our email acquisition points for all Wayfair geographies and brands.",
  },
  {
    icon: redhat,
    company: "Red Hat",
    role: "Research Intern",
    dates: "Jun 2018 - Dec 2018",
    location: "Boston, MA",
    description:
      "Member of the OpenShift on OpenStack team developing Watch Endpoints as a Service (WEaaS). The goal of WEaaS is to speed up Kuryr, an OpenStack containers networking tool, by listening for networking events. WEaaS replaces current Kuryr polling methods by tapping directly into OpenStack’s messaging queue. Speaker at DevConf.us 2018, presented on development challenges in regard to an integration project such as OpenShift on OpenStack.",
  },
  {
    icon: bose,
    company: "Bose Corporation",
    role: "Software Engineering Intern",
    dates: "May 2017 - Aug 2017",
    location: "Stowe, MA",
    description:
      "Successfully developed a universal tool dependency resolver for Bose® automotive amplifier software. This tool allows amplifier software to be built and tested on any machine. Wrote design, user, and maintainer documentation for the universal tool dependency resolver.",
  },
]

const Experience = () => {
  return (
    <Wrapper id="experience">
      <TitleContainer>Experience</TitleContainer>
      <SubtitleContainer download="" target="_blank" rel="noreferrer" href="/">
        Resume (.pdf)
      </SubtitleContainer>
      {Careers.map(({ icon, company, role, dates, location, description }) => (
        <ItemContainer>
          <img src={icon} alt={company} height="75px" width="75px" />
          <TextContainer>
            <ItemTitle>
              {role}, {company}
            </ItemTitle>
            <ItemSubtitle>
              {dates}, {location}
            </ItemSubtitle>
            <Description>{description}</Description>
          </TextContainer>
        </ItemContainer>
      ))}
    </Wrapper>
  )
}

export default Experience
