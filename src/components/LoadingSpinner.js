import React from 'react'
import loader from '../assets/loading.gif'
function LoadingSpinner() {
  return (
    <div className='h-16 w-16 items-center justify-center mx-auto'>
        <img className='h-10 w-10 text-center' alt='Loading' src={loader}/>
    </div>
  )
}

export default LoadingSpinner