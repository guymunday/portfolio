import React, { useCallback } from "react"
import Image from "../images"
import { HumanRotate } from "../../styles/projectStyles"

const HumanRotateSection = () => {
  const box = useCallback(node => {
    if (node !== null) {
      let xDir = "rotateY"
      let yDir = "rotateX"

      document.addEventListener("mousemove", function(event) {
        const x = event.pageX
        const y = event.pageY

        const midX = x - window.innerWidth / 2
        const midY = y - window.innerHeight / 2

        node.style.transform =
          xDir + "(" + midX + "deg) " + yDir + "(" + midY + "deg)"
      })

      document.addEventListener("touchmove", function(event) {
        const x = event.pageX
        const y = event.pageY

        const midX = x - window.innerWidth / 2
        const midY = y - window.innerHeight / 2

        node.style.transform =
          xDir + "(" + midX + "deg)" + yDir + "(" + midY + "deg)"
      })

      document.querySelectorAll("select").forEach(select => {
        select.addEventListener("change", function() {
          if (this.name === "xDir") {
            xDir = this.value
          } else {
            yDir = this.value
          }
        })
      })
        
        
        
    }
  }, [])

  return (
    <HumanRotate>
      <section className="top-fun">
        <div className="magazine-rotate" ref={box}>
          <div className="face face-cover">
            <Image alt="Human Magazine" filename="humanFront.jpg" />
          </div>
          <div className="face face-spine" />
          <div className="face face-top">
            <Image alt="Human Magazine" filename="humanTop.png" />
          </div>
          <div className="face face-side"></div>
          <div className="face face-bottom">
            <Image alt="Human Magazine" filename="humanTop.png" />
          </div>
          <div className="face face-back">
            <Image alt="Human Magazine" filename="humanBack.jpg" />
          </div>
        </div>
      </section>
    </HumanRotate>
  )
}

export default HumanRotateSection
