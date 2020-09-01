import React from "react"
import Layout from "../components/layout"
import { Container } from "../styles/globalStyles"
import HeroCopy from "../components/HeroCopy"
import ProjectSkills from "../components/projects/ProjectSkills"
// import ProjectOneColumn from "../components/projects/ProjectOneColumn"
import ProjectOneColumnPadding from "../components/projects/ProjectOneColumnPadding"
import ProjectTwoColumnPadding from "../components/projects/ProjectTwoColumnPadding"
import ProjectTwoRowPadding from "../components/projects/ProjectTwoRowPadding"
import Image from "../components/images"
import { ProjectCopy } from "../styles/projectStyles"
import SEO from "../components/seo"

const projectSkills = [
  "HTML /",
  "SCSS /",
  "JavaScript /",
  "GSAP3 /",
  "WordPress /",
  "PHP /",
  "Adobe After Effects /",
  "Adobe Illustrator /",
  "Gatsby.js /",
  "CSS in JS /",
  "Prismic /",
  "Netlify"
]
const projectMapped = projectSkills.map(skills => <li>{skills}</li>)

const projectScope = [
  "On-going project to help give young creatives valuble information about the creative industries, its structure and what oppotunities are out there.",
  "The current landing page is built on WordPress and I am in the process of building the full website with JAMstack technologies Gatsby.js, Prismic CMS and Netlify.",
]
const scopeMapped = projectScope.map(scope => <p>{scope}</p>)

const NotOnlyPage = () => {
  return (
    <Layout>
      <SEO title="Not Only — But Also" />
      <Container>
        <HeroCopy
          copy={
            <>
              <a
                href="https://notonlybutalso.org"
                target="_blank"
                rel="noreferrer"
              >
                Not Only — But Also
              </a>{" "}
              is project that my partner and I have launched over the past few
              weeks. It's a new platform to shed light on the other roles that
              exist in the creative industry that don't often get talked about.
              We’re collecting together resources, interviews and more to help
              young creatives navigate these different roles – What are they?
              Who does them? And what does it take to get into them?
            </>
          }
        />
      </Container>
      <ProjectOneColumnPadding
        content={
          <video
            loop
            width="100%"
            height="auto"
            controls
            muted
            autoPlay
            src={require("../assets/video/notOnlyLogo.mp4")}
          ></video>
        }
      />
      <ProjectSkills
        skills={projectMapped}
        scope={scopeMapped}
        link="https://notonlybutalso.org"
        linkDescription={
          <>
            Launch the site and get involved{" "}
            <span role="img" aria-label="rocket emoji">
              🎉
            </span>
          </>
        }
      />
      <ProjectOneColumnPadding
        content={
          <video
            loop
            width="100%"
            height="auto"
            controls
            muted
            src={require("../assets/video/notOnlyWebsite.mp4")}
          ></video>
        }
      />
      <ProjectTwoRowPadding
        contentOne={
          <Image
            alt="Not Only — But Also interview"
            filename="images/notonly/notonlyV.jpg"
          />
        }
        contentTwo={
          <Image
            alt="Not Only — But Also interview"
            filename="images/notonly/notonlyChloe.jpg"
          />
        }
        contentThree={
          <Image
            alt="Not Only — But Also interview"
            filename="images/notonly/notonlyOllyFranc.jpg"
          />
        }
      />
      <Container>
        <ProjectCopy>
          Behind the scenes we have been conducting interviews with loads of
          brilliant people, gathering their stories and advice to help young
          people better understand the creative industries and find a role that suits them.
        </ProjectCopy>
      </Container>
      <ProjectTwoColumnPadding
        contentOne={
          <video
            loop
            width="100%"
            height="auto"
            controls
            muted
            src={require("../assets/video/notOnlyRoles.mp4")}
          ></video>
        }
        contentTwo={
          <video
            loop
            width="100%"
            height="auto"
            controls
            muted
            src={require("../assets/video/notOnlyThankYou.mp4")}
          ></video>
        }
      />
      <Container>
        <ProjectCopy>
          I have been having fun creating short animations for our Instagram
          page which has seen great engagement.
        </ProjectCopy>
      </Container>
    </Layout>
  )
}

export default NotOnlyPage
