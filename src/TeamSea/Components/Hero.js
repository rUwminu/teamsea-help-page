import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

// Trash Icons
import Bag from '../Assets/trash/bag.svg'
import Takeout from '../Assets/trash/takeout.svg'
import Headphones from '../Assets/trash/headphones.svg'
import Phones from '../Assets/trash/phones.svg'
import Toycar from '../Assets/trash/toycar.svg'
import Bottle from '../Assets/trash/bottle.svg'

const Hero = () => {
  const MAX_MONEY_RAISED = 30000000
  const [fundRaised, setFundRaised] = useState()
  const [trashFoat, setTrashFoat] = useState()

  const setupTrash = async () => {
    const amountRaised = await fetch('https://tscache.com/donation_total.json')
      .then((res) => res.json())
      .then((data) => data.count)

    const amountLeftToRaise = Math.max(MAX_MONEY_RAISED - amountRaised, 0)

    const stringifiedAmount = trashFormatter.format(amountLeftToRaise)

    const trashAmount = {
      xxl: {
        amount: parseInt(`${stringifiedAmount[0]}${stringifiedAmount[1]}`),
        icon: 'bag',
      },
      xl: {
        amount: parseInt(stringifiedAmount[2]),
        icon: 'takeout',
      },
      lg: {
        amount: parseInt(stringifiedAmount[3]),
        icon: 'headphones',
      },
      m: {
        amount: parseInt(stringifiedAmount[4]),
        icon: 'phones',
      },
      sm: {
        amount: parseInt(stringifiedAmount[5]),
        icon: 'toycar',
      },
      xs: {
        amount: parseInt(stringifiedAmount[6]),
        icon: 'bottle',
      },
    }

    setFundRaised(currencyFormatter.format(amountRaised))
    setTrashFoat(Object.values(trashAmount))
  }

  const trashFormatter = new Intl.NumberFormat('en-us', {
    minimumIntegerDigits: 8,
    maximumFractionDigits: 0,
    useGrouping: false,
  })

  const currencyFormatter = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  })

  const checkTypeIcon = (name) => {
    //console.log(name)
    switch (name) {
      case 'bag':
        return Bag
      case 'takeout':
        return Takeout
      case 'headphones':
        return Headphones
      case 'phones':
        return Phones
      case 'toycar':
        return Toycar
      case 'bottle':
        return Bottle
      default:
        return null
    }
  }

  const randomNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  useEffect(() => {
    setupTrash()
  }, [])

  //console.log(fundRaised)
  //console.log(trashFoat)

  return (
    <HeroContainer>
      <div className='landscape'>
        <div className='mountain'></div>
        <div className='mountain mountain-2'></div>
        <div className='mountain mountain-3'></div>
        <div className='sun-container sun-container-1'></div>
        <div className='sun-container'>
          <div className='sun'></div>
        </div>
        <div className='cloud'></div>
        <div className='cloud cloud-1'></div>
        <div className='sun-container sun-container-reflection'>
          <div className='sun'></div>
        </div>
        <div className='light'></div>
        <div className='light light-1'></div>
        <div className='light light-2'></div>
        <div className='light light-3'></div>
        <div className='light light-4'></div>
        <div className='light light-5'></div>
        <div className='light light-6'></div>
        <div className='light light-7'></div>
        <div className='water'></div>
        <div className='splash'></div>
        <div className='splash delay-1'></div>
        <div className='splash delay-2'></div>
        <div className='splash splash-4 delay-2'></div>
        <div className='splash splash-4 delay-3'></div>
        <div className='splash splash-4 delay-4'></div>
        <div className='splash splash-stone delay-3'></div>
        <div className='splash splash-stone splash-4'></div>
        <div className='splash splash-stone splash-5'></div>
        <div className='lotus lotus-1'></div>
        <div className='lotus lotus-2'></div>
        <div className='lotus lotus-3'></div>
        <div className='trash-container'>
          {trashFoat &&
            trashFoat.map((x) => {
              var dom_content = []
              const { amount, icon } = x

              for (let i = 0; i < amount; i++) {
                const top = randomNumberBetween(0, 50)
                const size = top / 5 + 1

                dom_content.push(
                  <TrashIcon
                    className={`trash`}
                    style={{
                      width: `${size}vmin`,
                      height: `${size}vmin`,
                      top: `${top}vh`,
                      left: `${randomNumberBetween(0, 100)}vw`,
                      '--rotation': `${randomNumberBetween(0, 100)}deg`,
                    }}
                    rotation={`${randomNumberBetween(-30, 30)}`}
                    src={checkTypeIcon(icon)}
                    alt='trash-icons'
                  />
                )
              }

              return <>{dom_content}</>
            })}
        </div>
        <div className='front'>
          <div className='stone'></div>
          <div className='grass'></div>
          <div className='grass grass-1'></div>
          <div className='grass grass-2'></div>
          <div className='reed'></div>
          <div className='reed reed-1'></div>
        </div>
      </div>
      <div className='hero-info'>
        <h1 className='hero-title leading-relaxed'>
          Lets Help #TEAM<span>SEAS</span> to Remove 30 Million Pounds of trash
          <br />
          by January 1st, 2022
        </h1>
        <div className='link-btn'>
          <a href='https://teamseas.org/'>Donate Here</a>
        </div>
        {fundRaised && (
          <h1 className='hidden-title'>
            {fundRaised}
            <br />
            <span>POUNDS REMOVED</span>
          </h1>
        )}
      </div>

      {fundRaised && (
        <h1 className='fund-title'>
          {fundRaised}
          <br />
          <span>POUNDS REMOVED</span>
        </h1>
      )}
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
  ${tw`
    relative
    w-full
  `}

  .hero-info {
    ${tw`
        absolute
        top-48
        left-0
        right-0
        mx-auto
        px-4
        lg:px-0
        w-full
        max-w-6xl
        z-10
    `}

    .hero-title {
      ${tw`
        w-full
        max-w-2xl
        text-2xl
        md:text-3xl
        lg:text-4xl
        text-gray-900
        font-bold
      `}

      span {
        ${tw`
            font-extrabold
            text-blue-600
        `}
      }
    }

    .link-btn {
      ${tw`
        mt-4
        py-1
        w-40
        rounded-md

        transition-all
        duration-200
        ease-in-out
      `}

      a {
        ${tw`
            text-lg
            md:text-xl
            text-blue-200
            font-semibold
        `}
      }

      :hover {
        ${tw`
            pl-2
            bg-blue-700
            shadow-md
        `}

        a {
          ${tw`
            text-gray-200
          `}
        }
      }
    }

    .hidden-title {
      ${tw`
        md:hidden
        mt-4
        text-xl
        text-gray-100
        opacity-90
        font-semibold
      `}
    }
  }

  .fund-title {
    ${tw`
        hidden
        md:inline-block
        absolute
        top-1/2
        left-1/2
        text-3xl
        lg:text-4xl
        text-gray-100
        opacity-80
        font-semibold     
        z-30
    `}
    transform: translate(5px, -104%);
    user-select: none;

    span {
      ${tw`
        text-lg
      `}
    }
  }

  .trash-container {
    ${tw`
        absolute
        bottom-0
        left-0
        w-full
        h-[50vh]
    `}
  }
`

const TrashIcon = styled.img`
  ${tw`
    absolute
    opacity-80
  `}/* animation: floating 2s ease-in-out infinite alternate;

  @keyframes floating {
    from {
      transform: rotate(${(props) => props.rotation}deg) translateY(1vh);
    }
    to {
      transform: rotate(calc(${(props) => props.rotation}deg + 10deg))
        translateY(vh);
    }
  } */
`

export default Hero
