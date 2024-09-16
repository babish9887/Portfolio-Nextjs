import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { BiLink } from 'react-icons/bi'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
const portfolioDiv = 'service relative overflow-hidden rounded-md aspect-[16/9] flex flex-col group p-0'
const buttonStyle = 'btn text-lg flex gap-1 justify-center items-center'
const PortfolioPage = () => {

      gsap.registerPlugin(ScrollTrigger)
      useEffect(() => {

            var tl2 = gsap.timeline({
                  scrollTrigger: {
                        trigger: ".pfs",
                        scroller: 'body',
                        start: "top 60%",
                        end: 'top -60%',
                        scrub: 2,
                  }
            })

            // tl2.fromTo('.l1left', {
            //       y: 100,
            //       opacity: 0,
            //       duration: 1,
            // }, {
            //       opacity: 1,
            //       y: 0,
            // })

            // tl2.fromTo('.l1right', {
            //       y: 100,
            //       opacity: 0,
            //       duration: 1,
            // }, {
            //       opacity: 1,
            //       y: 0,
            // })

            // tl2.fromTo('.l2left', {
            //       y: 100,
            //       opacity: 0,
            //       duration: 1,
            // }, {
            //       opacity: 1,
            //       y: 0,
            // })

            // tl2.fromTo('.l2right', {
            //       y: 100,
            //       opacity: 0,
            //       duration: 1,
            // }, {
            //       opacity: 1,
            //       y: 0,
            // })
            // tl2.fromTo('.l3left', {
            //       y: 100,
            //       opacity: 0,
            //       duration: 1,
            // }, {
            //       opacity: 1,
            //       y: 0,
            // })
            // tl2.fromTo('.l3right', {
            //       y: 100,
            //       opacity: 0,
            //       duration: 1,
            // }, {
            //       opacity: 1,
            //       y: 0,
            // })


            tl2.fromTo('.l1left, .l1right, .l2left, .l2right, .l3left, .l3right', {
                  y: 100,
                  opacity: 0,
                  duration: 2,
            }, {
                  opacity: 1,
                  y: 0,
                  stagger:0.5
            })
      }, [])

      return (
            <div id='portfolio' className='section w-full flex justify-center items-center sm:p-10 md:p-5 lg:p-10 mb-10' >
                  <div className='pfs p-5 pt-10  md:pt-10 md:p-0 lg:p-5 w-full h-auto max-w-[1200px] gap-y-10 flex flex-col justify-center items-center border-0 border-t border-gray-800 '>

                        <h1 className='heading'>Portfolio</h1>
                        <div className='w-full grid grid-cols-1 md:w-auto md:grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-16 '>
                              <div className={`${portfolioDiv} l1left`}>
                                    <Image src='/tourease.png' width={1000} height={1000} alt='portfolio' className='object-cover  w-full' />
                                    <div className='btnDiv '>
                                          <Link href={'https://tourease-babish9887.vercel.app/'}>
                                                <button className={`${buttonStyle}`}>View More<BiLink /></button>
                                          </Link>
                                    </div>
                              </div>


                              <div className={`${portfolioDiv} l1right`}>
                                    <Image src='/chatGPT.png' width={1000} height={1000} alt='portfolio' className='object-cover h-full' />
                                    <div className='btnDiv '>
                                          <Link href={'https://chat-gpt-babish9887.vercel.app/'}>
                                                <button className={`${buttonStyle}`}>View More<BiLink /></button>
                                          </Link>
                                    </div>
                              </div>

                              <div className={`${portfolioDiv} l2left`}>

                                    <Image src='/spotify-clone.png' width={1000} height={1000} alt='portfolio' className='object-cover h-full' />


                                    <div className='btnDiv '>
                                          <Link href={'https://spotify-clone-babish9887.vercel.app/'}>
                                                <button className={`${buttonStyle}`}>View More<BiLink /></button>
                                          </Link>
                                    </div>

                              </div>


                              <div className={`${portfolioDiv} l2right`}>
                                    <Image src='/thewilsoasis.png' width={1000} height={1000} alt='portfolio' className='object-cover h-full' />
                                    <div className='btnDiv '>
                                          <Link href={'https://the-wild-oasis-babish9887.vercel.app/'}>
                                                <button className={`${buttonStyle}`}>View More<BiLink /></button>
                                          </Link>
                                    </div>

                              </div>


                              <div className={`${portfolioDiv} l3left`}>

                                    <Image src='/digitaloasis.png' width={1000} height={1000} alt='portfolio' className='object-cover h-full' />


                                    <div className='btnDiv '>
                                          <Link href={'https://ecommerce-babish9887.vercel.app/'}>
                                                <button className={`${buttonStyle}`}>View More<BiLink /></button>
                                          </Link>
                                    </div>

                              </div>

                              <div className={`${portfolioDiv} l3right`}>

                                    <Image src='/reactpizza.png' width={1000} height={1000} alt='portfolio' className='object-cover h-full' />


                                    <div className='btnDiv '>
                                          <Link href={'https://babish9887-react-pizza.netlify.app/'}>
                                                <button className={`${buttonStyle}`}>View More<BiLink /></button>
                                          </Link>
                                    </div>

                              </div>


                        </div>

                  </div>

            </div>
      )
}

export default PortfolioPage