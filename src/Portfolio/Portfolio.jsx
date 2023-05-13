import React, { Component } from 'react'
import Breakstar from '../Breakstar/Breakstar';
import style from './Portfolio.module.css';
import Card from '../Card/Card';

export class Portfolio extends Component {

  state = {
    starColor: ['dark', 'white']
  }

  render() {
    return (
      <>
      <div className={`${style.bgColor} pt-5 mb-0 pb-0`}>
        <div>
          <div className='text-center pt-5'>
            <img src="./images/avataaars.svg" alt="avatar of portfolio character" className={` ${style.img}`} />
          </div>
          <h1 className={`text-center ${style.head} fw-bold text-light pb-1 pt-5`}>START BOOTSTRAP</h1>
          <Breakstar starColor={this.state.starColor[1]}/>
          <p className={`text-light text-center mt-2 fs-4 fw-semibold pt-1`}>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
      <div>
        <h2 className={`text-center ${style.head} ${style.portfolioHead} fw-bold text-dark pb-1 pt-5 mt-4`}>PORTFOLIO</h2>
        <Breakstar starColor={this.state.starColor[0]}/>
        <div className={`d-flex row container m-auto`}>
          <div className={`d-flex row col-12 container mx-auto`}>
            <div className={`col-4 p-3`}>
              <Card urlSrc='./images/cabin.png'/>
            </div>
            <div className={`col-4 p-3`}>
              <Card urlSrc='./images/cake.png'/>
            </div>
            <div className={`col-4 p-3`}>
              <Card urlSrc='./images/circus.png'/>
            </div>
          </div>
          <div className={`d-flex row col-12 container mt-3 mb-5 mx-auto`}>
          <div className={`col-4 p-3`}>
              <Card urlSrc='./images/game.png'/>
            </div>
            <div className={`col-4 p-3`}>
              <Card urlSrc='./images/safe.png'/>
            </div>
            <div className={`col-4 p-3`}>
              <Card urlSrc='./images/submarine.png'/>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default Portfolio