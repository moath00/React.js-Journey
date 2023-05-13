import React, { Component } from 'react'
import Breakstar from '../Breakstar/Breakstar';
import style from './About.module.css';

export class About extends Component {
  state = {
    starColor: ['black', 'white']
  }

  render() {
    return (
      <div className={`m-0 p-0`}>
        <div className={`${style.bgColor}`}>
          <h2 className={`text-center ${style.head} fw-bold text-light pb-1 pt-5`}>ABOUT</h2>
          <Breakstar starColor={this.state.starColor[1]}/>
          <div>
            <div className='d-inline-block w-50 m-0'><p className={`ms-auto py-2 px-1 ${style.para}`}>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
            <div className='d-inline-block w-50 m-0'><p className={`me-auto py-2 px-3 ${style.para}`}>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!<br/><br/></p></div>
          </div>
          <div className={`text-center pt-3 ${style.buttonPadding}`}>
            <button className={`py-3 p2-3 rounded-3 ${style.btn}`}><i className={`fa-solid fa-download py-2 ps-3 ${style.light} fs-5`}></i><span className={`p-3 fw-semibold fs-5 ${style.light} fs-5`}>Free Download!</span></button>
          </div>
        </div>
      </div>
    )
  }
}

export default About