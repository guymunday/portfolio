import React, { useCallback } from "react"
import { AboutButtonWrap } from "../../styles/homeStyles"

const AboutEmail = () => {
  const email = useCallback(node => {
    if (node !== null) {
      console.log("hello")
      const checkEmailClick = function() {
        console.log("Email copied to clipboard")
        node.innerHTML === "guymunday@gmail.com"
          ? (node.innerHTML = "Copied to clipboard 🎉")
          : (node.innerHTML = "guymunday@gmail.com")
      }
      node.addEventListener("click", checkEmailClick)
    }
  }, [])
  return (
    <AboutButtonWrap
      ref={email}
      className="email"
      aria-label="Click to copy to clipboard"
      onClick={() => navigator.clipboard.writeText("guymunday@gmail.com")}
    >
      guymunday@gmail.com
    </AboutButtonWrap>
  )
}

export default AboutEmail
