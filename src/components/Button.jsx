import React from 'react'
import { useDispatch } from 'react-redux';
import { showModal } from '../actions/modal.Actions';

const Button = () => {
  const dispatch = useDispatch();

  function  handleClick(){
    dispatch(showModal());
  }
  return (
    <div>
      <button onClick={handleClick}>Show title</button>
    </div>
  )
}

export default Button
