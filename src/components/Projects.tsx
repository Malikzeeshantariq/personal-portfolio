import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data =[
    {
        id: 0,
        title: "Static/Dynamic Resume Builder",
        desc: "A build a static/dymanic resue using HTML, CSS and Typescript",
        img:"/Screenshot 2024-11-09 213023.jpg",
       tags: ["HTML", "CSS", "Typescript"],
    },
]
const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title='My Projects'/>
        <div>
            {data.map((el) =>(<Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />))}
        </div>
      
    </div>
  )
}
 export default Projects
