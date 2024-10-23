import React from 'react'

function Hero() {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>Turning Ideas Into Stunning Web Realities</h2>
            <p>

            With a passion for clean, modern design and a focus on responsive, user-friendly experiences, I specialize in transforming ideas into visually compelling, functional websites. Let's build something remarkable together
            </p>
        </div>
        <div className='hero-img'>
            <div>
                <div className='tech-icon'>
                    <img src="/typescript.jpg" alt="typescript image"/>
                </div>
                <img src="/img.png" alt="image" />

            </div>
            <div >
                <div className='tech-icon'>
                    <img src="/html.png" alt="html image"/>
                </div>
                <div className='tech-icon'>
                    <img src="/css.png" alt="css image"  />
                </div>
                <div className='tech-icon'>
                    <img src="javascript.png" alt="javascript image" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero