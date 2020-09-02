import React from "react"
import Layout from "../components/layout"
import { Container } from "../styles/globalStyles"
import HeroCopy from "../components/HeroCopy"
import ProjectSkills from "../components/projects/ProjectSkills"
import ProjectOneColumn from "../components/projects/ProjectOneColumn"
import { ProjectCopy } from "../styles/projectStyles"
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
  "A new agency website built on WordPress featuring a custom theme that is fully managable through the WordPress CMS, making use of the Advanced Custom Fields plugin.",
  "GSAP-powered animations throughout the site bring the website to life and make for a fun and engaging user experience.",
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
              Over the past few months I have been designing and developing a{" "}
              <a
                href="https://kemosabe.girltuesday.net"
                target="_blank"
                rel="noreferrer"
              >
                new website
              </a>{" "}
              for Kemosabe that better represents them as an agency. We explored
              who they are and what makes them unique, exposing their "inch
              wide, mile deep" philosophy. This formed the central concept for
              their new website.
            </>
          }
        />
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
      <ProjectOneColumn
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
          I brought this philosophy front and centre with a bold animation
          penetrating a "mile deep" throughout their projects and applied it
          across the site.
        </ProjectCopy>
      </Container>
      <ProjectOneColumn
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
          Working with the team, we approached the case studies with this core
          idea in mind, refreshing the copy and user experience to put their
          philosophy at the heart of every project.
        </ProjectCopy>
      </Container>
      <ProjectOneColumn
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
      <ProjectOneColumn
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
          Across the site the animations are powered with GSAP3 timelines with
          the homepage and the about page making use of the ScrollTrigger
          plugin.
        </ProjectCopy>
      </Container>
    </Layout>
  )
}

export default KemosabePage
