import React from "react"
import Layout from "../components/layout"
import { Container } from "../styles/globalStyles"
import HeroCopy from "../components/HeroCopy"
import ProjectSkills from "../components/projects/ProjectSkills"
import ProjectOneColumn from "../components/projects/ProjectOneColumn"
// import ProjectOneColumnPadding from "../components/projects/ProjectOneColumnPadding"
import Image from "../components/images"
import SEO from "../components/seo"

const projectSkills = [
  "Gatsby.js /",
  "Framer Motion /",
  "Styled Components /",
  "Netlify /",
  "GitHub",
]
const projectMapped = projectSkills.map(skills => <li>{skills}</li>)

const projectScope = [
  "This website was built using Gatsby.js with animations powered by Framer Motion and styled with Styled Components.",
]
const scopeMapped = projectScope.map(scope => <p>{scope}</p>)

const AnaPage = () => {
  return (
    <Layout>
      <SEO title="About Me" />
      <Container>
        <HeroCopy
          copy={
            <>
              4 years experience in Graphic/ Digital design and 2 years
              experience Front End Development and website management…
            </>
          }
        />
      </Container>
      <ProjectOneColumn
        content={<Image alt="All Nippon Airways" filename="guyMunday.jpg" />}
      />
      <ProjectSkills skills={projectMapped} scope={scopeMapped} />
    </Layout>
  )
}

export default AnaPage
