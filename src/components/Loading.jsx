import React from 'react'


export const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
      <img src={require('../assets/loading.gif')} alt='loading' height={100} width={100}/>
    </div>
  )
}
