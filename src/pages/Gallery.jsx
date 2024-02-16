import React, { useContext } from 'react'
import { Carousell } from '../components/Carousel'
import { UserContext } from '../context/UserContext'
import { NotFound } from './NotFound';

export const Gallery = () => {
  const {user} = useContext(UserContext);
  
  if (!user) return <NotFound /> 

  return (
    <div>
        <h5 className='m-4'>Itt találod a gyülekezet életképeit</h5>
        <Carousell />
    </div>
  )
}
