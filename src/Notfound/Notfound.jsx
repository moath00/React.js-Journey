import React, { Component } from 'react'
import style from './Notfound.module.css';

export class Notfound extends Component {
  render() {
    return (
      <div className={`vh-100 w-100 text-center bg-danger row justify-content-center align-items-center`}><p className={`text-light fw-bold col-12 ${style.font}`}>Error 404,<br/>page not-found</p></div>
    )
  }
}

export default Notfound