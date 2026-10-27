export const profile = {
  name: 'Hengleap',
  fullName: 'Lim Hengleap',
  khmerFullName: 'លីម ហេងលាភ',
  nickname: 'Hengleap',
  role: 'IT Support & Web Developer',
  age: 21,
  education: 'Computer Science',
  educationKhmer: 'វិទ្យាសាស្ត្រកុំព្យូទ័រ · សាកលវិទ្យាល័យបញ្ញាជាតិ',
  graduationYear: 2026,
  location: 'Phnom Penh, Cambodia',
  email: 'hengleap.lim00@gmail.com',
  github: 'https://github.com/Hengleappro',
  linkedin: null,
  introduction: 'I’m an aspiring developer and IT support specialist who enjoys researching, learning by doing, and making technology work better for people.',
}

export const skillGroups = [
  {
    title: 'Web Development',
    description: 'Building for the web and learning as I go.',
    skills: [
      { name: 'Nuxt 3', icon: 'NU', level: 'Working with' },
      { name: 'Vue.js', icon: 'VU', level: 'Working with' },
      { name: 'JavaScript', icon: 'JS', level: 'Working with' },
      { name: 'HTML5', icon: '</>', level: 'Working with' },
      { name: 'CSS3', icon: '#', level: 'Working with' },
      { name: 'Bootstrap', icon: 'B', level: 'Working with' },
      { name: 'PHP', icon: 'PHP', level: 'Learning' },
      { name: 'Laravel', icon: 'L', level: 'Learning' },
    ],
  },
  {
    title: 'Desktop & Database',
    description: 'Application development and data storage.',
    skills: [
      { name: 'C#', icon: 'C#', level: 'Working with' },
      { name: 'Visual Studio', icon: 'VS', level: 'Working with' },
      { name: 'MySQL', icon: 'MY', level: 'Working with' },
      { name: 'SQL Server', icon: 'SQL', level: 'Working with' },
    ],
  },
  {
    title: 'IT Support',
    description: 'Helping devices, systems, and networks work reliably.',
    skills: [
      { name: 'Windows troubleshooting', icon: 'OS', level: 'Hands-on' },
      { name: 'PC hardware & software', icon: 'PC', level: 'Hands-on' },
      { name: 'Networking & Wi-Fi', icon: 'NET', level: 'Hands-on' },
      { name: 'Printer troubleshooting', icon: 'PR', level: 'Hands-on' },
      { name: 'Fingerprint systems', icon: 'ID', level: 'Hands-on' },
    ],
  },
]

export const projects = [
  {
    title: 'NTTC-School Website',
    category: 'WEB DEVELOPMENT',
    description: 'A school website with navigation, course information, and a welcome section. Uses MongoDB and is deployed on Vercel.',
    technologies: ['Nuxt 3', 'Vue.js', 'TypeScript', 'CSS', 'MongoDB', 'Vercel'],
    languageStats: [
      { name: 'Vue', percentage: 71.4, color: '#42b883' },
      { name: 'TypeScript', percentage: 28.2, color: '#3178c6' },
      { name: 'CSS', percentage: 0.4, color: '#8b5cf6' },
    ],
    screenshotLabel: 'NTTC-School Website screenshot placeholder',
    repository: null,
    demo: 'https://nttc-school.vercel.app/',
  },
  {
    title: 'Student Attendance Management System',
    category: 'DESKTOP APPLICATION',
    description: 'A desktop application for managing students, classes, and attendance.',
    technologies: ['C#', 'Visual Studio', 'SQL Server'],
    languageStats: [],
    screenshotLabel: 'Attendance application screenshot placeholder',
    repository: null,
    demo: null,
  },
]