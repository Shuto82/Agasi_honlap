import React from 'react'
import { Posts } from '../components/Posts'

export const Home = () => {
  return (
    <div>
      <h2 className='m-2'>Istentiszteleteinket vasárnaponként 9h-i kezdettel tartjuk a templomban/parókián.</h2>
      <hr />
      <h2>Híreink</h2>
      <Posts />  
    </div>
  )
}
