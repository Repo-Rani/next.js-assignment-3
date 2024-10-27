import React from "react";
import Image from "next/image";
function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Turning Ideas Into Stunning Web Realities</h2>
        <p>
          With a passion for clean, modern design and a focus on responsive,
          user-friendly experiences, I specialize in transforming ideas into
          visually compelling, functional websites. Lets build something
          remarkable together.
        </p>
      </div>
      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <Image src="/typescript.jpg" alt="typescript image" height={120} width={120}/>
          </div>
          <Image src="/img.png" alt="profile"  height={400} width={400}/>
        </div>
        <div>
          <div className="tech-icon">
            <Image src="/html.png" alt="html-image" height={120} width={120} />
          </div>
          <div className="tech-icon">
            <Image src="/css.png" alt="css image" height={120} width={120}/>
          </div>
          <div className="tech-icon">
            <Image src="/javascript.png" alt="javascript image" height={120} width={120}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
