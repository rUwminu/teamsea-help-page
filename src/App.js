import './App.css'
import tw from 'twin.macro'
import styled from 'styled-components'

import Home from './GalleryHero/pages/Home'

function App() {
  return (
    <MainContainer className='App'>
      <Home />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  ${tw`
    w-full
    overflow-x-hidden
  `}
`

export default App
