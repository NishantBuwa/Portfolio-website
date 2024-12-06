import React from 'react'
import '../../Styles/Footer.css'
import mail from '../../Assets/mail.png'
import phone from '../../Assets/phone.png'
import location from '../../Assets/location.png'

function Footer() {
  return (
    <div className="Footer">
      <div className="social-media">
        <p>Profiles</p>
        <div className="profile-container">
          <a href="https://www.linkedin.com/in/nishantbuwa/">LinkedIn</a>
          <a href="https://github.com/NishantBuwa">Github</a>
          <a href="https://www.instagram.com/buwanishant/">Instagram</a>
          <a href="https://x.com/BuwaNishant">Twitter</a>

        </div>
      </div>
      {/* <div className="line"></div> */}
      <div className="connect">
        <p>Contact</p>
        <div className="profile-container">


          <div className="pair">
            <img src={location} alt="" />
            <a href="https://www.google.com/maps/place/Ajmer,+Rajasthan,+India">: Ajmer, Rajasthan, India</a>
          </div>
          <div className="pair">
            <img src={mail} alt="" />
            <a href="mailto:nishant.buwa.0110@gmail.com">: nishant.buwa.0110@gmail.com</a>
          </div>
          <div className="pair">
            <img src={phone} alt="" />
            <a href="tel:+918824455667">: +91 8824455667</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
