import Accreditations from '@/components/about/AboutCTA'
import AboutHero from '@/components/about/AboutHero'
import AboutStory from '@/components/about/AboutStory'
import Leadership from '@/components/about/Leadership'
import Timeline from '@/components/about/Timeline'
import Values from '@/components/about/Values'
import WorkWithBest from '@/components/about/WorkWithBest'
import Footer from '@/components/sections/Footer'
import Navbar from '@/components/sections/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import React from 'react'

const page = () => {
    return (
        <main className="overflow-x-hidden bg-white">
            <Navbar />
            <ScrollReveal>
                <AboutHero />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
                <AboutStory />
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
                <Values />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
                <Timeline />
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
                <Leadership />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
                <Accreditations />
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
                <WorkWithBest />
            </ScrollReveal>
            <Footer />
        </main>
    )
}

export default page
