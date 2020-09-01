import React, { useState, useEffect } from "react"
import Layout from "../components/layout"

//Components
import HeroCopy from "../components/HeroCopy"
import HomeKemosabe from "../components/homePage/HomeKemosabe"
import HomeNotOnly from "../components/homePage/HomeNotOnly"
import HomePlayground from "../components/homePage/HomePlayground"
import HomeAna from "../components/homePage/HomeAna"
import HomeHuman from "../components/homePage/HomeHuman"
import SEO from "../components/seo"
import Loading from "../components/loading"

//Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"
import { motion, AnimatePresence } from "framer-motion"

const IndexPage = props => {
  const dispatch = useGlobalDispatchContext()
  const { cursorStyles } = useGlobalStateContext()
  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  const [finishLoading, setFinishLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setFinishLoading(false)
      sessionStorage.setItem("first_time", "1")
    }, 3000)
  }, [])

  // && !sessionStorage.getItem("first_time")

  return (
    <AnimatePresence>
      {finishLoading && !sessionStorage.getItem("first_time") ? (
        <Loading />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Layout>
            <SEO title="Guy Munday" />
            <HeroCopy
              copy={
                <>
                  Hello, I'm Guy.{" "}
                  <span role="img" aria-label="waving hand emoji">
                    👋
                  </span>{" "}
                  I'm a Front-End Developer and Designer with a love for motion,
                  interaction design and all things digital. I love exploring
                  new technologies and learning new things along the way.
                </>
              }
            />
            <HomeKemosabe onCursor={onCursor} />
            <HomeNotOnly onCursor={onCursor} />
            <HomeHuman onCursor={onCursor} />
            <HomePlayground onCursor={onCursor} />
            <HomeAna onCursor={onCursor} />
          </Layout>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default IndexPage
