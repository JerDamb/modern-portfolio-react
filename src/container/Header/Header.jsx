import React from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import './Header.scss'

const Header = () => {

  const scaleVariants ={
    whileInView:{
      scale: [0,1],
      opacity: [0,1],
      transition:{
        duration: 1,
        ease: 'easeInOut'
      }
    }
  }
  return (
    <div className='app__header'>
      <motion.div
        whileInView={{ x:[-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
        className='app_header-info'
      >
        <div className="app__header-badge">
          <div className="badge-cmp">
            <span>👋</span>
            <div style={{ marginLeft:20 }}>
              <p className='p-text'>Hello, I am</p>
              <h1 className="head-text">Jérémy</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className='p-text'>Webdevelopper</p>
            <p className='p-text'>Freelancer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delaychildren: 0.5 }}
        className='app_header-img'
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt='profile_circle'
          className='overlay_circle'
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Header