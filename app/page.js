import StatsSection from '@/components/cards/InfoCard'
import HeroSection from '@/components/sections/Hero'
import Navbar from '@/components/sections/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <StatsSection />
    </div>
  )
}

export default page
