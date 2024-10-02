import React from 'react'

const Footer = () => {
  return (
    <div className='w-ful h-[250px] flex justify-center items-center  bg-[#030303]'>
            <div className='flex justify-center flex-col items-center gap-y-4 w-[80vw] max-w-[1200px] ' >
            <h1 className='text-4xl lg:text-5xl font-semibold tracking-wider text-cyan-400 '>Babish Chaudhary</h1>
            <a href="mailto:babishchaudhary.dev@gmail.com" className='text-slate-300'>
                  <p>babishchaudhary.dev@gmail.com</p>
                  </a>
                  <div className='h-[1px] w-full bg-slate-700 mt-4 '/>
            <h1 className='text-gray-300'>Copyright © 2024 Babish Chaudhary . All Rights Reserved.</h1>
            </div>
    </div>
  )
}

export default Footer