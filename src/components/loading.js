import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LoadingPage } from "../pages/index"

const Loading = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      counter <= 99 && setCounter(counter + 1)
    }, 20)
  }, [counter])

  return (
    <>
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
      </>
  )
}

export default Loading
