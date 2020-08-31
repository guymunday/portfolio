import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"


export const LoadingPage = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: var(--bg);
  font-size: 60px;
  font-family: Inter, sans-serif;
  font-weight: 600;
`

const Loading = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      counter <= 99 && setCounter(counter + 1)
    }, 20)
  }, [counter])

  return (
    <LoadingPage
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <>
        <span className="text">Site is loading...</span>
      </>
      <span className="progress">{counter}%</span>
    </LoadingPage>
  )
}

export default Loading
