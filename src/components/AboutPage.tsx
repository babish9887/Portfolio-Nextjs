'use client'
import React, { useEffect, useRef } from 'react'
import { FaDownload } from 'react-icons/fa'
import { MdOutlineFileDownload } from 'react-icons/md'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Link from 'next/link'
const AboutPage = () => {
      gsap.registerPlugin(ScrollTrigger)
      useEffect(() => {
            const tl = gsap.timeline()
            tl.fromTo('.heading', {
                  opacity: 0,
            }, {
                  opacity: 1,
                  scrollTrigger: {
                        trigger: "#aboutme",
                        start: "top 80%",
                        end: "top 50%",
                        scrub: 2
                  }
            })
            tl.fromTo('.brief', {
                  opacity: 0,
                  y: 300
            }, {
                  opacity: 1,
                  y: 0,
                  scrollTrigger: {
                        trigger: "#aboutme",
                        start: "top 70%",
                        end: "top 0%",
                        scrub: 2
                  }
            })

            gsap.fromTo('.line',{
                  y: 200
                  },{
                        y: 0,
                        scrollTrigger: {
                              trigger: "#aboutme",
                              start: "top 80%",
                              end: "top 0%",
                              scrub: 2,
                        }

            })
      }, [])
      return (
            <div id='aboutme' className='section w-full flex justify-center items-center lg:p-10 p-5 md:p-8'>

                  <div className='w-full max-w-[1200px]  flex flex-col justify-center items-center lg:gap-y-20 md:gap-y-12 sm:gap-10   sm:p-10 border-0 border-t border-gray-800 pt-10'>
                        <h1 className='heading opacity-0'>About Me</h1>
                        <div className="aboutme w-full flex flex-col md:flex-row justify-center items-start gap-y-10 " >
                              <div className="div w-full md:w-1/2 px-5 min-h-[200px] flex flex-col justify-center items-center sm:items-start gap-y-8">
                                    {/* <h1 className='text-5xl line leading-tight font-bold text-center sm:text-left'> <span className='text-cyan-400'>Web Developer</span>, Creative Thinker & Tech enthusiast</h1> */}
                                    <AnimatedText text='Web Developer, Creative Thinker & Tech Enthusiast' />
                                    <Link href='https://drive.google.com/file/d/1i5C0v6WzpTVtAPBdrlzeR32_9YzmBmfU/view?usp=sharing'><button className='download flex justify-center items-center gap-x-2 bg-cyan-500 hover:bg-cyan-600 px-3 py-2 rounded-lg transition-all ease-linear'>Downlaod CV <MdOutlineFileDownload className='text-2xl' /></button></Link>
                              </div>
                              <div className="brief  w-full md:w-[50%] text-xl p-5 text-center sm:text-left">

                                    <p>I'm a passionate web developer with expertise in both front-end and back-end technologies. I craft seamless and engaging digital experiences, combining creativity with technical skills in <span className='text-cyan-400'>HTML, CSS, and JavaScript</span>. My proficiency extends to the <span className='text-cyan-400'>MERN stack (MongoDB, Express.js, React.js, Node.js), Next.js </span> for optimized performance, and both <span className='text-cyan-400'>MongoDB and SQL</span> for robust data management. I thrive on tackling new challenges and staying at the forefront of web development.</p>
                              </div>
                        </div>
                  </div>
            </div>
      )
}


const AnimatedText = ({ text }:{text:string}) => {
      const textRef = useRef(null);
    
      useEffect(() => {
      //@ts-ignore
        const words = textRef.current.querySelectorAll('.word');
        
        gsap.fromTo(words, 
          {
            opacity: 0,
            y: 50,
            x:-50
          },
          {
            opacity: 1,
            y: 0,
            x:0,
            stagger: 0.1,
            scrollTrigger: {
              trigger: '.aboutme',
              start: 'top 80%',
              end: 'top 20%',
              scrub: true,
            }
          }
        );
      }, []);
    
      return (
        <div ref={textRef} className='tracking-wider text-5xl line leading-tight font-bold text-center sm:text-left'>
          {text.split(' ').map((word, index) => (
            <span key={index} className={`word inline-block mx-1 ${word=='Web' || word=="Developer,"?"text-cyan-400":"text-white"}`}>
              {word}
            </span>
          ))}
        </div>
      );
    };

export default AboutPage