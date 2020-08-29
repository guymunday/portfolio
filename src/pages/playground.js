import React from "react"
import Layout from "../components/layout"
import { Container } from "../styles/globalStyles"
import Iframe from "react-iframe"
import HeroCopy from "../components/HeroCopy"

const PlaygroundPage = () => {
  return (
    <Layout>
      <Container>
        <HeroCopy
          copy={
            <>
              Here is a collection of fun experiments I have made which explore the
              HTML canvas tag, JS libraries such as Three.js and Matter.js and
              even a custom typeface! Click, drag and have a play. More to come.{" "}
               <span role="img" aria-label="eyes emoji">👀</span>
            </>
          }
        />
        <Iframe
          url="https://codepen.io/guymunday/embed/WNwpoOQ?height=445&theme-id=dark&default-tab=result"
          width="100%"
          height="600px"
          display="initial"
          position="relative"
          loading="lazy"
          className="iframe"
        />
        <Iframe
          url="https://codepen.io/guymunday/embed/oNxZzmo?height=299&theme-id=dark&default-tab=result"
          width="100%"
          height="600px"
          display="initial"
          position="relative"
          loading="lazy"
          className="iframe"
        />
        <Iframe
          url="https://codepen.io/guymunday/embed/oNxZZNL?height=85&theme-id=dark&default-tab=result"
          width="100%"
          height="600px"
          display="initial"
          position="relative"
          loading="lazy"
          className="iframe"
        />
        <Iframe
          url="https://codepen.io/guymunday/embed/BaKWWor?height=265&theme-id=dark&default-tab=result"
          width="100%"
          height="600px"
          display="initial"
          position="relative"
          loading="lazy"
          className="iframe"
        />
        <Iframe
          url="https://fibonacci-ish.superhi.com/"
          width="100%"
          height="600px"
          display="initial"
          position="relative"
          loading="lazy"
        />
      </Container>
    </Layout>
  )
}

export default PlaygroundPage
