import React, { Component } from 'react'
import style from './Contact.module.css';
import Breakstar from '../Breakstar/Breakstar';

export class Contact extends Component {
  state = {
    starColor: 'dark',
  }
  render() {
    return (
      <>
        <div className={`bg-light`}>
          <h2 className={`text-center ${style.head} fw-bold pb-1 pt-5`}>CONTACT ME</h2>
          <Breakstar starColor={this.state.starColor}/>
          <div>
          <div className='text-center pt-3 pb-5'>
            <div className="m-auto w-50 form-floating mb-3">
              <input type="text" className={`form-control border-0 border-bottom rounded-0 ${style.box} py-5 fs-4`} id="fullName" placeholder="Full Name" required/>
              <label htmlFor="floatingInput" className={`${style.boxFont}`}>Full name</label>
            </div>
            <div className="m-auto w-50 form-floating mb-3">
              <input type="email" className={`form-control border-0 border-bottom rounded-0 ${style.box} py-5 fs-4`} id="emailAddress" placeholder="Email Address" required/>
              <label htmlFor="floatingPassword" className={`${style.boxFont}`}>Email address</label>
            </div>
            <div className="m-auto w-50 form-floating mb-3">
              <input type="tel" className={`form-control border-0 border-bottom rounded-0 ${style.box} py-5 fs-4`} id="phoneNumber" placeholder="Phone Number" pattern="[+][0-9]{3}-[0-9]{3}-[0-9]{3}-[0-9]{3}" required/>
              <label htmlFor="floatingInput" className={`${style.boxFont}`}>Phone number</label>
            </div>
            <div className="m-auto w-50 form-floating">
              <input type="text" className={`form-control border-0 border-bottom rounded-0 ${style.box} py-5 fs-4`} id="message" placeholder="Message" required/>
              <label htmlFor="floatingPassword" className={`${style.boxFont}`}>Message</label>
            </div>
            <div className="col-12 text-start mx-auto w-50">
              <button type="submit" className={`btn ${style.submit} px-4 py-3 mt-4 border rounded-3 fs-5 fw-simebold`}>Send</button>
            </div>
          </div>
          </div>
        </div>
      </>
    )
  }
}

export default Contact