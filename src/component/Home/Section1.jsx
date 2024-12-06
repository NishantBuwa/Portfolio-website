import React from 'react'
import Avatar from '../../Assets/avatar.jpg'

function Section1() {


  return (
    <div>
      <section id="home">
        <div className="section1-content" >
          <div className="avatar" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
            <img src={Avatar} alt="Avatar" />
          </div>
          <div className="content" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
            <div className="name-position">
              <p id="name">Nishant Buwa</p>
              <p id="position">Junior Web Developer</p>
            </div>
            <div className="description" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000" >
              I am a Final-year B.Tech Computer Science student at Government Engineering College Ajmer, currently seeking an internship / Full Time opportunity in
              web design and development. Proficient in HTML, CSS, and JavaScript, with hands-on experience in React for building
              responsive and user-centric applications. Expertise includes working with components, props, state management, and APIs to
              create dynamic web solutions.
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Section1


