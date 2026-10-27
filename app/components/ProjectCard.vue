<script setup lang="ts">
defineProps<{
  project: {
    title: string
    category: string
    description: string
    technologies: string[]
    languageStats: { name: string; percentage: number; color: string }[]
    screenshotLabel: string
    repository: string | null
    demo: string | null
  }
  index: number
  language: 'en' | 'km'
}>()

const khmerDescriptions: Record<string, string> = {
  'A school website with navigation, course information, and a welcome section. Uses MongoDB and is deployed on Vercel.': 'វេបសាយសាលាដែលមានម៉ឺនុយ ព័ត៌មានវគ្គសិក្សា និងផ្នែកស្វាគមន៍។ ប្រើ MongoDB និងដាក់ឱ្យដំណើរការលើ Vercel។',
  'A desktop application for managing students, classes, and attendance.': 'កម្មវិធីកុំព្យូទ័រសម្រាប់គ្រប់គ្រងសិស្ស ថ្នាក់រៀន និងវត្តមាន។',
}
</script>

<template>
  <article class="project-card">
    <div class="project-placeholder" :class="`project-placeholder-${index}`" role="img" :aria-label="project.screenshotLabel">
      <div class="placeholder-frame">
        <span class="placeholder-window-bar"><i></i><i></i><i></i><small>{{ project.category }}</small></span>
          <div class="placeholder-content">
            <span class="placeholder-icon" aria-hidden="true">{{ index === 1 ? 'WEB' : 'APP' }}</span>
            <strong>{{ project.title }}</strong>
            <span class="placeholder-label">{{ language === 'km' ? 'កន្លែងរូបថតអេក្រង់' : 'SCREENSHOT PLACEHOLDER' }}</span>
        </div>
      </div>
      <span class="project-number">0{{ index }} / PROJECT</span>
    </div>
    <div class="project-body">
      <div class="project-title-row"><div><span class="project-category">{{ language === 'km' ? (index === 1 ? 'អភិវឌ្ឍន៍វេបសាយ' : 'កម្មវិធីកុំព្យូទ័រ') : project.category }}</span><h3>{{ project.title }}</h3></div><span class="project-open" aria-hidden="true">↗</span></div>
      <p>{{ language === 'km' ? khmerDescriptions[project.description] : project.description }}</p>
      <ul class="technology-list" aria-label="Technologies used"><li v-for="technology in project.technologies" :key="technology">{{ technology }}</li></ul>
      <div v-if="project.languageStats.length" class="language-stats">
        <h4>{{ language === 'km' ? 'ភាសាក្នុងគម្រោង' : 'Languages' }}</h4>
        <div class="language-bar" role="img" :aria-label="project.languageStats.map((item) => `${item.name} ${item.percentage}%`).join(', ')">
          <span v-for="item in project.languageStats" :key="item.name" :style="{ width: `${item.percentage}%`, backgroundColor: item.color }"></span>
        </div>
        <ul class="language-legend">
          <li v-for="item in project.languageStats" :key="item.name"><i :style="{ backgroundColor: item.color }"></i><strong>{{ item.name }}</strong><span>{{ item.percentage.toFixed(1) }}%</span></li>
        </ul>
      </div>
      <div class="project-links">
        <a v-if="project.repository" :href="project.repository" target="_blank" rel="noreferrer">{{ language === 'km' ? 'ឃ្លាំង GitHub' : 'GitHub repository' }} ↗</a>
        <a v-if="project.demo" :href="project.demo" target="_blank" rel="noreferrer">{{ language === 'km' ? 'មើលវេបសាយ' : 'Live demo' }} ↗</a>
        <span v-if="!project.repository && !project.demo">{{ language === 'km' ? 'ឯកសារគម្រោងមានតែនៅលើកុំព្យូទ័រផ្ទាល់ខ្លួន' : 'Project files are local; no public link provided' }}</span>
      </div>
    </div>
  </article>
</template>