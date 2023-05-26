import React from 'react'
import './Approach.css'

const Approach = () => {
    return (
        <>
            <section id='timeline'>
                <h1>Our Approach</h1>
                <p class='leader'>
                    Forth applies a six-step framework to every development project.
                    <br></br> This allows us to break down projects into distinct phases
                    so that we can monitor progression and results along the way.
                </p>
                <div class='demo-card-wrapper'>
                    <div class='demo-card demo-card--step1'>
                        <div class='head'>
                            <div class='number-box'>
                                <span>01</span>
                            </div>
                            <h2> Planning</h2>
                        </div>
                        <div class='body'>
                            <p>
                                Every project begins in the planning phase. In this phase, we
                                will work with you to discover your needs, wants, and true
                                objectives so can plan a complete project up front, avoiding
                                costly delays and unforeseen challenges later on.
                            </p>
                        </div>
                    </div>

                    <div class='demo-card demo-card--step2'>
                        <div class='head'>
                            <div class='number-box'>
                                <span>02</span>
                            </div>
                            <h2> Design and Samples</h2>
                        </div>
                        <div class='body'>
                            <p>
                                In this phase, we will create mockups and prototypes based on
                                information gathered during the previous phase to show you a
                                visual representation your needs early on in the project. This
                                will allow us the opportunity to further solidify your
                                requirements and discover any additional needs or challenges
                                that did not present themselves in the planning phase.{' '}
                            </p>
                        </div>
                    </div>

                    <div class='demo-card demo-card--step3'>
                        <div class='head'>
                            <div class='number-box'>
                                <span>03</span>
                            </div>
                            <h2> Build</h2>
                        </div>
                        <div class='body'>
                            <p>
                                In this phase, we will begin development based on the technical
                                and design speciation’s laid out in the planning phase and will
                                perform regular functional tests so we can correct any problems
                                during the development process rather than addressing them after
                                project completion.
                            </p>
                        </div>
                    </div>

                    <div class='demo-card demo-card--step4'>
                        <div class='head'>
                            <div class='number-box'>
                                <span>04</span>
                            </div>
                            <h2> Test & Train</h2>
                        </div>
                        <div class='body'>
                            <p>
                                We perform thorough testing on all sites prior to final launch.
                                To ensure that your platform is functioning properly, we will
                                simulate heavy stress to measure performance and test various
                                browsers, operating systems, and devices with the site to be
                                sure that it is responsive and performs well across all
                                platforms. We will also train your staff so that they will be
                                able to make minor adjustments or publish new content once your
                                site is live.
                            </p>
                        </div>
                    </div>

                    <div class='demo-card demo-card--step5'>
                        <div class='head'>
                            <div class='number-box'>
                                <span>05</span>
                            </div>
                            <h2>Launch</h2>
                        </div>
                        <div class='body'>
                            <p>
                                The final launch of your website can be stressful. Even with
                                thorough testing throughout development, unforeseen challenges
                                can arise. That’s why the Forth development team provides full
                                monitoring and support during the launch to make sure that your
                                launch is successful and are ready to quickly address any issues
                                that may arise.
                            </p>
                        </div>
                    </div>
                    <div class='demo-card demo-card--step4'>
                        <div class='head'>
                            <div class='number-box'>
                                <span>06</span>
                            </div>
                            <h2> Support</h2>
                        </div>
                        <div class='body'>
                            <p>
                                Forth will be providing full support to ensure the created
                                solution is running at its best at all times including, quality
                                control, operating team training and assistance, bug
                                investigation and resolution.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Approach
