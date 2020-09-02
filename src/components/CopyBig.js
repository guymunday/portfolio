import React, { useEffect } from "react"
import { ContentAbout, AboutImage } from "../styles/homeStyles"
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const CopyBig = props => {
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
    <AboutImage
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
      <div className="about-inner">
        <ContentAbout>
          {props.copy}
        </ContentAbout>
      </div>
    </AboutImage>
  )
}

export default CopyBig
