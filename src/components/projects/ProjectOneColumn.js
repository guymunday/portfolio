import React, { useEffect } from "react"
import { ProjectOneColumnFlex, Column } from "../../styles/projectStyles"
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const ProjectOneColumn = props => {
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
    <ProjectOneColumnFlex
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
      <Column>{props.content}</Column>
    </ProjectOneColumnFlex>
  )
}

export default ProjectOneColumn
