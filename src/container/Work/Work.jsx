import React, { useEffect, useState } from 'react'
import './Work.scss'
import {AiFillEye, AiFillGithub} from 'react-icons/ai'
import {easeInOut, motion} from 'framer-motion'
import {urlFor, client } from '../../client'
import { AppWrap, MotionWrap } from '../../wrapper'

const Work = () => {
  const [activeFilter,setActiveFilter]= useState('Featured')
  const [animateCard, setAnimateCard] = useState({y:0 , opacity:1})
  const [works, setWorks]=useState([])
  const [FilterWork, setFilterWork]=useState([])
  
  useEffect(() => {
    
  const query='*[_type=="works"] | order(priority desc, _updatedAt desc)';
  // console.log(query)
  client.fetch(query).then((data)=>{
    console.log(data)
    setWorks(data)
    setFilterWork(data.filter((work) => work.tags.includes('Featured')))
  })
  
  
  }, [])
  
   
  const handleWorkFilter=(item)=>{
    setActiveFilter(item)
    setAnimateCard([{y:100,opacity:0}])
    
    setTimeout(() => {
      setAnimateCard([{y:0,opacity:1}])
    }, 500);
    
    
    setFilterWork(works.filter((work)=>work.tags.includes(item)))
    // if(item==='Main'){
    //   setFilterWork(works);
    // }else{
    //   setFilterWork(works.filter((work)=>work.tags.includes(item)))
    // }
  }
  
  
  return (
    <div className='main__container'>
        <h2 className="head-text">
        My<span> Projects</span>
        </h2>
        
        <div className="app__work-filter">
          {['Featured','Frontend','FullStack','UI/UX','All'].map((item,index)=>(
            <div
            key={index}
            onClick={()=>handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter===item ? 'item-active': ''}`}
            >
              {item}
            </div>
          ))}
        </div>
        
        <motion.div
           animate={animateCard}
           transition={{duration:0.5 , delayChildren:0.5}}
           className='app__work-portfolio'
           >
            {FilterWork.map((work,index)=>(
              <div className="app__work-item app__flex" key={index}>
                <div className="app__work-img app__flex">
                  <img src={urlFor(work.imgUrl)} alt={work.name} />

                  <motion.div
                  whileHover={{opacity:[0,1]}}
                  transition={{duration:0.25, ease: easeInOut , staggerChildren:0.5}}
                  className='app__work-hover app__flex'
                  >
                    <a href={work.projectLink} target='_blank'  rel="noreferrer">
                      <motion.div
                        whileInView={{scale:[0,1]}}
                        whileHover={{scale:[1,0.9] }}
                        transition={{duration:0.25}}
                        className='app__flex'
                      >
                        <AiFillEye/>
                        
                      </motion.div>
                    </a>
                    <a href={work.codeLink}  rel="noreferrer" target='_blank'>
                      <motion.div
                        whileInView={{scale:[0,1]}}
                        whileHover={{scale:[1,0.9] }}
                        transition={{duration:0.25}}
                        className='app__flex'
                      >
                        <AiFillGithub/>
                        
                      </motion.div>
                    </a>
                  </motion.div>
                </div>
                
                <div className="app__work-content app__flex">
                  <h4 className="bold-text">{work.title}</h4>
                  <p className="p-text" style={{marginTop:10}}>{work.description}</p>

                  <div className='app__work-tag app__flex'>
                    <p className="p-text">{work.tags[0]}</p>
                  </div>
                </div>
                
              </div>
            ))}
            
        </motion.div>
      
    </div>
  )
}

export default AppWrap(MotionWrap(Work,'app__works'),'projects','app__whitebg')