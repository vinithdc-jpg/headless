import Accreditations from '@/components/about/AboutCTA'
import AboutHero from '@/components/about/AboutHero'
import AboutStory from '@/components/about/AboutStory'
import Leadership from '@/components/about/Leadership'
import Timeline from '@/components/about/Timeline'
import Values from '@/components/about/Values'
import React from 'react'

const page = () => {
    return (
        <main className="overflow-x-hidden bg-white">
            <AboutHero />
            <AboutStory/>
            <Values/>
            <Timeline/>
            <Leadership/>
            <Accreditations/>
            
        </main>
    )
}

export default page
