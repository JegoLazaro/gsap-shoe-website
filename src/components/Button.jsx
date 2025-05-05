import React from 'react'

const Button = ({title, id, rightIcon, leftIcon, containerClass}) => {
  return (
    <button className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 ${containerClass}`} id={id}>
        {leftIcon} 
        <span className='relative incline-flex overflow-hidden font-circular-web text-xs uppercase'>
            <div>
                {title}
            </div>
        </span>
        
    </button>
  )
}

export default Button