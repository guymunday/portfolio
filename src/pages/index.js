import React from "react"
import Layout from "../components/layout"

//Components
import HeroCopy from "../components/HeroCopy"
import HomeKemosabe from "../components/homePage/HomeKemosabe"
import HomeNotOnly from "../components/homePage/HomeNotOnly"
import HomePlayground from "../components/homePage/HomePlayground"
import HomeAna from "../components/homePage/HomeAna"
import HomeHuman from "../components/homePage/HomeHuman"

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
      {console.log("props", props)}
      <HeroCopy
        copy={
          <>
            Hello, I'm Guy.{" "}
            <span role="img" aria-label="waving hand emoji">
              👋
            </span>{" "}
            I'm a Front-End Developer and Designer with a love for motion, interaction design and all things digital.
            I love exploring new technologies and learning new things along the way.
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
