import React from "react"
import Layout from "../components/layout"
import { Container } from "../styles/globalStyles"
import HeroCopy from "../components/HeroCopy"
import ProjectSkills from "../components/projects/ProjectSkills"
import ProjectOneColumn from "../components/projects/ProjectOneColumn"
import { ProjectCopy } from "../styles/projectStyles"
// import ProjectOneColumnPadding from "../components/projects/ProjectOneColumnPadding"
import Image from "../components/images"
import HumanRotateSection from "../components/projects/HumanRotateSection"
import SEO from "../components/seo"


const projectSkills = [
  "HTML /",
  "CSS /",
  "JavaScript /",
  "jQuery /",
  "WordPress /",
  "ACF /",
  "Adobe AfterEffects",
]
const projectMapped = projectSkills.map(skills => <li>{skills}</li>)

const projectScope = [
  "An in-print and online magazine looking at sustainability within the travel industry.",
  "A fully custom WordPress theme that compliments the printed magazine and is user-friendly, utilising Advanced Custom Fields to make flexible layouts for the articles.",
]
const scopeMapped = projectScope.map(scope => <p>{scope}</p>)

const HumanPage = () => {
  return (
    <Layout>
      <SEO title="Human Magazine" />
      <Container>
        <HeroCopy
          copy={
            <>
              <a
                href="https://www.humanmagazine.co.uk"
                target="_blank"
                rel="noreferrer"
              >
                Human Magazine
              </a>{" "}
              is a compendium of sustainable initiatives and tangible outcomes
              from industry-leaders designed to inspire action, commitment and
              bold ideas. For its latest issue it was redesigned and I built a
              new website with fun, interactive features to compliment the
              collage aesthetic.
            </>
          }
        />
      </Container>
      <HumanRotateSection />
      <ProjectSkills
        skills={projectMapped}
        scope={scopeMapped}
        link="https://www.humanmagazine.co.uk"
        linkDescription={
          <>
            Launch the site{" "}
            <span role="img" aria-label="open book emoji">
              📖
            </span>
          </>
        }
      />
      <Container>
        <ProjectOneColumn
          content={
            <Image
              alt="Human Magazine on table girl reading"
              filename="images/human/humanMagOpen.jpg"
            />
          }
        />
      </Container>
      <ProjectOneColumn
        content={
          <video
            loop
            width="100%"
            height="auto"
            controls
            muted
            src={require("../assets/video/humanCoverAnimation.mp4")}
          ></video>
        }
      />
      <ProjectOneColumn
        content={
          <video
            loop
            width="100%"
            height="auto"
            controls
            muted
            src={require("../assets/video/humanMagFlip.mp4")}
          ></video>
        }
      />
      <Container>
        <ProjectCopy>
          I also had a lot of fun making promotional videos for social media and
          the launch party which was unfortunately postponed due to Covid-19
          lockdown.
        </ProjectCopy>
      </Container>
    </Layout>
  )
}

export default HumanPage
