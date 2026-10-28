<script setup>
import SiteNav from './components/SiteNav.vue'
import HeroSection from './components/HeroSection.vue'
import ImpactStrip from './components/ImpactStrip.vue'
import WorkSection from './components/WorkSection.vue'
import HowIWork from './components/HowIWork.vue'
import PersonalProjects from './components/PersonalProjects.vue'
import BeyondCode from './components/BeyondCode.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <SiteNav />
  <main>
    <HeroSection />
    <ImpactStrip />
    <WorkSection />
    <HowIWork />
    <PersonalProjects />
    <BeyondCode />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
