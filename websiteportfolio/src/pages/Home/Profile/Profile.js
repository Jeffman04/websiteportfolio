import React from 'react'
import Typical from 'react-typical'
import './Profile.css'
import ScrollService from '../../../utilities/ScrollService'

export default function Profile() {
  return (
    <div className='Profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='#'>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-google-plus-square'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-twitter-square'></i>
                            </a>  
                        </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'M <span className='highlighted-text'>Rotshidzwa</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical 
                                loop={Infinity}
                                wrapper="p"
                                steps={[
                                    "Enthusiastic Dev 😎", 2000,  // Increase delay here
                                    "", 800,                   // Small pause
                                    "Front End Developer 💻", 2000,
                                    "", 800,
                                    "React.js Dev 🌐", 2000,
                                    "", 800,
                                  ]}/>
                            </h1>
                            <span className='profile-role-tagline'>
                                Knack of building applications with front and back end
                                operations.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='primary-btn' onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                            Hire me
                        </button>
                        <a href='#' download='Rotshodzwa.pdf'>
                            <button className='highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
            </div>
        </div>
  )
}
