'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

function applyTheme(t: Theme) {
  // Keep it CSS-driven
  document.documentElement.setAttribute('data-theme', t)
  document.documentElement.classList.toggle('dark', t === 'dark')
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const saved = (localStorage.getItem('theme') as Theme) || null
    const system: Theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const initial = (saved ?? system) as Theme
    setTheme(initial)
    applyTheme(initial)

    // Update with system changes if user hasn't explicitly chosen a theme
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      const hasSaved = localStorage.getItem('theme')
      if (!hasSaved) {
        const sys: Theme = mq.matches ? 'dark' : 'light'
        setTheme(sys)
        applyTheme(sys)
      }
    }
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    localStorage.setItem('theme', next)
    applyTheme(next)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}
