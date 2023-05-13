import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './Footer.module.css';

export class Footer extends Component {
  render() {
    return (
      <>
      <div className={`text-center ${style.night} py-5`}>
        <div className={`row container text-center m-auto py-3`}>
          <div className={`col-lg-4 col-md-12 text-center text-light`}>
            <h3 className={`tw-bold fs-2 mb-4 ${style.font}`}>LOCATION</h3>
            <p className={`fs-5 lh-1 fw-simebold`}>2215 John Daniel Drive</p>
            <p className={`fs-5 lh-1 fw-simebold`}>Clark, MO 65243</p>
          </div>
          <div className={`col-lg-4 col-md-12 text-center text-light`}>
            <h3 className={`tw-bold fs-2 ${style.font}`}>AROUND THE WEB</h3>
            <div className={`mt-4`}>
              <i className={`fa-brands fa-facebook-f mx-1 fs-5 rounded-circle ${style.border} ${style.hover}`}></i>
              <i className={`fa-brands fa-twitter mx-1 fs-5 rounded-circle ${style.border} ${style.hover}`}></i>
              <i className={`fa-brands fa-linkedin-in mx-1 fs-5 rounded-circle ${style.border} ${style.hover}`}></i>
              <i className={`fa-brands fa-dribbble mx-1 fs-5 rounded-circle ${style.border} ${style.hover}`}></i>
            </div>
          </div>
          <div className={`col-lg-4 col-md-12 text-center text-light`}>
            <h3 className={`tw-bold fs-2 mb-4 ${style.font}`}>ABOUT FREELANCER</h3>
            <p className={`fs-5 lh-1 fw-simebold`}>Freelance is a free to use, MIT licensed Bootstrap theme created by <Link className={`${style.green}`}to='/'>Start Bootstrap</Link> .</p>
          </div>
        </div>
      </div>
      <footer className={`p-2 fs-6 text-center bg-dark`}>
        <p className={`pt-3 text-light`}>Copyright © Your Website 2022</p>
      </footer>
      </>
    )
  }
}

export default Footer