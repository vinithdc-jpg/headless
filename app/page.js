import StatsSection from '@/components/cards/InfoCard'
import HeroSection from '@/components/sections/Hero'
import Navbar from '@/components/sections/Navbar'
import ServicesSection from '@/components/sections/ServiceSection'
import Testimonials from '@/components/sections/Testimonials'
import WhyMeridian from '@/components/sections/WhyMeridian'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyMeridian />
      <Testimonials />
    </div>
  )
}

export default page
