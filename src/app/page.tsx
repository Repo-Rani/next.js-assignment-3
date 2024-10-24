import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
const page = () => {
  return (
    <>
    <Navbar />
    <div className='container'>
    <Hero />
    <Skills />
    <Experience />
    <Projects />
    <Contact />
    <Footer />
    </div>

    </>
  )
}

export default page;