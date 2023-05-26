import React from 'react'
import './Services.css'
import video1 from '../assests/video1.mp4'
import video2 from '../assests/video2.mp4'
import video3 from '../assests/video3.mp4'
import video4 from '../assests/video4.mp4'

const Services = () => {
    return (
        <>
            <h1 className='title' id='services'>
                Services
            </h1>
            <div className='main'>
                <div className='imag'>
                    <video
                        id='video'
                        className='img1'
                        src={video1}
                        autoPlay={true}
                        loop
                        muted
                        playsInline
                    />
                </div>

                <div className='pack1'>
                    <h2 className='title1'>
                        Enterprise and Complex Software Development.
                    </h2>
                    <p className='prg1'>
                        For any business to succeed, its data needs to be centralized,
                        <br></br>
                        within reach, and easy to analyze.<br></br>We carefully design and
                        develop enterprise and complex software <br></br>to manage business
                        operations efficiently and cost-effectively.
                    </p>
                    <div className='btn2'>
                        <a href='./About.jsx' className='link1'>
                            Explore more
                        </a>
                    </div>
                </div>
            </div>
            <div className='main' id='main2'>
                <div className='imag'>
                    <video
                        id='video'
                        className='img1'
                        src={video2}
                        autoPlay={true}
                        loop
                        muted
                        playsInline
                    />
                </div>

                <div className='pack1' id='edit2'>
                    <h2 className='title1'>
                        Web Development .<br></br>
                        Enjoy innovative, world-class web development solutions
                    </h2>
                    <p className='prg1'>
                        The option of having a website is a thing of the past. With digital
                        solutions taking center stage, a website is essential to showcase
                        your products and services.
                    </p>
                    <div className='btn2'>
                        <a href='./About.jsx' className='link1'>
                            Explore more
                        </a>
                    </div>
                </div>
            </div>
            <div className='main'>
                <div className='imag'>
                    <video
                        id='video'
                        className='img1'
                        src={video3}
                        autoPlay={true}
                        loop
                        muted
                        playsInline
                    />
                </div>

                <div className='pack1'>
                    <h2 className='title1'>
                        Mobile Application Development .<br></br>Give consumers the
                        convenience of your services at the touch of a button
                    </h2>
                    <p className='prg1'>
                        In a world where “always on” and “always on the go” are perceived as
                        strengths, consumers turn to their mobile devices to constantly stay
                        connected. Your business shouldn’t be any different. Keep your
                        services top of mind by offering your customers a seamless mobile
                        experience.
                    </p>
                    <div className='btn2'>
                        <a href='./About.jsx' className='link1'>
                            Explore more
                        </a>
                    </div>
                </div>
            </div>
            <div className='main' id='main2'>
                <div className='imag'>
                    <video
                        id='video'
                        className='img1'
                        src={video4}
                        autoPlay={true}
                        loop
                        muted
                        playsInline
                    />
                </div>

                <div className='pack1' id='edit2'>
                    <h2 className='title1'>
                        Design Strategy and Product Design .<br></br>Take your product design
                        to the next level
                    </h2>
                    <p className='prg1'>
                        In a world where “always on” and “always on the go” are perceived as
                        strengths, consumers turn to their mobile devices to constantly stay
                        connected. Your business shouldn’t be any different. Keep your
                        services top of mind by offering your customers a seamless mobile
                        experience.
                    </p>
                    <div className='btn2'>
                        <a href='./About.jsx' className='link1'>
                            Explore more
                        </a>
                    </div>
                </div>
            </div>



            <div className='centred'>
                <h1>Leave assumptions to your competition</h1>
                <div className='btn2'>
                    <a href='./About.jsx' className='link1'>
                        Why Forth ?
                    </a>
                </div>
            </div>
        </>
    )
}

export default Services
