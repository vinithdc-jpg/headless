import ClaimsCTA from '@/components/claims/ClaimsCTA'
import ClaimsFAQ from '@/components/claims/ClaimsFAQ'
import ClaimsHero from '@/components/claims/ClaimsHero'
import ClaimsProcess from '@/components/claims/ClaimsProcess'
import ClaimsTestimonials from '@/components/claims/ClaimsTestimonials'
import ClaimsTimeline from '@/components/claims/ClaimsTimeline'
import EmergencyContact from '@/components/claims/EmergencyContact'
import Footer from '@/components/sections/Footer'
import Navbar from '@/components/sections/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import React from 'react'

const page = () => {
    return (
        <main className="overflow-x-hidden bg-white">

            <Navbar />
            <ScrollReveal>
                <ClaimsHero />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
                <ClaimsProcess />
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
                <EmergencyContact />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
                <ClaimsFAQ />
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
                <ClaimsTimeline />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
                <ClaimsTestimonials />
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
                <ClaimsCTA />
            </ScrollReveal>
            <Footer />
        </main>
    )
}

export default page
