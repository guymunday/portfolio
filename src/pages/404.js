import React from "react"
import Layout from "../components/layout"

//Components
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

const IndexPage = props => {
  const dispatch = useGlobalDispatchContext()
  const { cursorStyles } = useGlobalStateContext()
  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }
  return (
    <Layout>
      <SEO title="Guy Munday" />
      <HeroCopy
        copy={
          <>
            Whoops, you've gone the wrong way.{" "}
            <span role="img" aria-label="face palm emoji">
              👎
            </span>{" "}
            Scroll down to get back on track.
          </>
        }
      />
      <HomeKemosabe onCursor={onCursor} />
      <HomeNotOnly onCursor={onCursor} />
      <HomeHuman onCursor={onCursor} />
      <HomePlayground onCursor={onCursor} />
      <HomeAna onCursor={onCursor} />
    </Layout>
  )
}

export default IndexPage
