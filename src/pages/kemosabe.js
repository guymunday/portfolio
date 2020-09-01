import React from "react"
import Layout from "../components/layout"
import { Container } from "../styles/globalStyles"
import HeroCopy from "../components/HeroCopy"
import ProjectSkills from "../components/projects/ProjectSkills"
// import ProjectOneColumn from "../components/projects/ProjectOneColumn"
import ProjectOneColumnPadding from "../components/projects/ProjectOneColumnPadding"
import { ProjectCopy } from "../styles/projectStyles"
// import Image from "../components/images"
import SEO from "../components/seo"


const projectSkills = [
  "HTML /",
  "SCSS /",
  "JavaScript /",
  "GSAP3 /",
  "WordPress /",
  "PHP /",
  "ACF /",
  "Adobe CC",
]
const projectMapped = projectSkills.map(skills => <li>{skills}</li>)

const projectScope = [
  "A new agency website built on WordPress that is fully managable through the WordPress CMS.",
  "GSAP-powered animations bring the website to life with",
]

const scopeMapped = projectScope.map(scope => <p>{scope}</p>)

const kemosabeLink = "https://kemosabe.girltuesday.net"

const KemosabePage = () => {
  return (
    <Layout>
      <SEO title="Kemosabe Agency Website" />
      <Container>
        <HeroCopy
          copy={
            <>
              I have been designing and developing a{" "}
              <a
                href="https://kemosabe.girltuesday.net"
                target="_blank"
                rel="noreferrer"
              >
                new website
              </a>{" "}
              for Kemosabe that better represented the agency. We explored who
              they are and what about them makes them unique, exposing their
              "inch wide, mile deep" philosophy and applying it throughout their
              website.
            </>
          }
        />
      </Container>
      <ProjectOneColumnPadding
        content={
          <>
            <video
              loop
              width="100%"
              height="auto"
              controls
              muted
              src={require("../assets/video/kemosabeHomePage.mp4")}
            ></video>
          </>
        }
      />
      <Container>
        <ProjectCopy>
          The core value of Kemosabe is their "inch wide, mile deep" approach to
          their work. I brought this front and centre with a bold animation
          penetrating a "mile deep" throughout their projects.
        </ProjectCopy>
      </Container>
      <ProjectSkills
        skills={projectMapped}
        scope={scopeMapped}
        link={kemosabeLink}
        linkDescription={
          <>
            Launch the test site{" "}
            <span role="img" aria-label="open book emoji">
              🚀
            </span>
          </>
        }
      />
      <ProjectOneColumnPadding
        content={
          <>
            <video
              loop
              width="100%"
              height="auto"
              controls
              muted
              src={require("../assets/video/kemosabeMenuOpen.mp4")}
            ></video>
          </>
        }
      />
      <ProjectOneColumnPadding
        content={
          <>
            <video
              loop
              width="100%"
              height="auto"
              controls
              muted
              src={require("../assets/video/kemosabeAboutScroll.mp4")}
            ></video>
          </>
        }
      />
      <Container>
        <ProjectCopy>
          All the animations are powered with GSAP3 timelines with use of the
          ScrollTrigger plugin on the homepage and the about page.
        </ProjectCopy>
      </Container>
      <ProjectOneColumnPadding
        content={
          <video
            loop
            width="100%"
            height="auto"
            controls
            muted
            src={require("../assets/video/kemosabeCaseStudy.mp4")}
          ></video>
        }
      />
      <Container>
        <ProjectCopy>
          Working with the team, we approached the case studies with the same
          philosophy, refreshing the copy to really capture the "inch wide" and
          the "mile deep" of every project.
        </ProjectCopy>
      </Container>
    </Layout>
  )
}

export default KemosabePage
