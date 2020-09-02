import React, { useEffect } from "react"
import { ContentCover, ContentAbout, AboutImage } from "../../styles/homeStyles"
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "../images"

const AboutPhoto = props => {
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
        <Image alt="Guy Munday" filename="guyMunday.jpg" />
        <ContentAbout>{props.copy}</ContentAbout>
      </div>
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
    </AboutImage>
  )
}

export default AboutPhoto
