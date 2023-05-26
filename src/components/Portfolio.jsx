import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
    return (
        <>
            <div>
                <h1 className='port'>Our Portfolio</h1>

                <div className='slider'>
                    <div className='slider-track'>
                        <div className='silde'>
                            <img className='imgg' src={require('../images/p1.png')} alt='' />
                        </div>
                        <div className='silde'>
                            <img className='imgg' src={require('../images/p2.png')} alt='' />
                        </div>
                        <div className='silde'>
                            <img className='imgg' src={require('../images/p3.png')} alt='' />
                        </div>
                        <div className='silde'>
                            <img className='imgg' src={require('../images/p4.png')} alt='' />
                        </div>
                        <div className='silde'>
                            <img className='imgg' src={require('../images/p5.png')} alt='' />
                        </div>
                        <div className='silde'>
                            <img className='imgg' src={require('../images/p6.png')} alt='' />
                        </div>
                        <div className='silde'>
                            <img className='imgg' src={require('../images/p7.png')} alt='' />
                        </div>
                        <div className='silde'>
                            <img className='imgg' src={require('../images/p8.png')} alt='' />
                        </div>
                        <div className='silde'>
                            <img className='imgg' src={require('../images/p9.png')} alt='' />
                        </div>
                        <div className='silde'>
                            <img className='imgg' src={require('../images/p10.png')} alt='' />
                        </div>
                        <div className='silde'>
                            <img className='imgg' src={require('../images/p11.png')} alt='' />
                        </div>
                        <div className='silde'>
                            <img className='imgg' src={require('../images/p12.png')} alt='' />
                        </div>
                        <div className='silde'>
                            <img className='imgg' src={require('../images/p13.png')} alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='main-partner'>
                {' '}
                <h1 className='title-partner'>Our Partners</h1>
                <a href='https://www.aligned-tech.com/' target='__blank'>
                    <img className="partner" src={require('../images/par1.PNG')} alt='' />
                </a>
                <a href='https://leoceros.com/' target='__blank'>
                    <img className="partner" src={require('../images/par2.PNG')} alt='' />
                </a>
                <a href='http://www.citg.com.lb/' target='__blank'>
                    <img className="partner" src={require('../images/par3.PNG')} alt='' />
                </a>
            </div>
        </>
    )
}

export default Portfolio
