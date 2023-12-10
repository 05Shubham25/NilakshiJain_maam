import React from 'react'
import './About.scss'
import { motion } from 'framer-motion';
import { image } from '../../constant';

const abouts = [
  {title :'Web Developer' ,description: 'i am a good web developer', imgUrl: image.book1},
  {title :'Web Design' ,description: 'i am a good web developer', imgUrl: image.book2},
  {title :'Web UI/UX' ,description: 'i am a good web developer', imgUrl: image.book3},
  {title :'Web Animation' ,description: 'i am a good web developer', imgUrl: image.book1}
];


const About = () => {
  return (
    <>
      <h2 className='head-text'>I know that 
     
      <span>Good design</span> 
      <br/>
      mean
      <span>Good business</span>
      </h2>
      <div className='app__profiles'>
        {abouts.map((abouts,index) => (
          <motion.div
          whileInView = {{opacity : 1}}
          whileHover = {{scale : 1.1}}
          transition={{duration:0.5,type:'tween'}}
          className='app__profile-item'
          key={abouts.title+index}
          >
            	<img src={abouts.imgUrl} alt={abouts.title}/>
              <h2 className='bold-text' style={{marginTop:20}}>{abouts.title}</h2>
              <p className='p-text' style={{marginTop:10}}>{abouts.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About
