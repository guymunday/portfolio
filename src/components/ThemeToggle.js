import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import styled from "styled-components"

export const Toggler = styled.label`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  input {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    opacity: 0;
  }
`

const ThemeToggle = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <Toggler>
          <input
            type="checkbox"
            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
          />
          {theme === "dark" ? "🌞" : "🌚"}
        </Toggler>
      )}
    </ThemeToggler>
  )
}

export default ThemeToggle
