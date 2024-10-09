"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
const ContactMePage = () => {
      gsap.registerPlugin(ScrollTrigger)
      useEffect(()=>{
            gsap.fromTo('.contactForm',{
                  y:100,
                  opacity:0
                  },{
                        y:0,
                        opacity:1,
                        scrollTrigger:{
                              trigger:".contactForm",
                              scroller:'body',
                              start:'top 80%',
                              end:'top 50%',
                              scrub:2,
                        }
            })
      },[])

      return (
            <div id='contactme' className='section relative w-full h-full flex justify-center items-center p-4 sm:p-10 md:p-5 lg:p-10 mb-10'>
                  <div className='relative p-5 pt-10 md:pt-10 md:p-0 lg:p-5 w-full h-auto max-w-[1200px] gap-y-10 flex flex-col justify-center items-center border-0 border-t border-gray-800'>
                        <h1 className='heading'>Contact Me</h1>
                        <div className="contactForm flex justify-center items-center relative h-full flex-col sm:flex-row min-h-[500px] w-full max-w-[1000px] bg-slate-800 rounded-md overflow-hidden ">
                              <div className=' w-full sm:w-1/2 h-full p-5 sm:min-h-[500px] flex flex-col justify-center items-center gap-3'>
                                    <h1 className='text-3xl text-center'>Let's get in Touch</h1>
                                    <div className='w-auto aspect-square'>
                                          <Image src='/git1.png' width={200} height={200} alt='contactme' className='object-cover w-full ' />
                                    </div>
                                    <h1 className='text-xl mb-2'>Connect With Me</h1>
                                    <div className='gap-x-2 bg-transparent flex justify-center items-center'>


                                          <Link href={'https://facebook.com/babish9887'} target="_blank" rel="noopener noreferrer"><div className="social opacity-1"><FaFacebook /></div></Link>
                                          <Link href={'https://github.com/babish9887'} target="_blank" rel="noopener noreferrer"><div className="social"><FaGithub /></div></Link>
                                          <Link href={'https://www.instagram.com/babish9899/'} target="_blank" rel="noopener noreferrer">
                                                <div className='social'><FaInstagram /></div>
                                          </Link>
                                          <Link href={'https://www.linkedin.com/in/babish-chaudhary-a19369274/'} target="_blank" rel="noopener noreferrer"><div className="social"><FaLinkedin /></div></Link>

                                    </div>
                              </div>
                              <div className='w-full sm:w-1/2  h-full flex flex-col justify-center items-center p-3 md:p-5 sm:min-h-[500px] bg-cyan-400'>
                                    <h1 className='text-2xl text-black font-semibold'>Contact Me</h1>
                                    <form className="flex flex-col gap-3 w-full h-full p-5 gap-y-5">
                                          <input type="text" id='name' placeholder="Name" className="w-full p-2 rounded-lg bg-cyan-300 outline-none border border-slate-800 text-black placeholder:text-black" />


                                          <input type="email" id='email' placeholder="Email" className="w-full p-2 rounded-lg bg-cyan-300 outline-none border border-slate-800 text-black placeholder:text-black" />

                                          <textarea placeholder="message" id='message' className="w-full h-full min-h-[120px] rounded-lg bg-cyan-300 outline-none border border-slate-800 text-black placeholder:text-black p-2" />

                                          <button type='button' className='px-3 py-2 bg-cyan-300 hover:bg-cyan-500 rounded-lg transition-all text-black'>Submit</button>
                                    </form>
                              </div>
                        </div>
                  </div>
            </div>

      )
}

export default ContactMePage