import React from "react"
import Layout from "../components/layout"
import { Container } from "../styles/globalStyles"
import AboutSkills from "../components/projects/AboutSkills"
import AboutPhoto from "../components/projects/AboutPhoto"
import AboutContact from "../components/projects/AboutContact"
import CopyBig from "../components/CopyBig"
import SEO from "../components/seo"

const projectSkills = [
  "InDesign /",
  "Illustrator /",
  "PhotoShop /",
  "AfterEffects /",
  "XD /",
  "Figma /",
  "InVision /",
  "Framer",
]
const projectMapped = projectSkills.map(skills => <li>{skills}</li>)

const projectScope = [
  "HTML5 /",
  "CSS3 /",
  "SCSS /",
  "CSS in JavaScript",
  "JavaScript /",
  "ES6+ /",
  "React /",
  "Gatsby.js /",
  "Next.js /",
  "WordPress /",
  "GitHub /",
  "jQuery /",
  "Netlify /",
  "Headless CMS /",
  "GSAP3 /",
  "Framer Motion /",
  "GraphQL /",
  "WooCommerce /",
  "PrestaShop",
]
const scopeMapped = projectScope.map(scope => <li>{scope}</li>)

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About Me" />
      <Container>
        <AboutPhoto
          copy={
            <>
              Hello (again), I'm Guy.{" "}
              <span role="img" aria-label="waving hand emoji">
                👋
              </span>{" "}
              <br />
              <br />
              Originally from Stockport, I'm currently living in south London
              and working at the creative agency,{" "}
              <a
                href="https://www.wildishandco.co.uk"
                target="_blank"
                rel="noreferrer"
              >Wildish & Co</a>
              .
            </>
          }
        />
        <CopyBig
          copy={
            <>
              I have 5 years commercial experience working as both a Front-end
              Developer and Designer. I love creating enjoyable and engaging
              user experiences with a focus on beautiful design and usability. I
              also co-run{" "}
              <a
                href="https://notonlybutalso.org"
                target="_blank"
                rel="noreferrer"
              >
                Not Only — But Also
              </a>
              , a new platform to help shed light on the less talked about roles
              within the creative industry. After hours you can find me running,
              eating or coding.
            </>
          }
        />
      </Container>
      <AboutSkills skills={projectMapped} scope={scopeMapped} />
      <Container>
        <AboutContact />
      </Container>
    </Layout>
  )
}

export default AboutPage
