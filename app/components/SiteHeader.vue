<script setup lang="ts">
defineProps<{ name: string; language: 'en' | 'km'; theme: 'dark' | 'light' }>()

defineEmits<{
  changeLanguage: [language: 'en' | 'km']
  toggleTheme: []
}>()

const links = [
  { label: 'About', khmer: 'អំពីខ្ញុំ', href: '#about' },
  { label: 'Skills', khmer: 'ជំនាញ', href: '#skills' },
  { label: 'Projects', khmer: 'គម្រោង', href: '#projects' },
  { label: 'Contact', khmer: 'ទំនាក់ទំនង', href: '#contact' },
]
</script>

<template>
  <header class="site-header">
    <div class="header-inner page-width">
      <a class="brand" href="#home" aria-label="Back to home">
        <span class="brand-mark" aria-hidden="true">{{ name.slice(0, 1) }}</span>
        <span>{{ name }}<small>{{ language === 'km' ? 'ជំនួយបច្ចេកទេស · អ្នកអភិវឌ្ឍន៍វេបសាយ' : 'IT SUPPORT · WEB DEVELOPER' }}</small></span>
      </a>
      <nav class="main-nav" :aria-label="language === 'km' ? 'ការរុករកចម្បង' : 'Main navigation'">
        <a href="#home">{{ language === 'km' ? 'ទំព័រដើម' : 'Home' }}</a>
        <a v-for="link in links" :key="link.href" :href="link.href">{{ language === 'km' ? link.khmer : link.label }}</a>
      </nav>
      <div class="header-actions">
        <div class="language-switch" role="group" :aria-label="language === 'km' ? 'ជ្រើសរើសភាសា' : 'Choose language'">
          <button type="button" :aria-pressed="language === 'en'" @click="$emit('changeLanguage', 'en')">EN</button>
          <button type="button" lang="km" :aria-pressed="language === 'km'" @click="$emit('changeLanguage', 'km')">ខ្មែរ</button>
        </div>
        <button class="theme-toggle" type="button" :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'" :title="theme === 'dark' ? 'Light mode' : 'Dark mode'" @click="$emit('toggleTheme')">
          <svg v-if="theme === 'dark'" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.5"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>
          <svg v-else viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 15.3A8.5 8.5 0 0 1 8.7 3.8 8.5 8.5 0 1 0 20.2 15.3Z"/></svg>
        </button>
        <a class="header-contact" href="#contact">{{ language === 'km' ? 'ទាក់ទងខ្ញុំ' : 'Let’s talk' }} <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </header>
</template>