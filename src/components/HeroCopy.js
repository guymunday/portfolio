import React from "react"
import { Container } from "../styles/globalStyles"
import {
  Content,
  HomeContentSection,
  ContentCover,
} from "../styles/homeStyles"

const HeroCopy = (props) => {
  return (
    <HomeContentSection
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 72, opacity: 0 }}
      transition={{
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      }}
    >
      <Container>
        <Content>
          {/* Hello, I'm Guy. <span role="img">👋</span> */}
          {props.copy}
        </Content>
        <ContentCover
          animate={{ width: "0", left: "100%" }}
          initial={{ width: "100%", left: "0" }}
          transition={{
            delay: 1,
            duration: 1,
            ease: [0.6, 0.05, -0.01, 0.9],
          }}
        />
      </Container>
    </HomeContentSection>
  )
}

export default HeroCopy
