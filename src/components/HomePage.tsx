import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaFacebook, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import gsap from 'gsap'
const HomePage = () => {

      useEffect(()=>{
            const tl=gsap.timeline()

            tl.fromTo('.hello, .text2, .info p ',{
                  x:-100,
                  opacity:0,
            },{
                  x:0,
                  opacity:1,
                  duration:0.4,
                  stagger:0.1,
                  delay:1
            }).fromTo(' .social',{
                  x:100,
                  opacity:0,
                  },{
                        x:0,
                        opacity:1,
                        duration:0.4,

            },'-=0')

            tl.fromTo('.image',{
                  opacity:0,
                  },{
                        opacity:1,
                        duration:0.4,
                  },'-=0.6')
      },[])

  return (
    <div id='home' className='  flex flex-col justify-center items-center p-4 sm:p-10 sm:pb-5 pb-4 gap-y-5 mt-[80px] '>
            <div data-scroll data-scroll-speed={0.2} className="z-0  image opacity-0 h-[18rem] sm:h-[21rem] lg:h-[23rem] xl:h-[24rem] aspect-square rounded-full overflow-hidden">
                  <Image  src='/pp.jpg' width={400} height={400} alt='pp' className='w-full aspect-square object-cover transform scale-[1.3]' />
            </div>
            <div className="info  flex justify-center flex-col items-center gap-y-3">
                  <p data-scroll data-scroll-speed={0.15} className='hello opacity-0 text-lg p-0 m-0  md:text-xl text-cyan-400'>Hello</p>
                  <h1 data-scroll data-scroll-speed={0.10} className='text2 opacity-0 text-[4rem] md:text-[5rem] font-bold m-0 p-0 text-center pt-0'>I'm <span className='text-cyan-400'>Babish</span></h1>
                  <p data-scroll data-scroll-speed={0.05} className='text-center opacity-0 w-full max-w-[850px] text-xl'>I'm a passionate <span className='text-cyan-400'>web developer</span> from Nepal, skilled in both front-end and back-end technologies, dedicated to crafting seamless and dynamic digital experiences that reflect my commitment to innovation and excellence.</p>
                  <p className='opacity-0'>Here's a bit more <span className='text-cyan-400 text-lg'>about me</span></p>
                  <div className="sociallinks  flex justify-center items-center gap-3">
                        <Link href={'https://facebook.com/babish9887'}><div className="social"><FaFacebookF /></div></Link>
                        <Link href={'https://github.com/babish9887'}><div className="social"><FiGithub /></div></Link>
                        <Link href={'https://www.linkedin.com/in/babish-chaudhary-a19369274/'}><div className="social"><FaLinkedinIn/></div></Link>
                  </div>

            </div>
    </div>
  )
}

export default HomePage