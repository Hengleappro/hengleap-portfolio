<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { profile, projects, skillGroups } from './data/portfolio'

const language = ref<'en' | 'km'>('en')
const theme = ref<'dark' | 'light'>('light')

const copy = computed(() => language.value === 'km' ? {
  location: 'មានមូលដ្ឋាននៅ',
  greeting: 'សួស្តី ខ្ញុំឈ្មោះ',
  role: 'ជំនួយបច្ចេកទេស និងអ្នកអភិវឌ្ឍន៍វេបសាយ',
  locationName: 'ភ្នំពេញ ប្រទេសកម្ពុជា',
  introduction: 'ខ្ញុំចូលចិត្តស្រាវជ្រាវ រៀនតាមការអនុវត្ត និងធ្វើឱ្យបច្ចេកវិទ្យាមានប្រយោជន៍សម្រាប់មនុស្ស។',
  github: 'មើល GitHub',
  projectsButton: 'មើលគម្រោង',
  heroNote: 'រៀនជារៀងរាល់ថ្ងៃ។ បង្កើតអ្វីដែលមានប្រយោជន៍ម្តងមួយៗ។',
  scroll: 'រំកិលដើម្បីមើល',
  about: 'អំពីខ្ញុំ',
  aboutTitle: 'ចូលចិត្តស្វែងយល់។',
  aboutSubtitle: 'ផ្តោតលើអ្វីដែលនៅខាងមុខ។',
  aboutFirst: `តាំងពីក្មេង ខ្ញុំចូលចិត្តលេង និងស្វែងយល់ពីកុំព្យូទ័រ ទូរស័ព្ទ និងអ៊ីនធឺណិត។ ចំណាប់អារម្មណ៍នេះបានជំរុញឱ្យខ្ញុំជ្រើសរើសសិក្សាផ្នែក IT។ ខ្ញុំបានសិក្សាផ្នែកវិទ្យាសាស្ត្រកុំព្យូទ័រនៅសាកលវិទ្យាល័យបញ្ញាជាតិ។`,
  aboutSecond: 'ឆ្នាំ ២០២៣ គឺជាចំណុចបត់សំខាន់ នៅពេលខ្ញុំចាប់ផ្តើមធ្វើការនៅហាង GTC Computer។ ការងារនេះធ្វើឱ្យខ្ញុំបានស្គាល់គ្រឿងអេឡិចត្រូនិកជាច្រើន និងមានឱកាសសិក្សាផ្នែក IT បន្ថែម។ បទពិសោធន៍នេះបានពង្រឹងចំណាប់អារម្មណ៍របស់ខ្ញុំក្នុងការបន្តរៀន និងអភិវឌ្ឍជំនាញផ្នែក IT។',
  education: 'ការសិក្សា', graduated: 'បញ្ចប់ការសិក្សា',
  skills: 'ជំនាញ', skillsTitle: 'ឧបករណ៍ដែលខ្ញុំប្រើ', skillsSubtitle: 'និងបន្តរៀន។',
  skillsIntro: 'ជំនាញអភិវឌ្ឍន៍វេបសាយ កម្មវិធីកុំព្យូទ័រ និងការដោះស្រាយបញ្ហាបច្ចេកទេស។',
  projects: 'គម្រោង', projectTitle: 'រៀនតាមរយៈ', projectSubtitle: 'គម្រោងជាក់ស្តែង។',
  projectIntro: 'រូបភាព និងតំណភ្ជាប់គម្រោងមួយចំនួនជាកន្លែងទំនេរ រហូតដល់មានឯកសារពិត។',
  contact: 'ទំនាក់ទំនង', contactTitle: 'តោះភ្ជាប់ទំនាក់ទំនង', contactSubtitle: 'និងបង្កើតអ្វីដែលល្អ។',
  contactIntro: 'ខ្ញុំរីករាយក្នុងការពិភាក្សាអំពីការអភិវឌ្ឍន៍វេបសាយ ជំនួយបច្ចេកទេស និងឱកាសរៀនសូត្រ។',
  email: 'អ៊ីមែល',
  footer: 'រចនា និងបង្កើតដោយយកចិត្តទុកដាក់។', backTop: 'ត្រឡប់ទៅខាងលើ ↑',
} : {
  location: 'Based in', greeting: 'Hello, I’m', role: profile.role, locationName: profile.location, introduction: profile.introduction, github: 'Visit GitHub', projectsButton: 'View projects',
  heroNote: 'Learning every day. Building one useful thing at a time.', scroll: 'Scroll to explore',
  about: 'About me', aboutTitle: 'Curious by nature.', aboutSubtitle: 'Focused on what’s next.',
  aboutFirst: 'I have always enjoyed exploring computers, phones, and the internet. That curiosity led me to study IT. I studied computer science at Panha Chiet University (PCU).',
  aboutSecond: 'A turning point came in 2023, when I started working at GTC Computer. The experience introduced me to a range of electronic devices and gave me time to continue studying IT. It strengthened my interest in learning more and developing my skills in IT.',
  education: 'Education', graduated: 'Graduated', skills: 'Skills', skillsTitle: 'Tools I use', skillsSubtitle: 'and keep learning.',
  skillsIntro: 'A practical mix of web technologies, desktop development, and hands-on troubleshooting.',
  projects: 'Selected projects', projectTitle: 'Learning through', projectSubtitle: 'real projects.',
  projectIntro: 'Project images and links are placeholders until the original screenshots and URLs are added.',
  contact: 'Contact', contactTitle: 'Let’s connect', contactSubtitle: 'and make good things.',
  contactIntro: 'Open to connecting about web development, IT support, and opportunities to learn and contribute.',
  email: 'Email',
  footer: 'Designed and built with care.', backTop: 'Back to top ↑',
})

function setLanguage(value: 'en' | 'km') {
  language.value = value
  if (import.meta.client) localStorage.setItem('portfolio-language', value)
}

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}

onMounted(() => {
  const savedLanguage = localStorage.getItem('portfolio-language')
  const savedTheme = localStorage.getItem('portfolio-theme')
  if (savedLanguage === 'en' || savedLanguage === 'km') language.value = savedLanguage
  if (savedTheme === 'dark' || savedTheme === 'light') theme.value = savedTheme
  document.documentElement.dataset.theme = theme.value
})

watch(theme, (value) => {
  if (import.meta.client) {
    document.documentElement.dataset.theme = value
    localStorage.setItem('portfolio-theme', value)
  }
})

useHead({ htmlAttrs: { lang: computed(() => language.value === 'km' ? 'km' : 'en') } })

useSeoMeta({
  title: `${profile.name} | IT Support & Web Developer`,
  description: `Portfolio of ${profile.name}, an IT Support and Web Developer based in ${profile.location}.`,
})
</script>

<template>
  <div class="site-shell">
    <NuxtRouteAnnouncer />
    <SiteHeader :name="language === 'km' ? profile.khmerFullName : profile.name" :language="language" :theme="theme" @change-language="setLanguage" @toggle-theme="toggleTheme" />

    <main>
      <section id="home" class="hero page-width" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow"><span class="status-dot"></span> {{ copy.location }} {{ profile.location }}</p>
          <h1 id="hero-title">{{ copy.greeting }} <span>{{ language === 'km' ? profile.khmerFullName : profile.name }}</span><br><span class="title-accent">{{ copy.role }}</span></h1>
          <p class="hero-intro">{{ copy.introduction }}</p>
          <div class="hero-actions">
            <a class="button button-primary" :href="profile.github" target="_blank" rel="noreferrer">{{ copy.github }} <span aria-hidden="true">↗</span></a>
            <a class="button button-secondary" href="#projects">{{ copy.projectsButton }} <span aria-hidden="true">↓</span></a>
          </div>
          <p class="hero-note">{{ copy.heroNote }}</p>
        </div>
        <div class="hero-visual" :aria-label="language === 'km' ? `កាតអក្សរកាត់របស់ ${profile.khmerFullName}` : `${profile.name} initials artwork`" role="img">
          <div class="visual-grid"></div>
          <div class="orbit orbit-one"></div>
          <div class="orbit orbit-two"></div>
          <div class="initials-card"><span>PORTFOLIO / {{ profile.graduationYear }}</span><strong>HL</strong><small>IT · WEB · SUPPORT</small></div>
          <span class="visual-cross cross-one" aria-hidden="true">+</span>
          <span class="visual-cross cross-two" aria-hidden="true">+</span>
          <span class="visual-caption">{{ language === 'km' ? 'ភ្នំពេញ ប្រទេសកម្ពុជា' : 'PHNOM PENH, CAMBODIA' }} <span>11°33' N</span></span>
        </div>
        <a class="hero-scroll" href="#about"><span></span> {{ copy.scroll }}</a>
      </section>

      <section id="about" class="section section-about" aria-labelledby="about-title">
        <div class="page-width about-layout">
          <div class="section-kicker"><span>01</span><span class="kicker-line"></span><span>{{ copy.about }}</span></div>
          <div class="about-copy">
            <h2 id="about-title">{{ copy.aboutTitle }}<br><span>{{ copy.aboutSubtitle }}</span></h2>
            <div class="about-text-grid">
              <p>{{ copy.aboutFirst }}</p>
              <p>{{ copy.aboutSecond }}</p>
            </div>
            <div class="about-facts">
              <div><span>{{ copy.education }}</span><strong>{{ language === 'km' ? profile.educationKhmer : profile.education }}</strong></div>
              <div><span>{{ copy.graduated }}</span><strong>2026</strong></div>
              <div><span>{{ copy.location }}</span><strong>{{ copy.locationName }}</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" class="section section-skills" aria-labelledby="skills-title">
        <div class="page-width">
          <div class="section-heading">
            <div class="section-kicker"><span>02</span><span class="kicker-line"></span><span>{{ copy.skills }}</span></div>
            <div class="section-heading-copy"><h2 id="skills-title">{{ copy.skillsTitle }}<br><span>{{ copy.skillsSubtitle }}</span></h2><p>{{ copy.skillsIntro }}</p></div>
          </div>
          <div class="skills-grid">
            <SkillGroup v-for="(group, index) in skillGroups" :key="group.title" :group="group" :index="index + 1" :language="language" />
          </div>
        </div>
      </section>

      <section id="projects" class="section section-projects" aria-labelledby="projects-title">
        <div class="page-width">
          <div class="section-heading project-heading">
            <div class="section-kicker"><span>03</span><span class="kicker-line"></span><span>{{ copy.projects }}</span></div>
            <div class="section-heading-copy"><h2 id="projects-title">{{ copy.projectTitle }}<br><span>{{ copy.projectSubtitle }}</span></h2><p>{{ copy.projectIntro }}</p></div>
          </div>
          <div class="projects-grid">
            <ProjectCard v-for="(project, index) in projects" :key="project.title" :project="project" :index="index + 1" :language="language" />
          </div>
        </div>
      </section>

      <section id="contact" class="section section-contact" aria-labelledby="contact-title">
        <div class="page-width contact-layout">
          <div>
            <div class="section-kicker"><span>04</span><span class="kicker-line"></span><span>{{ copy.contact }}</span></div>
            <h2 id="contact-title">{{ copy.contactTitle }}<br><span>{{ copy.contactSubtitle }}</span></h2>
            <p class="contact-intro">{{ copy.contactIntro }}</p>
          </div>
          <div class="contact-links">
            <a class="contact-link" :href="`mailto:${profile.email}`"><span>{{ copy.email }}</span><strong>{{ profile.email }}</strong><span class="link-arrow" aria-hidden="true">↗</span></a>
            <a class="contact-link" :href="profile.github" target="_blank" rel="noreferrer"><span>GitHub</span><strong>github.com/Hengleappro</strong><span class="link-arrow" aria-hidden="true">↗</span></a>
            <div class="contact-location"><span class="status-dot"></span>{{ copy.locationName }}</div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer page-width">
      <a class="footer-name" href="#home">{{ profile.name }}<span>© {{ profile.graduationYear }}</span></a>
      <p>{{ copy.footer }}</p>
      <a href="#home" class="back-top">{{ copy.backTop }}</a>
    </footer>
  </div>
</template>