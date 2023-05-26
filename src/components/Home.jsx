import React from 'react'
import videoBg from '../assests/background.mp4'
import './Home.css'

const Home = () => {
    return (
        <>
            <div className='home' id='home'>
                <div className="overlay">
                    <video id='bg' src={videoBg} autoPlay={true} loop muted playsInline />
                </div>
                <div className="content">
                    <h2 className='title-web'>
                        Sustainable Technology Solutions <br></br>to take your business
                        forward.
                    </h2>

                    <div className='btns'>
                        <button className='button' id='btn'>
                            <a href='#contact'>Get a Quote</a>
                        </button>
                        <button className='button' id='btn'>
                            <a href='#services'>Explore more</a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
