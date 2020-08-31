import React, { useState } from "react"
//Styled Components
import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"
//Custom Cursor
import CustomCursor from "../components/customCursor"
//Components
import Header from "./header"
import Navigation from "./navigation"
import Footer from "./footer"

// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

const GlobalStyle = createGlobalStyle`
${normalize}
* {
  text-decoration: none;
  cursor: none;
}
html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
    background-color: transparent;
}
body {
  font-size: 16px;
  line-height: 1.4;
  font-weight: 450;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  overscroll-behavior: none;
  overflow-x: hidden;
  color: var(--text);
  background-color: var(--bg);
  transition: 0.5s ease all;

  --bg: #ffffff;
  --text: #17223b;
  --green: #80f06b;
  --pink: #ffa3af;
  --change: #ffa3af;
  --invert: #80f06b;
}
body.dark {
  -webkit-font-smoothing: antialiased;
  --bg: #17223b;
  --text: #ffffff;
  --green: #80f06b;
  --pink: #ffa3af;
  --change: #80f06b;
  --invert: #ffa3af;
}
`

const Layout = ({ children }) => {
  const dispatch = useGlobalDispatchContext()
  const { cursorStyles } = useGlobalStateContext() //currentTheme taken fromhere

  const [toggleMenu, setToggleMenu] = useState(false)

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({
      type: "CURSOR_TYPE",
      cursorType: cursorType,
    })
  }

  return (
    <>
      <GlobalStyle />
      <CustomCursor toggleMenu={toggleMenu} />
      <Header
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        // siteTitle={data.site.siteMetadata.title}
      />
      <Navigation
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        onCursor={onCursor}
      />
      <main>{children}</main>
      <Footer onCursor={onCursor} />
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout

////theme={currentTheme === "dark" ? darkTheme : lightTheme}
