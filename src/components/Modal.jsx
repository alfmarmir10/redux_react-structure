import React from 'react'
import { useSelector } from 'react-redux'

const Modal = () => {

  const {isVisible} = useSelector(state => state.modal);
  const { name, age } = useSelector(state => state.user);

  return (
    <div>
      <h1>{(isVisible) ? 
      (<p>{name} is {age} years old</p>) : 
      null
      }</h1>
    </div>
  )
}

export default Modal
