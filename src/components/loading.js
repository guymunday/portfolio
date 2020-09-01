import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

export const LoadingPage = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: #17223b;
  .loading-div {
    position: fixed;
    width: 50%;
    height: 50%;
    left: 0;
    top: 0;
    background: #ffa3af;
  }
  .loading-div-2 {
    position: fixed;
    width: 50%;
    height: 50%;
    left: 0;
    bottom: 0;
    background: #ffa3af;
  }
  .loading-div-3 {
    position: fixed;
    width: 50%;
    height: 50%;
    top: 0;
    right: 0;
    background: #ffa3af;
  }
  .loading-div-4 {
    position: fixed;
    width: 50%;
    height: 50%;
    right: 0;
    bottom: 0;
    background: #ffa3af;
  }
  h3 {
    /* display: block; */
    position: fixed;
    transform-origin: center center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -130%);
    color: #ffffff;
    font-size: 40px;
    font-family: Inter, sans-serif;
    font-weight: 600;
  }
`

const Loading = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      counter <= 99 && setCounter(counter + 1)
    }, 20)
  }, [counter])

  return (
    <LoadingPage>
      <motion.div
        initial={{ height: "50%" }}
        animate={{ height: "0" }}
        transition={{
          duration: 3,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
        className="loading-div"
      />
      <motion.div
        initial={{ width: "50%" }}
        animate={{ width: "0" }}
        transition={{
          duration: 3,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
        className="loading-div-2"
      />
      <motion.div
        initial={{ width: "50%" }}
        animate={{ width: "0" }}
        transition={{
          duration: 3,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
        className="loading-div-3"
      />
      <motion.div
        initial={{ height: "50%" }}
        animate={{ height: "0" }}
        transition={{
          duration: 3,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
        className="loading-div-4"
      />
      <h3>{counter}%</h3>
    </LoadingPage>
  )
}

export default Loading
