import React, {useState} from 'react'
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai'

import ImgProject1 from '../../assets/home-page.jpg'
import ImgProject2 from '../../assets/portfolio.png'

Modal.setAppElement("#root")

function MyModal1() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  
  return (
    <div className='modal_wrapper'>
      <button className="btn" onClick={() => setModalIsOpen(true)}>Voir Plus</button>
        <Modal className="modal-container" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
          <button className="btn-close" onClick={() => setModalIsOpen(false)}><AiOutlineClose /></button>
          <div>
            <img className="portfolio-project-img" src={ImgProject1} alt='Project Overview'></img>
          </div>
          <h2 className='text-center modal-title'><span className='modal-text'>Hel</span></h2>
          <p>This project was code with: <span className='modal-text'>Python|Django HTML CSS|Bootstrap</span></p>
          <p>This project is a : <span className='modal-text'>Web Plateform</span></p>
          <p>Project description : <span className='modal-text'>Allows professionals to get in touch</span></p>
          <p>You can see it here :</p>
        </Modal>
    </div>
  )
}

function MyModal2() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  
  return (
    <div className='modal_wrapper'>
      <button className="btn" onClick={() => setModalIsOpen(true)}>Voir Plus</button>
        <Modal className="modal-container" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
          <button className="btn-close" onClick={() => setModalIsOpen(false)}><AiOutlineClose /></button>
          <div className='modal-img-container'>
            <img className="portfolio-project-img" src={ImgProject2} width="65vw" alt='Project Overview'></img>
          </div>
          <h2 className='text-center modal-title'><span className='modal-text'>Portfolio</span></h2>
          <p>This project was code with: <span className='modal-text'>JavaScript|React Librairies React HTML CSS|Bootstrap</span></p>
          <p>This project is a : <span className='modal-text'>Web Site</span></p>
          <p>Project description : <span className='modal-text'>My portfolio, describing everything about me. From a professional point of view at least.</span></p>
          <p>You can see it here : </p>
        </Modal>
    </div>
  )
}

export {MyModal1, MyModal2}