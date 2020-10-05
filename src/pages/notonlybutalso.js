import React from "react"
import Layout from "../components/layout"
import { Container } from "../styles/globalStyles"
import HeroCopy from "../components/HeroCopy"
import ProjectSkills from "../components/projects/ProjectSkills"
import ProjectOneColumn from "../components/projects/ProjectOneColumn"
import ProjectTwoColumnPadding from "../components/projects/ProjectTwoColumnPadding"
import ProjectTwoRowPadding from "../components/projects/ProjectTwoRowPadding"
import Image from "../components/images"
import { ProjectCopy } from "../styles/projectStyles"
import SEO from "../components/seo"

const projectSkills = [
  "JavaScript /",
  "Gatsby.js /",
  "React /",
  "CSS in JS /",
  "Prismic /",
  "Framer Motion /",
  "Adobe After Effects /",
  "Adobe Illustrator /",
  "GitHub /",
  "Netlify",
]
const projectMapped = projectSkills.map(skills => <li>{skills}</li>)

const projectScope = [
  "On-going project to help give young creatives valuable information about the creative industries, its structure and what opportunities are out there.",
  "Not Only — But Also is built with JAMstack technologies, namely Gatsby.js using Prismic as its CMS, querying the API using GraphQL. The data is then passed through to Gatsby templates using React props. The interactions and animations throughout the site are powered with Framer Motion.",
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
      <ProjectOneColumn
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
          people better understand the creative industries and find a role that
          suits them.
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
          I have been having fun developing the brand as well as creating
          animations for our Instagram page which has seen great engagement.
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
            src={require("../assets/video/notOnlyHomePage.mp4")}
          ></video>
        }
      />
      <Container>
        <ProjectCopy>
          All the articles are organised into their own category based on the
          job role that is being talked about. The pieces are highlighted by a
          floating category sticker which is achieved using React state, data
          from Prismic and a custom hook.
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
            src={require("../assets/video/notOnlyArticle.mp4")}
          ></video>
        }
      />
      <Container>
        <ProjectCopy>
          All of the content for the articles utilises Prismic's "slices" so we
          can conditionally render content based on what is required for the
          article.
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
            src={require("../assets/video/notOnlyHero.mp4")}
          ></video>
        }
      />
      <Container>
        <ProjectCopy>
          The hero section of the homepage maps over data from Prismic to create
          these fun stickers that can be dragged, thrown and (when we have
          enough content) can be used as a way to navigate the site to various
          articles and categories.
        </ProjectCopy>
      </Container>
    </Layout>
  )
}

export default NotOnlyPage
