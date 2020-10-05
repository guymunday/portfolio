import styled from "styled-components"
import { motion } from "framer-motion"

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: var(--change);
  color: var(--text);
  z-index: 100;
  overflow: hidden;
`

export const NavHeader = styled.div`
  top: 60px;
  position: relative;
  @media (max-width: 768px) {
    top: 30px;
  }
  h2 {
    color: var(--text);
    font-weight: 600;
    @media (max-width: 450px) {
      display: none;
    }
  }
  a {
    font-weight: 600;
    color: var(--text);
    font-size: 1.5rem;
  }
`
export const CloseNav = styled.div`
  button {
    transform-origin: center;
    border: none;
    padding: 20px 0;
    background: none;
    outline: none;

    span {
      width: 36px;
      height: 3px;
      display: block;
      background: var(--text);
      margin: 8px;
    }
  }
`

export const NavList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  ul {
    top: 60px;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    li {
      list-style: none;
      font-size: 1.6rem;
      text-transform: uppercase;
      font-weight: 700;
      line-height: 1.1;
      flex-grow: 1;
      padding: 15px 0;
      @media (max-height: 600px) {
        padding: 10px;
        font-size: 1.3rem;
      }
      @media (max-width: 450px) {
        font-size: 1.3rem;
      }
      .link {
        color: var(--text);
        position: relative;
        display: flex;
        align-items: center;
      }
    }
  }
`
export const NavFooter = styled.div`
  bottom: 60px;
  position: relative;
  p {
    color: var(--text);
    font-weight: 600;
    font-size: 1.2rem;
    @media (max-width: 768px) {
      display: none;
    }
  }
`

export const NavVideos = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 25%;
  z-index: -1;
  height: 100%;
  width: 100%;
  /* background: #000; */
  @media (max-width: 600px) {
    display: none;
  }
  .reveal {
    width: 100%;
    background: var(--change);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }

  .video {
    /* background: #000; */
    position: absolute;
    height: 100%;
    margin: 0;
    z-index: -1;
    img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      z-index: -1;
    }
    video {
      height: 100%;
    }
  }
`
