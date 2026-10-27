<script setup lang="ts">
const props = defineProps<{
  group: {
    title: string
    description: string
    skills: { name: string; icon: string; level: string }[]
  }
  index: number
  language: 'en' | 'km'
}>()

const khmerTitles: Record<string, string> = {
  'Web Development': 'ការអភិវឌ្ឍន៍វេបសាយ',
  'Desktop & Database': 'កម្មវិធីកុំព្យូទ័រ និងមូលដ្ឋានទិន្នន័យ',
  'IT Support': 'ជំនួយបច្ចេកទេស',
}
const khmerDescriptions: Record<string, string> = {
  'Building for the web and learning as I go.': 'បង្កើតវេបសាយ និងបន្តរៀនជាប្រចាំ។',
  'Application development and data storage.': 'ការអភិវឌ្ឍន៍កម្មវិធី និងការរក្សាទុកទិន្នន័យ។',
  'Helping devices, systems, and networks work reliably.': 'ជួយឱ្យឧបករណ៍ ប្រព័ន្ធ និងបណ្តាញដំណើរការបានល្អ។',
}

function levelLabel(level: string) {
  if (props.language === 'en') return level
  if (level === 'Working with') return 'កំពុងប្រើប្រាស់'
  if (level === 'Learning') return 'កំពុងរៀន'
  return 'បទពិសោធន៍អនុវត្ត'
}
</script>

<template>
  <article class="skill-group">
    <div class="skill-group-heading"><span class="skill-index">0{{ index }}</span><span class="skill-marker" aria-hidden="true">+</span></div>
    <h3>{{ language === 'km' ? khmerTitles[group.title] : group.title }}</h3>
    <p>{{ language === 'km' ? khmerDescriptions[group.description] : group.description }}</p>
    <ul class="skill-list">
      <li v-for="skill in group.skills" :key="skill.name">
        <span class="skill-name"><span class="technology-mark" aria-hidden="true">{{ skill.icon }}</span>{{ skill.name }}</span>
        <span class="skill-level" :class="{ 'skill-level-learning': skill.level === 'Learning' }">{{ levelLabel(skill.level) }}</span>
      </li>
    </ul>
  </article>
</template>