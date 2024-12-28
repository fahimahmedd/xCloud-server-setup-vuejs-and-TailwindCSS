import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('useTheme', () => {
  
  // Default to dark mode
  const isDarkMode = ref(true); 
  const html = document.documentElement;

  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;

    if (isDarkMode.value) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light'); 
    }
  };

  const loadTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    if (savedTheme === 'light') {
      isDarkMode.value = false;
      html.classList.remove('dark');
    } else {
      isDarkMode.value = true;
      html.classList.add('dark');
    }
  };

  return { isDarkMode, toggleTheme, loadTheme }
})
