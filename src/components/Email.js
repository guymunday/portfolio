import React, { useCallback } from "react"
import { ButtonWrap } from "../styles/footerStyles"

const Email = () => {
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
    <ButtonWrap
      title="Click to copy to clipboard"
      ref={email}
      className="email"
      onClick={() => navigator.clipboard.writeText("guymunday@gmail.com")}
    >
      guymunday@gmail.com
    </ButtonWrap>
  )
}

export default Email
