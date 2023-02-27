import React from 'react'
import Confetti from 'react-confetti'

export default ({w, h}) => {
  return (
      <Confetti
          width={w}
          height={h}
          style={{position: "relative"}}
      />
  )
}