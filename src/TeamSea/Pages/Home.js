import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'

const Home = () => {
  return (
    <MainContainer>
      <Navbar />
      <Hero />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  ${tw`
    w-full
  `}
`

export default Home
