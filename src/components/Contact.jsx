import React ,{ useRef } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaFile, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import.meta.env
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

      emailjs.sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    form.current,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(
        () => {
      console.log('SUCCESS!');
      form.current.reset();
    },
    (error) => {
      console.log('FAILED...', error.text);
    }
  );
};
  return (
    <motion.div
    initial={{opacity:0,y:50}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:1,ease:'easeOut'}}
    viewport={{once:false,amount:0.2}}
    id='contact'
    className='py-20 bg-dark-100'
    >
        <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center mb-4'>Get In
                <span className='text-purple'> Touch</span>
            </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Have a project in mind or want to collaborate? Lets's talk!</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
            {/* Contact Form*/}
            <div>
                <form className='space-y-6' ref={form} onSubmit={sendEmail}>
                    <div>
                    <label htmlFor='name'
                     className='block text-gray-300 mb-2'>
                        Name</label>
                        <input
                        className='w-full bg-dark-300 border
                        border-dark-400
                        rounded-lg px-4 py-3 outline-none'
                        type="text" placeholder='Your Name'name='your_name' required></input>
                        </div>
                        <div>
                    <label htmlFor='email'
                     className='block text-gray-300 mb-2'>
                        Email Address</label>
                        <input
                        className='w-full bg-dark-300 border
                        border-dark-400
                        rounded-lg px-4 py-3 outline-none'
                        type="email" placeholder='Your email'name='your_email' required></input>
                        </div>
                        <div>
                    <label htmlFor='message'
                     className='block text-gray-300 mb-2'>
                        Message</label>
                        <textarea
                        className='w-full h-40 bg-dark-300 border
                        border-dark-400
                        rounded-lg px-4 py-3 outline-none'
                        placeholder='Your Message' name='your_message' required></textarea>
                        </div>
                        <button type='submit'
                        className='w-full px-6 py-3
                        bg-purple rounded-lg font-medium
                        hover:bg-purple-700
                        transition duration-300
                        cursor-pointer'>
                            Send
                        </button>
                </form>
            </div>
            {/* Contact Information */}
            <div className='space-y-8'>
                <div className='flex items-start'>
                    <div className='text-purple text-2xl
                    mr-4'>
                        <FaMapMarkerAlt/>
                    </div>
                    <div className=''>
                        <h3 className='text-lg font-semibold
                        mb-2'>Location</h3>
                        <p className='text-gray-400'>Bihar,Patna</p>
                    </div>
                </div>
                <div className='flex items-start'>
                    <div className='text-purple text-2xl
                    mr-4'>
                        <FaEnvelope/>
                    </div>
                    <div className=''>
                        <h3 className='text-lg font-semibold
                        mb-2'>Email</h3>
                        <p className='text-gray-400'>email4astitvaanand@gmail.com</p>
                    </div>
                </div>
                

    <div className='pt-4 '>
    <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>

    <div className='flex  space-x-4'>

        {/* LinkedIn */}
        <a 
        href='https://www.linkedin.com/in/astitva-anand-a82410308/'
        target="_blank"
        rel="noopener noreferrer"
        >
            <FaLinkedin
            className='w-10 h-10 p-2 rounded-full bg-dark-300
            flex items-center justify-center
            text-purple hover:bg-purple
            hover:text-white transition duration-300'
            />
        </a>

        {/* GitHub */}
        <a 
        href='https://github.com/'
        target="_blank"
        rel="noopener noreferrer"
        >
            <FaGithub
            className='w-10 h-10 p-2 rounded-full bg-dark-300
            flex items-center justify-center
            text-purple hover:bg-purple
            hover:text-white transition duration-300'
            />
        </a>
        {/* Resume */}
        <a 
        href='https://drive.google.com/file/d/16gGt8AXXVspkoqeAUhCMTvClWkyNlLlt/view?usp=sharing'
        target="_blank"
        rel="noopener noreferrer"
        >
            <FaFile
            className='w-10 h-10 p-2 rounded-full bg-dark-300
            flex items-center justify-center
            text-purple hover:bg-purple
            hover:text-white transition duration-300'
            />
        </a>
    </div>
</div>
            </div>
        </div>
    </motion.div>
  )
}

export default Contact