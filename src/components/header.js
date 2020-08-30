import { Link } from "gatsby"
import React, { useEffect } from "react"
// Styled Components
import { Container, Flex } from "../styles/globalStyles"
import { HeaderNav, Logo, LightSwitch, Menu } from "../styles/headerStyles"
import ThemeToggle from "../components/ThemeToggle"

const Header = ({ onCursor, setToggleMenu, toggleMenu }) => {

  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      }}
    >
      <Container>
        <Flex spaceBetween noHeight>
          <Logo
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <Link to="/">Guy Munday</Link>
          </Logo>
          <LightSwitch
            onMouseEnter={() => onCursor("pointer")}
            onMouseLeave={onCursor}
          >
            <ThemeToggle />
          </LightSwitch>
          <Menu
            onClick={() => setToggleMenu(!toggleMenu)}
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header
