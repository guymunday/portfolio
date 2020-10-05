import React, { useState, useEffect } from "react"
//Framer Motion
import { motion, useAnimation } from "framer-motion"
// Styled Components
import { Container, Flex } from "../../styles/globalStyles"
import TakeAPeek from "../TakeAPeek"
import {
  HomeFeaturedSection,
  FeaturedVideo,
  FeaturedContent,
  HomeShadow,
} from "../../styles/homeStyles"
import Image from "../images"
// Scroll Animations
import { useInView } from "react-intersection-observer"

const HomeTodo = ({ onCursor }) => {
  const [hovered, setHovered] = useState(false)
  const animation = useAnimation()
  const [featured, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  return (
    <HomeFeaturedSection
      ref={featured}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: { opacity: 0, y: 200 },
      }}
    >
      <Container>
        <a href="https://todo.guymunday.com" target="_blank" rel="noreferrer">
          <FeaturedContent
            onHoverStart={() => setHovered(!hovered)}
            onHoverEnd={() => setHovered(!hovered)}
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <HomeShadow>
              <FeaturedVideo>
                <div className="home-image">
                  <Image alt="React To-do App" filename="todo.png" />
                </div>
                <motion.div
                  animate={{ opacity: hovered ? 1 : 0 }}
                  transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                  className="marquee"
                >
                  <TakeAPeek />
                </motion.div>
              </FeaturedVideo>
            </HomeShadow>
            <Flex spaceBetween>
              <h2>React To-do App</h2>
              <motion.div
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                className="meta"
              >
                <h3>Fun with React {"&"} GraphQL</h3>
              </motion.div>
            </Flex>
          </FeaturedContent>
        </a>
      </Container>
    </HomeFeaturedSection>
  )
}

export default HomeTodo
