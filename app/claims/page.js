import ClaimsCTA from '@/components/claims/ClaimsCTA'
import ClaimsFAQ from '@/components/claims/ClaimsFAQ'
import ClaimsHero from '@/components/claims/ClaimsHero'
import ClaimsProcess from '@/components/claims/ClaimsProcess'
import ClaimsTestimonials from '@/components/claims/ClaimsTestimonials'
import ClaimsTimeline from '@/components/claims/ClaimsTimeline'
import EmergencyContact from '@/components/claims/EmergencyContact'
import Footer from '@/components/sections/Footer'
import Navbar from '@/components/sections/Navbar'
import React from 'react'

const page = () => {
    return (
        <main className="overflow-x-hidden bg-white">

            <Navbar />
            <ClaimsHero />
            <ClaimsProcess />
            <EmergencyContact />
            <ClaimsFAQ />
            <ClaimsTimeline />
            <ClaimsTestimonials />
            <ClaimsCTA />
            <Footer />
        </main>
    )
}

export default page
