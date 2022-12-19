import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { endGame } from '../../functions/game'

export default function Button({className, type, children }) {

  const params = useParams()
  const navigate = useNavigate()
  
  
  const clickEndGame = () => {
    endGame(params.name)
    navigate('/')
  }

  return (
    <button className={className} type={type} onClick={clickEndGame}>{children}</button>
  )
}
