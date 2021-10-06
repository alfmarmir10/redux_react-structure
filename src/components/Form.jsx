import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { userInfo } from '../actions/user.Actions';

const Form = () => {

  const [data, setData] = useState({name: "", age: null});
  const dispatch = useDispatch();

  const handleSendInfo = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(userInfo(data));
  }

  return (
    <form action="" onSubmit={handleSendInfo}>
      <input type="text" placeholder="Nombre" onChange={(e) =>setData({...data, name: e.target.value})}/>
      <input type="text" placeholder="Edad" onChange={(e) =>setData({...data, age: e.target.value})}/>
      <button type="submit">Guardar</button>
    </form>
  )
}

export default Form
