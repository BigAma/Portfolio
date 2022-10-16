import React from 'react'
import { FaFacebookSquare, FaLinkedin, FaGithub } from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer__wrapper'>
      <h1 className='title-footer'>Contact</h1>
      <div id='contact' className='container__footer'>
        <div className='first__footer'>
            <div className='form_wrapper'>
              <form>
                <label className='form-label'>Name :</label>
                <input className='form-input' type="text" placeholder='Your Name'></input>
                <label className='form-label'>Email :</label>
                <input className='form-input' type="email" placeholder='email@exemple.dj'></input>
                <label className='form-label'>Message :</label>
                <textarea className='form-input form-input-area' type="textarea" placeholder='Your Message'></textarea>
                <button className='btn-succes btn-send-msg'>Send</button>
              </form>
            </div>
        </div>
        <div className='second__footer'>
          <div className='socials-essentials-footer'>
            <a href='https://www.facebook.com/profile.php?id=1021276289' className='icon-footer'><FaFacebookSquare/></a>
            <a href='https://www.linkedin.com/in/amareh-ali/' className='icon-footer'><FaLinkedin/></a>
            <a href='https://github.com/BigAma' className='icon-footer'><FaGithub/></a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer