import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { endGame } from '../../functions/game'
import * as types from '../../store/types'

export default function Button({className, type, children }) {

  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const clickEndGame = () => {
    endGame(params.name)
    dispatch({ type: types.DEL_SCORES})
    navigate('/')
  }

  return (
    <button className={className} type={type} onClick={clickEndGame}>{children}</button>
  )
}
