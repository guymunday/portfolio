import React from "react"
import Layout from "../components/layout"
import { Container } from "../styles/globalStyles"
import HeroCopy from "../components/HeroCopy"
import ProjectSkills from "../components/projects/ProjectSkills"
import ProjectOneColumn from "../components/projects/ProjectOneColumn"
// import ProjectOneColumnPadding from "../components/projects/ProjectOneColumnPadding"
import ProjectTwoColumnPadding from "../components/projects/ProjectTwoColumnPadding"
import ProjectTwoRowColumnPadding from "../components/projects/ProjectTwoRowColumnPadding"
import Image from "../components/images"
import SEO from "../components/seo"

const projectSkills = [
  "Adobe InDesign /",
  "Adobe PhotoShop /",
  "Adobe Illustrator /",
  "Adobe AfterEffects",
]
const projectMapped = projectSkills.map(skills => <li>{skills}</li>)

const projectScope = [
  "Kemosabe are the brand guardians for ANA across EMEA and we work with ANA on a daily basis.",
  `I have produced countless pieces of media for ANA, carefully following their "We Are Japan" brand guideline and positioning.`,
]
const scopeMapped = projectScope.map(scope => <p>{scope}</p>)

const AnaPage = () => {
  return (
    <Layout>
      <SEO title="All Nippon Airways" />
      <Container>
        <HeroCopy
          copy={
            <>
              All Nippon Airways (ANA) is the largest airline in Japan and the
              5th biggest airline in the world with an award-winning reputation
              for quality and luxury. I’ve worked with ANA producing countless
              pieces of digital and print media that is used all over the EMEA
              region. (More work coming soon{" "}
              <span role="img" aria-label="eyes emoji">
                👀
              </span>
              ).
            </>
          }
        />
      </Container>
      <ProjectOneColumn
        content={<Image alt="All Nippon Airways" filename="anaHero.jpg" />}
      />
      <ProjectSkills skills={projectMapped} scope={scopeMapped} />
      <ProjectTwoColumnPadding
        contentOne={
          <Image alt="All Nippon Airways" filename="anaRollOne.jpg" />
        }
        contentTwo={
          <Image alt="All Nippon Airways" filename="anaRollTwo.jpg" />
        }
      />
      <ProjectTwoRowColumnPadding
        contentOne={
          <Image alt="All Nippon Airways" filename="anaToteBag3.jpg" />
        }
        contentTwo={
          <Image alt="All Nippon Airways" filename="anaToteBag4.jpg" />
        }
        contentThree={
          <Image alt="All Nippon Airways" filename="anaToteBag1.jpg" />
        }
        contentFour={
          <Image alt="All Nippon Airways" filename="anaToteBag2.jpg" />
        }
      />
    </Layout>
  )
}

export default AnaPage
