import React, { useEffect } from "react"

// // Scroll Animations
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"
import Email from "../components/Email"

//Styled Components
import { Container, Flex } from "../styles/globalStyles"
import { FooterNav, FooterContent } from "../styles/footerStyles"

const Footer = ({ onCursor }) => {
  const animation = useAnimation()
  const [footerRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "200px",
  })
  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  return (
    <FooterNav
      ref={footerRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: { opacity: 0, y: 60 },
      }}
    >
      <Container>
        <Flex spaceBetween column>
          <FooterContent
            onMouseEnter={() => onCursor("pointer")}
            onMouseLeave={onCursor}
          >
            <Email />
          </FooterContent>
          <FooterContent>+44 (0) 7938878255</FooterContent>
          <FooterContent>
            Made with <span role="img" aria-label="two hears emoji">💕</span> using Gatsby.js
          </FooterContent>
        </Flex>
      </Container>
    </FooterNav>
  )
}

export default Footer
