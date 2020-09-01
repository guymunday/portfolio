import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import styled from "styled-components"

//Components
import Loading from "../components/loading"
import HeroCopy from "../components/HeroCopy"
import HomeKemosabe from "../components/homePage/HomeKemosabe"
import HomeNotOnly from "../components/homePage/HomeNotOnly"
import HomePlayground from "../components/homePage/HomePlayground"
import HomeAna from "../components/homePage/HomeAna"
import HomeHuman from "../components/homePage/HomeHuman"
import SEO from "../components/seo"

//Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"
import { motion, AnimatePresence } from "framer-motion"

export const LoadingPage = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: #17223b;
  display: block;
  margin: 0;
  padding: 0;
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

  return (
    <AnimatePresence>
      {finishLoading &&
      typeof window !== "undefined" &&
      !sessionStorage.getItem("first_time") ? (
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
