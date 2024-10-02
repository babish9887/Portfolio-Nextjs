'use client'
import React, { useEffect, useRef, useState } from 'react'
import { FaDownload } from 'react-icons/fa'
import { MdOutlineFileDownload } from 'react-icons/md'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Link from 'next/link'
import { IoIosArrowDown } from 'react-icons/io'
import MySkills from '../../MySkills.json'
const AboutPage = () => {

      const skillvalues=MySkills.map(skill=>skill.skill_value)
      const[skillDropDown, setskillDropDown]=useState(false)
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
      const handleClick=()=>{
            setskillDropDown(!skillDropDown)
            const tl=gsap.timeline({paused:true})
           if(!skillDropDown){
            tl.fromTo('.skill',{
                  opacity:0,
                  height:0 ,
            },{
                  opacity:1,
                  height:'auto',
                  duration:0.3,
                  stagger:0.02,
                  ease:"power3.out"
            })
            document.querySelectorAll('.bar_value').forEach((element, index) => {
                  gsap.fromTo(
                      element,
                      {
                          opacity: 0,
                          width: 0
                      },
                      {
                          opacity: 1,
                          width: `${skillvalues[index]}%`, // Use the corresponding width
                          duration: 0.8,
                          delay: 0.5 , // Delay for each element
                          ease: 'back.out',
                      }
                  );
              });
      }
           else{
            tl.to('.skill', {
                  opacity: 0,
                  height: 0,
                  duration: 0.3,
              });
          }

          tl.play()
      }
            return (
            <div id='aboutme' className='section w-full flex justify-center items-center lg:p-10 p-5 md:p-8 md:pb-5'>

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
                                    <button className='mt-4 flex justify-center items-center gap-x-5' onClick={handleClick}>Skills <IoIosArrowDown className={`transition duration-200 ${skillDropDown ? "transform rotate-180":""}`} /></button>
                                         { MySkills.map((skill)=>(
                                          <div key={skill.name} id='skill' className='skill flex flex-col my-2 h-0 opacity-0'>
                                                <p className='text-sm mb-[5px]'>{skill.name}</p>
                                                <span className="bar w-[200px] h-[10px] rounded-md bg-slate-700 overflow-hidden"><span className={`bar_value h-full float-left bg-gradient-to-r from-cyan-500 to-blue-500`}></span></span>
                                          </div>
                                         ))} 
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