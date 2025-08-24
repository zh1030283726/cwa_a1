import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { ThemeProvider } from './providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

// Replace with your student details
const STUDENT_NUMBER = '20839934'
const STUDENT_NAME = 'Cheung Chak Lam'

export const metadata: Metadata = {
  title: 'HTML5 Code Generator',
  description: 'Generate HTML5 code with JS and inline CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="transition-colors duration-300">
      <body className={`${inter.className} min-h-screen transition-colors duration-300`} suppressHydrationWarning>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <div className="pointer-events-none fixed bottom-4 left-4 z-50 bg-gray-800 text-white px-3 py-1 rounded shadow-lg">
              Student: {STUDENT_NUMBER}
            </div>
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8 mt-16">
              {children}
            </main>
            <Footer studentName={STUDENT_NAME} studentNumber={STUDENT_NUMBER} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}