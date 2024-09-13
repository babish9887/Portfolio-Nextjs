"use client"
import gsap from 'gsap'
import { getEdgePolyfilledModules } from 'next/dist/build/webpack/plugins/middleware-plugin'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { BiCloset } from 'react-icons/bi'
import { CgClose } from 'react-icons/cg'
import { FaBars, FaCross, FaCrosshairs } from 'react-icons/fa'
import { FaBurger } from 'react-icons/fa6'
import { ScrollTrigger } from 'gsap/all'
const Navbar = () => {
      gsap.registerPlugin(ScrollTrigger);
      const [created, setCreated]=useState(false)

      useEffect(() => {
            const tl = gsap.timeline()

            tl.fromTo('.logo, .links .item, .toggle', {
                  y: -50,
                  opacity: 0,
            }, {
                  y: 0,
                  opacity: 1,
                  duration: 0.4,
                  stagger: 0.1,
            })
      }, [])
      let tl2:any=null; 
      

      const handleToggle = (e: string) => {
            // Create or reuse the timeline
            console.log(e)
            if (e === 'Open') {
            if(!created){
                  tl2=gsap.timeline({paused:true})
                        tl2.fromTo(".respnav", {
                              x: 400,
                          }, {
                              x: 0,
                              duration: 0.5
                          })
                          .fromTo(".respnav .item", {
                              opacity: 0,
                              x: 400,
                          }, {
                              opacity: 1,
                              x: 0,
                              duration: 0.4,
                              stagger: 0.1
                          })
                          .fromTo('.respnav .close', {
                              opacity: 0,
                          }, {
                              opacity: 1,
                          });
                  tl2.play();
            } else {
                  tl2.play();
                  setCreated(true);
            }
            } else {
                tl2.reverse(); 
            }
        }
        
      return (
            <>
                  <div className='z-10 w-full p-6 sm:p-0 flex h-[5rem] shadow-lg bg-black/20 backdrop-blur-md justify-between sm:justify-around items-center fixed top-0'>
                        <div className="logo opacity-0 text-3xl font-bold text-cyan-400 cursor-pointer" onClick={() => scrollTo(0, 0)}>Babish</div>
                        <div className="links  hidden sm:flex  justify-center items-center lg:gap-x-8 gap-x-4 ">
                              <div className="item opacity-0 cursor-pointer" onClick={() => scrollTo(0, 0)}>Home</div>
                              <a href="#aboutme"> <div className="item opacity-0 cursor-pointer">About Me</div></a>
                              <a href="#services"> <div className="item opacity-0 cursor-pointer">Services</div></a>
                              <a href="#portfolio"> <div className="item opacity-0 cursor-pointer">Portfolio</div></a>
                              <a href="#contactme"> <div className="item opacity-0 cursor-pointer">Contact Me</div></a>
                        </div>

                        <div className='toggle text-xl opacity-0 sm:hidden' onClick={()=>handleToggle('Open')}>
                              <FaBars className='cursor-pointer' />
                        </div>
                  </div>
                  <div className='respnav translate-x-[350px] h-screen w-[300px]  flex fixed sm:hidden bg-black/60 backdrop-blur-md z-50 right-0 top-0 '>
                        <div onClick={()=>handleToggle('Close')} className='close p-3 sm:hidden w-14 aspect-square absolute top-0 right-0 m-4  font-bold text-4xl text-white cursor-pointer' ><CgClose /></div>

                        <div className="links sm:hidden flex flex-col text-white justify-center items-start gap-4 text-4xl m-6">
                              <div className="item cursor-pointer" onClick={() => {scrollTo(0, 0); handleToggle('Close')}}>Home</div>
                              <a href="#aboutme"> <div className="item cursor-pointer"onClick={()=>handleToggle('Close')}>About Me</div></a>
                              <a href="#services"> <div className="item cursor-pointer" onClick={()=>handleToggle('Close')}>Services</div></a>
                              <a href="#portfolio"> <div className="item cursor-pointer" onClick={()=>handleToggle('Close')}>Portfolio</div></a>
                              <a href="#contactme"> <div className="item cursor-pointer" onClick={()=>handleToggle('Close')}>Contact Me</div></a>
                        </div>
                  </div>
            </>
      )
}

export default Navbar