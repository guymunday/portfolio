import styled, { keyframes } from "styled-components"
import { motion } from "framer-motion"

const wiggleEmoji = keyframes`
  0% {transform: rotate(0deg); }
  25% {transform: rotate(10deg); }
  50% {transform: rotate(-10deg); }
  100% {transform: rotate(0deg); }
`

const marquee = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`

//Content Section
export const HomeContentSection = styled(motion.div)`
  margin: 200px 0;
  @media (max-width: 768px) {
    margin: 100px 0;
  }
`
export const Content = styled(motion.h2)`
  width: 100%;
  max-width: 850px;
  margin: auto;
  font-size: 1.8rem;
  font-weight: 450;
  color: var(--text);
  a {
    color: var(--text);
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  span {
    display: inline-block;
    animation: ${wiggleEmoji} 1.5s ease infinite;
  }
`
export const ContentAbout = styled(motion.h2)`
  width: 75%;
  flex-grow: 1;
  padding-left: 30px;
  margin: auto;
  font-size: 1.8rem;
  font-weight: 450;
  color: var(--text);
  a {
    color: var(--text);
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  @media (max-width: 500px) {
    width: 100%;
    padding-left: 0;
  }
  span {
    display: inline-block;
    animation: ${wiggleEmoji} 1.5s ease infinite;
  }
`
export const AboutImage = styled(motion.div)`
  position: relative;
  margin: 200px 0;
  @media (max-width: 768px) {
    margin: 100px 0;
  }
  .about-inner {
    margin: auto;
    display: flex;
    max-width: 850px;
    .gatsby-image-wrapper {
      width: 22%;
      box-shadow: 3px 3px 3px #000;
      @media (max-width: 500px) {
        display: none;
      }
    }
  }
`

export const AboutButtonWrap = styled(motion.button)`
         color: var(--text);
         font-size: 1.8rem;
         font-weight: 450;
         color: var(--text);
         padding: 0;
         border: none;
         outline: none;
         background: none;
         /* padding: 10px; */
         transition: 0.5s ease background;
         @media (max-width: 768px) {
           font-size: 1.3rem;
         }
         :hover {
           background: var(--change);
         }
       `

export const ContentCover = styled(motion.div)`
  position: absolute;
  top: -30px;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 30px 0;
  background: var(--change);
`

//Featured Section
export const HomeFeaturedSection = styled(motion.div)`
  /* margin-bottom: 200px; */
  position: relative;
  a {
    margin-bottom: 200px;
    position: relative;
    display: block;
  }
`

export const FeaturedContent = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: auto;
  box-sizing: border-box;
  color: var(--text);
  h2 {
    font-size: 1.4rem;
  }
  .meta {
    display: flex;
    h3 {
      font-size: 1rem;
      margin-left: 1rem;
      font-weight: 450;
    }
  }
`

export const FeaturedVideo = styled.div`
  display: block;
  overflow: hidden;
  position: relative;
  object-fit: cover;
  video {
    display: block;
    width: 100%;
    max-height: 450px;
    box-sizing: border-box;
    border: var(--change) solid 1px;
    object-fit: cover;
    @media (max-width: 450px) {
      max-height: 300px;
    }
  }
  .gatsby-image-wrapper {
    height: 100%;
    object-fit: cover;
    border: var(--change) 1px solid;
  }
  .marquee {
    position: absolute;
    bottom: 0;
    left: -20%;
    width: 300%;
    overflow: hidden;
    transform-origin: left center;
    transform: rotate(-45deg);
    background: var(--change);
    box-shadow: 3px 3px 4px #17223b;
    p {
      white-space: nowrap;
      color: var(--bg);
      animation: ${marquee} 25s linear infinite;
    }
  }
`

export const FeaturedProjects = styled.div`
  margin-top: 200px;
`
