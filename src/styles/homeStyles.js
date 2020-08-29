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
  video {
    box-sizing: border-box;
    border: var(--change) solid 1px;
  }
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
  z-index: -1;
  display: block;
  overflow: hidden;
  position: relative;
  object-fit: cover;
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
  /* button {
    background: #ea281e;
    color: #fff;
    position: relative;
    padding: 20px;
    display: block;
    text-align: left;
    font-size: 1.4rem;
    line-height: 1;
    font-weight: 600;
    border: none;
    span {
      margin-right: 108px;
      display: block;
    }

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      right: 20px;
      width: 35px;
      height: 7px;
      display: block;
      background: #fff;
      transform: translateY(-50%);
    }
    &:before {
      margin-top: -8px;
    }
    &:after {
      margin-top: 8px;
    }
  } */
`
