import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import Section1 from './Section1.jsx'
import Section2 from './Section2.jsx'
import Section3 from './Section3.jsx'
import Section4 from './Section4.jsx'
import Section5 from './Section5.jsx'
import Animation from './Animation.jsx'
import Footer from '../Footer/Footer.jsx'
import '../../Styles/HomeStyle.css'

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="contain">
        <Section1></Section1>
        <Animation></Animation>
        <Section2></Section2>
        <Section3></Section3>
        <Section4></Section4>
        <Section5></Section5>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
