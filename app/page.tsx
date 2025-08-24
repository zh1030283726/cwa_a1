import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        HTML5 Code Generator
      </h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6 transition-colors duration-200">
        <h2 className="text-2xl font-semibold mb-4">Welcome to the Code Generator</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          This application generates HTML5 code with JavaScript and inline CSS. 
          No external stylesheets or CSS classes - just pure, standalone HTML that works anywhere!
        </p>
        <div className="flex space-x-4">
          <Link href="/tabs" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Start Generating →
          </Link>
          <Link href="/about" className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            Learn More
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Link href="/tabs" className="block group">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg hover:shadow-lg transition-all duration-200 group-hover:scale-105">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold">Tabs Generator</h3>
              <span className="text-green-500 text-sm font-medium">✓ Available</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Create up to 15 interactive tabs with custom content. Configure titles and content, then generate standalone HTML.
            </p>
            <span className="inline-block mt-3 text-blue-500 font-medium group-hover:translate-x-2 transition-transform">
              Get Started →
            </span>
          </div>
        </Link>

        <Link href="/escape-room" className="block group">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-all duration-200 group-hover:scale-105">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold">Escape Room</h3>
              <span className="text-yellow-500 text-sm font-medium">Coming Soon</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Generate escape room puzzles and interactive challenges.
            </p>
            <span className="inline-block mt-3 text-gray-400 font-medium">
              Will be avalible in future.
            </span>
          </div>
        </Link>

        <Link href="/coding-races" className="block group">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-all duration-200 group-hover:scale-105">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold">Coding Races</h3>
              <span className="text-yellow-500 text-sm font-medium">Coming Soon</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Create coding challenges and race timers.
            </p>
            <span className="inline-block mt-3 text-gray-400 font-medium">
              Will be avalible in future.
            </span>
          </div>
        </Link>

        <Link href="/court-room" className="block group">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-all duration-200 group-hover:scale-105">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold">Court Room</h3>
              <span className="text-yellow-500 text-sm font-medium">Coming Soon</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Generate court room scenarios and debate structures.
            </p>
            <span className="inline-block mt-3 text-gray-400 font-medium">
              Will be avalible in future.
            </span>
          </div>
        </Link>
      </div>

      <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <h3 className="font-semibold mb-2 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Features
        </h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
          <li>Generate standalone HTML5 + JavaScript code</li>
          <li>All styles are inline - no external CSS classes needed</li>
          <li>Copy generated code with one click</li>
          <li>Dark/Light theme support with smooth transitions</li>
          <li>Fully accessible and responsive</li>
          <li>Cookie-based navigation memory</li>
          <li>LocalStorage for persistent tab configurations</li>
        </ul>
      </div>
    </div>
  )
}