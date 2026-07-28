import Accreditations from '@/components/about/AboutCTA'
import AboutHero from '@/components/about/AboutHero'
import AboutStory from '@/components/about/AboutStory'
import Leadership from '@/components/about/Leadership'
import Timeline from '@/components/about/Timeline'
import Values from '@/components/about/Values'
import Footer from '@/components/sections/Footer'
import Navbar from '@/components/sections/Navbar'
import React from 'react'

const page = () => {
    return (
        <main className="overflow-x-hidden bg-white">
            <Navbar />
            <AboutHero />
            <AboutStory />
            <Values />
            <Timeline />
            <Leadership />
            <Accreditations />
            <Footer />
        </main>
    )
}

export default page
