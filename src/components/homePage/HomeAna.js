import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
//Framer Motion
import { motion, useAnimation } from "framer-motion"
// Styled Components
import TakeAPeek from "../TakeAPeek"
import { Container, Flex } from "../../styles/globalStyles"
import {
  HomeFeaturedSection,
  FeaturedVideo,
  FeaturedContent,
  HomeShadow,
} from "../../styles/homeStyles"
// Scroll Animations
import { useInView } from "react-intersection-observer"

const HomeAna = ({ onCursor }) => {
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
        <Link to="/ana">
          <FeaturedContent
            onHoverStart={() => setHovered(!hovered)}
            onHoverEnd={() => setHovered(!hovered)}
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <HomeShadow>
              <FeaturedVideo>
                <video
                  loop
                  width="100%"
                  height="450px"
                  muted
                  onMouseOver={event => event.target.play()}
                  onMouseOut={event => event.target.load()}
                  onFocus={event => event.target.play()}
                  onBlur={event => event.target.load()}
                  preload="metadata"
                  poster={require("../../assets/images/ana/anaHero.jpg")}
                  src={require("../../assets/video/We Are Japan_1.mp4")}
                ></video>
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
              <h2>All Nippon Airways</h2>
              <motion.div
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                className="meta"
              >
                <h3>Digital {"&"} Print Design</h3>
              </motion.div>
            </Flex>
          </FeaturedContent>
        </Link>
      </Container>
    </HomeFeaturedSection>
  )
}

export default HomeAna
