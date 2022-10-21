import React from 'react'

const Footer = () => {
  return (
    <div className=' w-full h-14 lg:h-20  relative'>
        <div className='footerglassbg bg-black '/>
        <div className='h-full w-full flex gap-4 items-center justify-between   lg:px-20 text-xs lg:text-sm px-2'>
            <h1 className='small_grad_text'>Copyright © 2022 <span className='hidden lg:blo'>Velammal Enginnering College</span><span className='lg:hidden'>VEC</span> "OZMENTA"</h1>
            <h1 className='small_grad_text'>Developed By <span className='grad_text'>Nachiappan</span></h1>

            
        </div>

        
    </div>
  )
}

export default Footer