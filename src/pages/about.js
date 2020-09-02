import React from "react"
import Layout from "../components/layout"
import { Container } from "../styles/globalStyles"
import HeroCopy from "../components/HeroCopy"
import AboutSkills from "../components/projects/AboutSkills"
// import ProjectTwoColumnPadding from "../components/projects/ProjectTwoColumnPadding"
// import ProjectOneColumnPadding from "../components/projects/ProjectOneColumnPadding"
// import Image from "../components/images"
// import Email from "../components/Email"
import AboutPhoto from "../components/projects/AboutPhoto"
import AboutContact from "../components/projects/AboutContact"
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

const AnaPage = () => {
  return (
    <Layout>
      <SEO title="About Me" />
      <Container>
        <AboutPhoto />
      </Container>
      <AboutSkills skills={projectMapped} scope={scopeMapped} />
      <Container>
        <AboutContact />
      </Container>
    </Layout>
  )
}

export default AnaPage
