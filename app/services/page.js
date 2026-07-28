import Footer from '@/components/sections/Footer';
import Navbar from '@/components/sections/Navbar';
import CoverageTabs from '@/components/services/CoverageTabs';
import FAQ from '@/components/services/FAQ';
import HowWeWork from '@/components/services/HowWeWork';
import Industries from '@/components/services/Industries';
import ServicesCTA from '@/components/services/ServicesCTA';
import ServicesHero from '@/components/services/ServicesHero';
import WhyChooseUs from '@/components/services/WhyChooseUs';
import { coverageData } from "@/data/coverageData";
import React from 'react';

const page = () => {
    return (
        <main className="overflow-x-hidden bg-white">
            <Navbar />
            <ServicesHero />
            <CoverageTabs coverageData={coverageData} />
            <HowWeWork />
            <Industries />
            <WhyChooseUs />
            <FAQ />
            <ServicesCTA />
            <Footer />
        </main>
    )
}

export default page
