import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaFacebook, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import gsap from 'gsap'
const HomePage = () => {

      useEffect(() => {
            const tl = gsap.timeline()
            tl.fromTo('.hello, .text2, .info p ', {
                  x: -100,
                  opacity: 0,
            }, {
                  x: 0,
                  opacity: 1,
                  duration: 0.4,
                  stagger: 0.1,
                  delay: 1
            }).fromTo('.social',
                  {
                        x: 100,
                        opacity: 0
                  },
                  {
                        x: 0,
                        opacity: 1,
                        duration: 0.4,
                        stagger: 0.1
                  }
            );

            tl.fromTo('.image', {
                  opacity: 0,
            }, {
                  opacity: 1,
                  duration: 0.4,
            }, '-=1.5')
            const titles = gsap.utils.toArray<HTMLElement>('.titles');
            const tl2=gsap.timeline({repeat:-1, delay:1})
            titles.forEach(title=>{
                  tl2.fromTo(title,{
                        opacity:0,
                  },{
                        opacity:1,
                        duration:1
                  },).to(title,{
                        opacity:0,
                        duration:0.8
                  },"+=1.5")
            })
      }, [])

      return (
            <div id='home' className='section  flex flex-col justify-center items-center p-4 sm:p-10 sm:pb-5 pb-4 gap-y-5 mt-[80px] '>
                  <div data-scroll data-scroll-speed={0.2} className="z-0  image opacity-0 h-[18rem] sm:h-[21rem] lg:h-[23rem] xl:h-[24rem] aspect-square rounded-full overflow-hidden">
                        <Image src='/pp2.jpg' width={400} height={400} alt='pp' className='w-full aspect-square object-cover transform filter brightness-[80%] scale-[1.2] rotate-2 -translate-x-1' />
                  </div>
                  <div className="info  flex justify-center flex-col items-center gap-y-3 cursor-default">
                        <p className='hello opacity-0 text-lg p-0 m-0  md:text-xl text-cyan-400 '>Hello</p>
                        <h1 className='text2 flex gap-4 md:gap-6 opacity-0 text-[4rem] md:text-[5rem] font-bold m-0 p-0 text-center pt-0 '>I'm <span className='flex flex-col overflow-hidden'>
                              <span className='text-cyan-400 namespan overflow-hidden '>
                                    <div className='titles opacity-1'>Babish</div>
                                    <div className='titles absolute top-0  opacity-1'>Designer</div>
                                    <div className='titles absolute top-0 opacity-1'>Developer</div>
                              </span>
                        </span></h1>
                        <p className='text-center opacity-0 w-full max-w-[850px] text-xl'>I'm a passionate <span className='text-cyan-400'>web developer</span> from Nepal, skilled in both front-end and back-end technologies, dedicated to crafting seamless and dynamic digital experiences that reflect my commitment to innovation and excellence.</p>
                        <p className='opacity-0'>Here's a bit more <span className='text-cyan-400 text-lg'>about me</span></p>
                        <div className="sociallinks  flex justify-center items-center gap-3">
                              <Link href={'https://facebook.com/babish9887'} target="_blank" rel="noopener noreferrer"><div className="social"><FaFacebookF /></div></Link>
                              <Link href={'https://github.com/babish9887'} target="_blank" rel="noopener noreferrer"><div className="social"><FiGithub /></div></Link>
                              <Link href={'https://www.linkedin.com/in/babish-chaudhary-a19369274/'} target="_blank" rel="noopener noreferrer"><div className="social"><FaLinkedinIn /></div></Link>
                        </div>
                  </div>
            </div>
      )
}

export default HomePage