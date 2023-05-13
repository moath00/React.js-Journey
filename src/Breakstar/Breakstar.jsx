import React, { Component } from 'react'
import style from './Breakstar.module.css';

export class Breakstar extends Component {
  render() {
    let color = this.props.starColor;
    if (color === 'white'){
    return (
      <div className={`text-center my-3`}>
            <div className={`${style.whiteBefore} d-inline-block`}> </div>
            <i className={`fa-solid fa-star ${style.star} d-inline-block`}></i>
            <div className={`${style.whiteAfter} d-inline-block`}> </div>
        </div>
    )}
    else {
      return (
        <div className={`text-center my-3`}>
              <div className={`${style.darkBefore} d-inline-block`}> </div>
              <i className={`fa-solid fa-star ${style.star} ${style.starDark} d-inline-block`}></i>
              <div className={`${style.darkAfter} d-inline-block`}> </div>
          </div>
      )}
  }
}

export default Breakstar