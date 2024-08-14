import React from 'react'
const Button = ({label,iconURL}) => {
    console.log(label)
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white'>
        {label}
        <img src={iconURL} className='rounded-full ml-2 w-5 h-5'/>
        
    </button>
    
  )
}

export default Button