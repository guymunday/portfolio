import React, { useEffect } from "react"
import {
  ProjectTwoRowFlexPadding,
  ColumnOne,
  ColumnTwo,
  ColumnThree,
} from "../../styles/projectStyles"
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const ProjectTwoRowPadding = props => {
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
    <ProjectTwoRowFlexPadding
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
      <ColumnOne>{props.contentOne}</ColumnOne>
      <ColumnTwo>{props.contentTwo}</ColumnTwo>
      <ColumnThree>{props.contentThree}</ColumnThree>
    </ProjectTwoRowFlexPadding>
  )
}

export default ProjectTwoRowPadding
