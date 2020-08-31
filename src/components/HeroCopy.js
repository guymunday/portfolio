import React from "react"
import { Container } from "../styles/globalStyles"
import { Content, HomeContentSection, ContentCover } from "../styles/homeStyles"

const HeroCopy = props => {
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
        <Content>{props.copy}</Content>
        <ContentCover
          initial={{ width: "100%", left: "0" }}
          animate={{ width: "0", left: "100%" }}
          transition={{
            delay: 1,
            duration: 1,
            ease: [0.6, 0.05, -0.01, 0.9],
          }}
          exit={{ opacity: "0" }}
        />
      </Container>
    </HomeContentSection>
  )
}

export default HeroCopy
