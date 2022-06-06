import React from 'react'

import './footer.css'

const Footer = () => {
  return (
    <div id='contact' className='container__footer'>
        <div className='first__footer'>
            <h1>Contact</h1>
            <div className='form_wrapper'>
              <form>
                <label className='form-label'>Nom :</label>
                <input className='form-input' type="text" placeholder='Votre nom'></input>
                <label className='form-label'>Email :</label>
                <input className='form-input' type="email" placeholder='Votre email'></input>
                <label className='form-label'>Message :</label>
                <input className='form-input' type="textarea" placeholder='Votre message'></input>
                <button className='btn-succes btn-send-msg'>Envoyer</button>
              </form>
            </div>
        </div>
        <div className='second__footer'>
        </div>

    </div>
  )
}

export default Footer