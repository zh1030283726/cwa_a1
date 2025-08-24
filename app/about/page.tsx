'use client'

export default function About() {
  // Replace with your details
  const STUDENT_NAME = "Cheung Chak Lam"
  const STUDENT_NUMBER = "20839934"

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6 transition-colors duration-200">
        <h2 className="text-2xl font-semibold mb-4">Student Information</h2>
        <div className="space-y-2 text-lg">
          <p><strong>Name:</strong> {STUDENT_NAME}</p>
          <p><strong>Student Number:</strong> {STUDENT_NUMBER}</p>
          <p><strong>Course:</strong> CSE3CWA/CSE5006</p>
          <p><strong>Assignment:</strong> Assignment 1 - HTML5 Code Generator</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6 transition-colors duration-200">
        <h2 className="text-2xl font-semibold mb-4">Video Tutorial: How to Use This Website</h2>
        
        <div className="aspect-w-16 aspect-h-9 mb-4">
          {/* Replace with your actual video - Example with YouTube embed */}
          <div className="relative pb-[56.25%] h-0">
            <iframe 
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="How to use HTML5 Code Generator"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          
          {/* Alternative: Local video file */}
          {/* <video 
            controls 
            className="w-full rounded-lg"
            poster="/video-thumbnail.jpg"
          >
            <source src="/tutorial-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h3 className="text-xl font-semibold mt-6 mb-3">Quick Start Guide</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Navigate using the hamburger menu (☰) in the header - notice the CSS transform animation</li>
            <li>Click the home button (🏠) to quickly return to the homepage</li>
            <li>Toggle between dark and light themes using the sun/moon button</li>
            <li>Visit the Tabs Generator to create custom tab components</li>
            <li>Add up to 15 tabs with custom titles and content</li>
            <li>Your tab configurations are automatically saved in localStorage</li>
            <li>Click &quot;Copy Code&quot; to get the generated HTML or &quot;Download HTML&quot; to save as file</li>
            <li>The generated code is completely standalone - no CSS classes, only inline styles!</li>
          </ol>

          <h3 className="text-xl font-semibold mt-6 mb-3">Key Features</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded">
              <h4 className="font-semibold mb-2">🎨 Themes</h4>
              <p>Dark and light mode with smooth transitions and system preference detection</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded">
              <h4 className="font-semibold mb-2">♿ Accessibility</h4>
              <p>WCAG compliant with proper ARIA labels and keyboard navigation</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded">
              <h4 className="font-semibold mb-2">📱 Responsive</h4>
              <p>Works perfectly on all device sizes from mobile to desktop</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded">
              <h4 className="font-semibold mb-2">💾 Persistence</h4>
              <p>Cookies remember navigation, localStorage saves tab configurations</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3">Technology Stack</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Next.js 14+</strong> with App Router for modern React development</li>
            <li><strong>TypeScript</strong> for type safety and better developer experience</li>
            <li><strong>Tailwind CSS</strong> for utility-first styling</li>
            <li><strong>js-cookie</strong> for cookie management</li>
            <li><strong>localStorage API</strong> for persistent data storage</li>
            <li><strong>CSS Transforms</strong> for smooth animations</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Assignment Requirements Met</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Navigation Bar with Header and Footer
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Dark Mode / Light Mode themes
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Hamburger Menu with CSS Transform animations
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Generate up to 15 tabs with add/remove functionality
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Tab configurations saved in localStorage
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Generated HTML with inline CSS only (no CSS classes)
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <h3 className="font-semibold mb-2">Need Help?</h3>
        <p className="text-gray-700 dark:text-gray-300">
          If you encounter any issues or have questions about using this application, 
          please refer to the video tutorial above or contact the course coordinator at La Trobe University.
        </p>
      </div>
    </div>
  )
}