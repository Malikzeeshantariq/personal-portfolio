import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in-up">
                <h2 className='text-4x1 md:text-5xl'>Skills</h2>
                <p className='text-gray-500 pt-2'>
                    It is a wonderful experience to learn someing new i learned Typescript, HTML and CSS from GIAIC.
                </p>
            </div>
            <div>
              <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                  <h2 data-aos="zoom-in-up">Typescript</h2>
                  <h2 data-aos="zoom-in-up">CSS</h2>
                  <h2 data-aos="zoom-in-up">HTML</h2>
                </div>
              </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills;
