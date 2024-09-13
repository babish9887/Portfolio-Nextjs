'use client'
import React, { useEffect } from 'react'
import { FaDownload } from 'react-icons/fa'
import { MdOutlineFileDownload } from 'react-icons/md'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Link from 'next/link'
const AboutPage = () => {
      gsap.registerPlugin(ScrollTrigger)
      useEffect(()=>{
            const tl=gsap.timeline()
            tl.fromTo('.heading',{
                  opacity:0,
            },{
                  opacity:1,
                  scrollTrigger:{
                        trigger:"#aboutme",
                        start:"top 70%",
                        end:"top 50%",
                        scrub:1
                  }
            })
            tl.fromTo('.brief',{
                  opacity:0,
                  y:200
                  },{
                        opacity:1,
                        y:0,
                        scrollTrigger:{
                              trigger:"#aboutme",
                              start:"top 70%",
                              end:"top 0%",
                              scrub:1
                        }

            })
      },[])
  return (
      <div id='aboutme' className=' w-full flex justify-center items-center lg:p-10 p-5 md:p-8'>

    <div className='w-full max-w-[1200px]  flex flex-col justify-center items-center lg:gap-y-20 md:gap-y-12 sm:gap-10   sm:p-10 border-0 border-t border-gray-800 pt-10'>
      <h1 className='heading opacity-0'>About Me</h1>
      <div className="aboutme w-full flex flex-col md:flex-row justify-center items-start gap-y-10 " >
            <div className="div w-full md:w-1/2 px-5 min-h-[200px] flex flex-col justify-center items-center sm:items-start gap-y-8">
                 <h1 className='text-5xl line leading-tight font-bold text-center sm:text-left'> <span className='text-cyan-400'>Web Developer</span>, Creative Thinker & Tech enthusiast</h1>
                 <Link href='https://drive.google.com/file/d/1YeVs6femIWLPwC26G7BI8zVyfPw5CFLU/view?usp=sharing'><button className='download flex justify-center items-center gap-x-2 bg-cyan-500 hover:bg-cyan-600 px-3 py-2 rounded-lg transition-all ease-linear'>Downlaod CV <MdOutlineFileDownload className='text-2xl'/></button></Link>
            </div>
            <div className="brief  w-full md:w-[50%] text-xl p-5 text-center sm:text-left">
                 <p>I’m a passionate web developer specializing in both front-end and back-end technologies. Combining creativity with technical expertise, I craft seamless and engaging digital experiences. With a strong focus on design and problem-solving, I thrive on tackling new challenges and staying at the forefront of web development.</p>
            </div>
      </div>
    </div>
    </div>

  )
}

export default AboutPage