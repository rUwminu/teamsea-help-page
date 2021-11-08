import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

const Navbar = () => {
  let lastScroll = 0
  const [isActive, setIsActive] = useState(false)
  const [isScrollTop, setIsScrollTop] = useState(true)
  const [isMobile, setIsMobile] = useState()

  const handleCheckWidth = () => {
    let windowWidth = window.innerWidth

    if (windowWidth < 868) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  const handleResize = () => {
    if (window.innerWidth < 868) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  const handleScroll = () => {
    const currentTop = window.scrollY

    if (currentTop <= 0) {
      setIsScrollTop(true)
    }
    if (currentTop > lastScroll) {
      setIsScrollTop(false)
    }

    lastScroll = currentTop
  }

  useEffect(() => {
    handleCheckWidth()
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <Container
      className={`${
        isScrollTop ? 'py-8 bg-none' : 'py-4 bg-gray-50 shadow-md'
      }`}
    >
      <NavInner>
        <div className='logo-title'>
          <span>Art</span>Wall
        </div>
        <div className={`nav-items ${isMobile ? 'hidden' : 'inline-flex'}`}>
          <div className='link-items'>Home</div>
          <div className='link-items'>Feature</div>
          <div className='link-items'>About</div>
        </div>
        <div className='nav-signup'>
          <h2>Interested?</h2>
          <div className='link-items'>Contact Us</div>
          {isMobile && (
            <Burger
              className={`${isActive && 'line-active'}`}
              onClick={() => setIsActive(!isActive)}
            >
              <div
                className={`line-1 ${isActive ? 'bg-gray-200' : 'bg-gray-900'}`}
              />
              <div
                className={`line-2 ${isActive ? 'bg-gray-200' : 'bg-gray-900'}`}
              />
              <div
                className={`line-3 ${isActive ? 'bg-gray-200' : 'bg-gray-900'}`}
              />
            </Burger>
          )}
        </div>
        {isMobile && (
          <AbsoluteNav
            className={`${
              isActive ? 'translate-x-0 shadow-md' : 'translate-x-full '
            }`}
          >
            <div className='nav-link'>Home</div>
            <div className='nav-link'>Feature</div>
            <div className='nav-link'>About</div>
          </AbsoluteNav>
        )}
      </NavInner>
    </Container>
  )
}

const Container = styled.div`
  ${tw`
    w-full
    fixed
    top-0
    left-0
    px-4
    2xl:px-0
    transition-all
    duration-500
    ease-in-out
    z-10
  `}
`

const NavInner = styled.div`
  ${tw`
    w-full
    md:max-w-6xl
    mx-auto
    flex
    items-center
    justify-between
  `}

  .logo-title {
    ${tw`
        text-3xl
        font-semibold
    `}
  }

  .nav-items {
    ${tw`
        flex
        items-center
        justify-center
    `}

    .link-items {
      ${tw`
        mx-2
        px-4
        text-lg
        cursor-pointer
        border-gray-900

        transition
        duration-200
        ease-in-out
      `}

      :hover {
        ${tw`
            border-b-2
        `}
      }
    }
  }

  .nav-signup {
    ${tw`
        flex
        items-center
        justify-center
        text-lg
    `}

    h2 {
      ${tw`
        mr-2
      `}
    }

    .link-items {
      ${tw`
        px-3
        py-1
        bg-blue-600
        text-gray-200
        font-semibold
        rounded-md
        cursor-pointer

        transition
        duration-200
        ease-in-out
      `}

      :hover, :focus {
        ${tw`
            bg-blue-700
        `}
      }
    }
  }

  .line-active {
    .line-1 {
      transform: rotate(-45deg) translate(-6px, 6px);
    }

    .line-2 {
      opacity: 0;
      transform: translate(100%);
    }

    .line-3 {
      transform: rotate(45deg) translate(-5px, -5px);
    }
  }
`

const Burger = styled.div`
  ${tw`
    ml-2
    h-10
    w-10
    p-2
    flex
    flex-col
    items-center
    justify-around
    cursor-pointer
    hover:bg-gray-400
    rounded-sm
    transition
    duration-200
    ease-in-out
    z-30
  `}

  div {
    ${tw`
      w-6
      h-[2px]
      transition
      duration-200
      ease-in-out
    `}
  }
`

const AbsoluteNav = styled.div`
  ${tw`
    absolute
    top-0
    right-0
    pt-36
    px-10
    w-screen
    h-screen
    bg-gray-900
    flex
    flex-col
    items-center
    transition-all
    duration-500
    ease-in-out
    z-20
  `}

  .nav-link {
    ${tw`
        mb-4
        md:mb-0
        px-4
        text-lg
        text-gray-300
        cursor-pointer
        hover:text-gray-500
        transition
        duration-200
        ease-in-out
      `}
  }
`

export default Navbar
