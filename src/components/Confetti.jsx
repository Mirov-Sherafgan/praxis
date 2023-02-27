import React from 'react'
import Confetti from 'react-confetti'

export default ({w, h}) => {
  return (
      <Confetti
          width={w}
          height={13000}
          confettiSource={{x: 50, y: 12300, w: 800, h: 600}}
      />
  )
}