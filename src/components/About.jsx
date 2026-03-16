import React from 'react'
import {motion 

} from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'
const About = () => {
  return (
    <div>
    <motion.div 
    initial={{opacity:0 , y:50}} 
    whileInView={{opacity:1,y:0}} 
    transition={{duration:0.6,ease:'easeout'}} 
    viewport={{once: true}}
    id='about'
    className='py-20 bg-dark-200'
    >
        <div className='container mx-0 px-6'>
        {/*Heading*/}
        <h2 className='text-3xl font-bold text-center mb-4'>About
        <span className='text-purple'>Me</span>
        </h2>
        <p className='text-grey-400 text-center max-w-2xl mx-auto mb-16'>
          Get to know more about my background and passion</p>
          {/*image + my journey */}
          <div className='flex flex-col md:flex-row items-center gap-12'>
            {/*image*/}
            <div className='md-w-1/2 rounded-2xl overflow-hidden'>
              <motion.img
                initial={{opacity:0,y:50}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.9,ease:'easeOut'}}
                viewport={{once:false,amount:0.2}}
                className='w-full h-full object-cover'
                 src={assets.profileImg} alt='Profile'/>

            </div>
            {/* Text Content */}
            <motion.div
            initial={{opacity:0,y:50}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.9,ease:'easeOut'}}
            viewport={{once:false,amount:0.2}}
            className='md:w-1/2'
              >
                <div className='rounded-2xl p-8'>
                  <h3 className='text-2xl font-semibold mb-6'>
                    My Journey
                  </h3>
                  
                  <p className='text-grey-300 mb-6'>I am a second-year engineering student with a strong passion for software development and problem-solving. My journey in tech started with curiosity about how websites and applications are built, which led me to explore programming deeply. Over time, I developed a keen interest in full stack development and enjoy creating responsive, user-friendly, and functional web applications. I have also worked on a few projects in AIML and completed an internship in the field, which strengthened my interest in building intelligent solutions for real-world problems.
                  </p>
                  
                  <p className='text-grey-300 mb-6'>
                    Alongside development, I regularly practice DSA and solve LeetCode questions to sharpen my logical thinking and coding skills. Solving problems consistently has helped me build confidence in writing efficient and optimized solutions. I enjoy learning new technologies, improving my projects, and challenging myself with complex concepts. 
                  </p>
                  {/* Cards */}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {
                      aboutInfo.map((data,index)=>(
                        <div key={index} className='bg-dark-300
                        rounded-2xl p-6 transition-transform duration-300 
                        hover:-translate-y-2 cursor-pointer'>
                          <div className='text-purple text-4xl mb-4'>
                            <data.icon/>

                            </div>
                            <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                            <p className='text-grey-400'>{data.description}</p>
                          </div>
                      ))
                    }
                  </div>
                </div>
            </motion.div>
          </div>
        </div>

    </motion.div>
    </div>
  )
}

export default About