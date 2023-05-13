import React, { Component } from 'react'
import style from './Card.module.css';

export class Card extends Component {
    path=this.props.urlSrc;
  render() {
    return (
      <>
      <div className={`w-100 rounded position-relative`}>
        <img src={this.path} alt='img for card' className={`w-100 rounded`}/>
        <div className={`overlay rounded position-absolute ${style.overlay} top-50 start-50 translate-middle text-center`}><i className={`fa-solid fa-plus text-light rounded-circle text-center ${style.plus}`}></i></div>
      </div>
      </>
    )
  }
}

export default Card