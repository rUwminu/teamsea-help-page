import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

// Images
import TeamSeaLogo from '../Assets/teamseas.png'

const Navbar = () => {
  return (
    <NavContainer>
      <div className='inner-container'>
        <div className='logo'></div>
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.div`
  ${tw`
    fixed
    top-0
    left-0
    w-full
    py-2
    z-10
  `}

  .inner-container {
    ${tw`
        mx-auto
        w-full
        max-w-6xl
        px-4
        lg:px-0
      `}
  }

  .logo {
    ${tw`
        absolute
        w-28
        h-28
        rounded-full
        overflow-hidden
    `}

    &:before {
      content: '';
      background: url(${TeamSeaLogo});
      background-size: cover;

      ${tw`
        absolute
        w-full
        h-full
        ml-[-2px]
      `}
    }

    &:after {
      content: '';
      ${tw`
        absolute
        w-[200%]
        h-[200%]
        bottom-0
        -left-1/2
        bg-white
        bg-opacity-75
        rounded-[35%]
      `}
      animation: waves 5s ease-in-out alternate infinite;
    }
  }

  @keyframes waves {
    to {
      transform: translateY(-50%) rotate(540deg);
    }
  }
`

export default Navbar
