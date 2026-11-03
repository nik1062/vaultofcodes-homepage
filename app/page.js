import { Hero } from "@/components/sections/Hero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Programs } from "@/components/sections/Programs";
import { SoftwareSaaS } from "@/components/sections/SoftwareSaaS";
import { WhyUs } from "@/components/sections/WhyUs";
import { Stats } from "@/components/sections/Stats";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Community } from "@/components/sections/Community";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <Programs />
      <SoftwareSaaS />
      <WhyUs />
      <Stats />
      <HowItWorks />
      <Community />
      <FinalCTA />
    </>
  );
}
