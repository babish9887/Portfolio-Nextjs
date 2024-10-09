import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import MyProjects from '../../MyProjects.json'
import { HiOutlineCode, HiOutlineEye } from 'react-icons/hi'
const portfolioDiv = 'service relative overflow-hidden rounded-md aspect-[16/9] flex flex-col group p-0'
const buttonStyle = 'btn'
const PortfolioPage = () => {

      gsap.registerPlugin(ScrollTrigger)
      useEffect(() => {

            var tl2 = gsap.timeline({
                  scrollTrigger: {
                        trigger: ".pfs",
                        scroller: 'body',
                        start: "top 60%",
                        end: 'top -80%',
                        scrub: 2,
                  }
            })

            tl2.fromTo('.l1left', {
                  y: 100,
                  opacity: 0,
                  duration: 1,
            }, {
                  opacity: 1,
                  y: 0,
            })

            tl2.fromTo('.l1right', {
                  y: 100,
                  opacity: 0,
                  duration: 1,
            }, {
                  opacity: 1,
                  y: 0,
            },"-=0.3")

            tl2.fromTo('.l2left', {
                  y: 100,
                  opacity: 0,
                  duration: 1,
            }, {
                  opacity: 1,
                  y: 0,
            })

            tl2.fromTo('.l2right', {
                  y: 100,
                  opacity: 0,
                  duration: 1,
            }, {
                  opacity: 1,
                  y: 0,
            },"-=0.3")
            tl2.fromTo('.l3left', {
                  y: 100,
                  opacity: 0,
                  duration: 1,
            }, {
                  opacity: 1,
                  y: 0,
            })
            tl2.fromTo('.l3right', {
                  y: 100,
                  opacity: 0,
                  duration: 1,
            }, {
                  opacity: 1,
                  y: 0,
            },"-=0.3")
      }, [])

      return (
            <div id='portfolio' className='section w-full flex justify-center items-center sm:p-10 md:p-5 lg:p-10 mb-10' >
                  <div className='pfs p-5 pt-10  md:pt-10 md:p-0 lg:p-5 w-full h-auto max-w-[1200px] gap-y-10 flex flex-col justify-center items-center border-0 border-t border-gray-800 '>

                        <h1 className='heading'>Portfolio</h1>
                        <div className='w-full grid grid-cols-1 md:w-auto md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-6  lg:gap-x-16 lg:gap-y-8 '>
                              {MyProjects.map(project=>(
                                    <div key={project.name} className={`${project.position} card aspect-[16/13] rounded-xl overflow-hidden`}>
                                    <div className={`${portfolioDiv}`}>
                                    <Image src={project.imageUrl} width={1000} height={1000} alt='portfolio' className='object-cover  w-full' />
                                    <div className='btnDiv '>
                                          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                <button className={`${buttonStyle}`}><HiOutlineCode /></button>
                                          </Link>

                                          <Link href={project.hostingUrl} target="_blank" rel="noopener noreferrer">
                                                <button className={`${buttonStyle}`}><HiOutlineEye /></button>
                                          </Link>

                                    </div>
                                    </div>
                                    <div className='p-2 mt-2'>
                                    <h1 className='text-slate-200 text-xl'>{project.name}</h1>
                                    <p className='text-slate-300'>{project.description}</p>
                                    </div>
                              </div>
                              ))}
                        </div>
                  </div>
            </div>
      )
}

export default PortfolioPage