import React from 'react'

const Header = () => {
  return (
    <div className='bg-(image:--color-grad-1) border-[1px] border-solid shadow-2xl z-40 border-white rounded-full w-[80%] h-[10vh] mx-auto flex items-center justify-between'>
        <ol className='text-white flex gap-5 pl-20'>
            <li>About</li>
            <li>Features</li>
        </ol>
        <div className='bg-green-800 rounded-full w-[10%] h-[5vh]'>Icon</div>
        <ol className='text-white flex gap-5 pr-20'>
            <li>Pricing</li>
            <li>Contact</li>
        </ol>
    </div>
  )
}

export default Header