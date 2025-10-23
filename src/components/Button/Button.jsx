import React from 'react'

const Button = ({ children }) => {
  return (
      <button className='bg-acento-primario text-white min-w-40  py-2 px-4 rounded-md hover:bg-acento-primario/80 transition-colors duration-300 cursor-pointer'>
          {children}
    </button>
  )
}

export default Button
