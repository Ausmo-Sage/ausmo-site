'use client'

import { useTheme } from './ThemeProvider'

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme()

  const cycleTheme = () => {
    console.log('Theme toggle clicked, current theme:', theme)
    if (theme === 'light') {
      console.log('Switching from light to dark')
      setTheme('dark')
    } else if (theme === 'dark') {
      console.log('Switching from dark to system')
      setTheme('system')
    } else {
      console.log('Switching from system to light')
      setTheme('light')
    }
  }

  const getIcon = () => {
    if (theme === 'system') {
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
    
    if (resolvedTheme === 'dark') {
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )
    }
    
    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }

  const getTooltip = () => {
    if (theme === 'system') {
      return 'Using system theme (click to set light)'
    }
    if (theme === 'light') {
      return 'Light theme (click to set dark)'
    }
    return 'Dark theme (click to use system)'
  }

  return (
    <button
      onClick={cycleTheme}
      className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      title={getTooltip()}
      aria-label={getTooltip()}
    >
      {getIcon()}
    </button>
  )
}
