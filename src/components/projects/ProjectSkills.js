import React, { useEffect } from "react"
import { ProjectSkillsContainer } from "../../styles/projectStyles"
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const ProjectSkills = props => {
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
    <ProjectSkillsContainer
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
      <div className="skill-flex">
        <div className="tech-list">
          <h3>Project Scope</h3>
          {props.scope}
          <a href={props.link} target="_blank" rel="noreferrer">
            {props.linkDescription}
          </a>
        </div>
        <div className="tech-list">
          <h3>Technology used</h3>
          <ul>{props.skills}</ul>
        </div>
      </div>
    </ProjectSkillsContainer>
  )
}

export default ProjectSkills
