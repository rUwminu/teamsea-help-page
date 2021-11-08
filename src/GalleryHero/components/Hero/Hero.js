import React, { useState } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

// images
import PineArt from '../../Asset/pine.jpg'
// Icons
import { ChevronRight, ChevronLeft } from '@mui/icons-material'
// set 1 images
import SetOneChair from '../../Asset/furniture_images/set_1/o-chair.png'
import SetOneTable from '../../Asset/furniture_images/set_1/o-table.png'

const colorPicker = [
  {
    id: 1,
    color: '#382F80',
  },
  {
    id: 2,
    color: '#4165C4',
  },
  {
    id: 3,
    color: '#9854CC',
  },
  {
    id: 4,
    color: '#DF9C58',
  },
  {
    id: 5,
    color: '#2AC3A8',
  },
  {
    id: 6,
    color: '#D2827C',
  },
  {
    id: 7,
    color: '#74D5B1',
  },
  {
    id: 8,
    color: '#CA601D',
  },
]

const Hero = () => {
  const [theme, setTheme] = useState('#4165C4')
  const [typeRoom, setTypeRoom] = useState('r1')
  const [isVeiw, setIsVeiw] = useState(false)

  return (
    <SectionContainer active={isVeiw} theme={theme}>
      <HeroContainer
        className={`${
          isVeiw ? 'items-center md:items-start pb-96' : 'items-center pb-4'
        }`}
      >
        <ArtCard
          className={`${isVeiw ? 'items-center' : 'items-start'}`}
          active={isVeiw}
        >
          <img src={PineArt} className='art-img' alt='art' />
          {isVeiw && (
            <div className='furniture-main-container'>
              <div
                className={`furniture-container set-one-style  ${
                  typeRoom === 'r2'
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-full opacity-0'
                }`}
              >
                <img className='set-one-table' src={SetOneTable} alt='' />
                <img className='set-one-chair' src={SetOneChair} alt='' />
              </div>
              <div
                className={`furniture-container set-one-style  ${
                  typeRoom === 'r3'
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-full opacity-0'
                }`}
              >
                <img className='set-one-table' src={SetOneTable} alt='' />
                <img className='set-one-chair' src={SetOneChair} alt='' />
              </div>
              <div
                className={`furniture-container set-one-style  ${
                  typeRoom === 'r4'
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-full opacity-0'
                }`}
              >
                <img className='set-one-table' src={SetOneTable} alt='' />
                <img className='set-one-chair' src={SetOneChair} alt='' />
              </div>
            </div>
          )}
        </ArtCard>
        <div
          className={`art-info ${
            isVeiw ? 'w-0 h-0 overflow-hidden' : 'w-full'
          }`}
        >
          <h1>
            Feel the Art Around
            <br />
            Yourself
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            corporis veritatis cupiditate soluta sit, vitae nesciunt enim neque
            optio id!
          </p>
          <div onClick={() => setIsVeiw(true)} className='view-btn'>
            View Live
            <ChevronRight className='back-icon' />
          </div>
        </div>
        <ColorPickerContainer
          className={`${
            isVeiw
              ? 'translate-x-0 opacity-100'
              : '-translate-x-full opacity-0 pointer-events-none'
          }`}
        >
          <h2>
            Wall Color<span>&nbsp;</span>
          </h2>
          <div className='inner-container'>
            {colorPicker.map((x) => (
              <ColorPallete
                onClick={() => setTheme(x.color)}
                key={x.id}
                color={x.color}
                className={`${theme === x.color && 'border-2 border-gray-900'}`}
              />
            ))}
          </div>
        </ColorPickerContainer>

        <RoomsPickerContainer
          className={`${
            isVeiw
              ? 'translate-y-0 opacity-100'
              : 'translate-y-full opacity-0 pointer-events-none'
          }`}
        >
          <h2>
            Rooms Views<span>&nbsp;</span>
          </h2>
          <div className='room-container'>
            <div
              className={`room-type ${typeRoom === 'r1' && 'bg-gray-200 px-2'}`}
              onClick={() => setTypeRoom('r1')}
            >
              none
            </div>
            <div
              className={`room-type ${typeRoom === 'r2' && 'bg-gray-200 px-2'}`}
              onClick={() => setTypeRoom('r2')}
            >
              Living Room
            </div>
            <div
              className={`room-type ${typeRoom === 'r3' && 'bg-gray-200 px-2'}`}
              onClick={() => setTypeRoom('r3')}
            >
              Reading Corner
            </div>
            <div
              className={`room-type ${typeRoom === 'r4' && 'bg-gray-200 px-2'}`}
              onClick={() => setTypeRoom('r4')}
            >
              Grand Display
            </div>
          </div>
        </RoomsPickerContainer>

        <div
          onClick={() => setIsVeiw(false)}
          className={`close-btn ${isVeiw ? 'inline-flex' : 'hidden'}`}
        >
          Close Live View
        </div>
      </HeroContainer>
    </SectionContainer>
  )
}

const SectionContainer = styled.section`
  ${tw`
    w-full
    h-full
    min-h-[100vh]
  `}
  background-color: ${(props) =>
    props.active ? props.theme : 'rgba(249, 250, 251, 1)'};
`

const HeroContainer = styled.div`
  ${tw`
    relative
    mx-auto
    px-4
    pt-36
    md:pb-20
    lg:px-0
    w-full
    h-full
    min-h-[50rem]
    max-w-6xl
    flex
    flex-col
    md:flex-row
    justify-center
    overflow-hidden

    transition-all
    duration-200
    ease-in-out
  `}

  .art-info {
    ${tw`
        flex
        flex-col
        mt-6
        md:mt-0

        transition-all
        duration-500
        ease-in-out
    `}

    h1 {
      ${tw`
        text-4xl
        md:text-5xl
        lg:text-6xl
        text-gray-900
        font-semibold
      `}
    }

    p {
      ${tw`
        mt-4
        md:text-xl
        text-gray-900
      `}
    }

    .view-btn {
      ${tw`
        flex
        items-center
        justify-start
        mt-4
        py-2
        max-w-[10rem]
        text-lg
        font-semibold
        rounded-md
        cursor-pointer
        transition-all
        duration-200
        ease-in-out
      `}

      .back-icon {
        ${tw`
          relative
          text-xl
          md:text-3xl
          transition
          duration-200
          ease-in-out
        `}
      }

      :hover,
      :focus {
        ${tw`
            pl-4
            text-gray-200
            bg-blue-600
            shadow-md
        `}

        .back-icon {
          animation: backAnimate 2.5s ease infinite;
        }
      }
    }

    @keyframes backAnimate {
      20% {
        ${tw`
        opacity-0
        -translate-x-full
      `}
      }
      30% {
        ${tw`
        opacity-0
        translate-x-full
      `}
      }
      40% {
        ${tw`
        opacity-100
        translate-x-0
        right-1
      `}
      }
      50% {
        ${tw`
        right-0
      `}
      }
      55% {
        ${tw`
        right-1
      `}
      }
      60% {
        ${tw`
        right-0
      `}
      }
      100% {
        ${tw`
        right-0
        translate-x-0
      `}
      }
    }
  }

  .close-btn {
    ${tw`
        absolute
        top-28
        right-4
        lg:right-0
        py-1
        px-4
        text-lg
        font-semibold
        text-gray-200
        bg-gray-600
        bg-opacity-50
        rounded-md
        cursor-pointer
        transition-all
        duration-200
        ease-in-out
    `}

    :hover {
      ${tw`
        bg-opacity-75
        shadow-lg
      `}
    }
  }
`

const ArtCard = styled.div`
  ${tw`
    h-full
    min-w-[25rem]
    flex
    flex-col
    justify-center
    transition-all
    duration-200
    ease-in-out
  `}

  .art-img {
    ${tw`
        bg-gray-700
        object-cover
        transition-all
        duration-500
        ease-in-out
    `}

    width: ${(props) => (props.active ? '10rem' : '18.5rem')};
    height: ${(props) => (props.active ? '13.5rem' : '25.5rem')};
    box-shadow: 10px 20px 46px -14px rgba(0, 0, 0, 0.75);
  }

  .furniture-main-container {
    ${tw`
        relative
        w-full
        max-w-md
    `}
  }

  .furniture-container {
    ${tw`
        w-full
        h-56
        relative
        absolute
        top-0
        right-0
        transition-all
        duration-200
        ease-in-out
    `}
  }

  .set-one-style {
    .set-one-table {
      ${tw`
        absolute
        bottom-0
        left-[50%]
        w-44
        object-cover
      `}
      transform: translateX(-70%);
    }

    .set-one-chair {
      ${tw`
        absolute
        bottom-10
        left-[50%]
        w-28
        object-cover
      `}
    }
  }
`

const ColorPickerContainer = styled.div`
  ${tw`
    absolute
    top-[50%]
    left-4
    md:left-0
    -translate-y-1/2
    pb-6
    px-3
    h-auto
    bg-gray-50
    rounded-md
    shadow-lg

    transition-all
    duration-500
    ease-in-out
  `}

  h2 {
    ${tw`
        relative
        pt-2
        mb-4
        md:text-lg
        text-gray-900
        font-semibold
    `}

    span {
      ${tw`
        absolute
        bottom-0
        left-0
        w-2/3
        h-[2px]
        bg-gray-900
      `}
    }
  }

  .inner-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    ${tw`
        gap-1
        md:gap-2
    `}
  }
`

const ColorPallete = styled.div`
  ${tw`
    w-8
    h-8
    cursor-pointer

    transition-all
    duration-200
    ease-in-out
  `}
  background-color: ${(props) => props.color};

  :hover {
    ${tw`
        shadow-md
    `}
  }
`

const RoomsPickerContainer = styled.div`
  ${tw`
    absolute
    bottom-8
    left-[50%]
    -translate-x-1/2
    w-full
    max-w-md
    p-2
    bg-gray-50
    rounded-md

    transition-all
    duration-500
    ease-in-out
  `}

  h2 {
    ${tw`
        relative
        pt-2
        mb-2
        md:text-lg
        text-gray-900
        font-semibold
    `}

    span {
      ${tw`
        absolute
        bottom-0
        left-0
        w-2/3
        h-[2px]
        bg-gray-900
      `}
    }
  }

  .room-container {
    ${tw`
        flex
        items-center
        justify-center
    `}

    .room-type {
      ${tw`
        py-1
        mr-4
        rounded-md
        transition-all
        duration-200
        ease-in-out
        cursor-pointer
      `}

      :hover {
        ${tw`
            px-2
            bg-gray-200
        `}
      }
    }
  }
`

export default Hero
