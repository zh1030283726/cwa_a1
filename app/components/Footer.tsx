interface FooterProps {
  studentName: string
  studentNumber: string
}

export default function Footer({ studentName, studentNumber }: FooterProps) {
  const currentDate = new Date().toLocaleDateString()

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-200">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© 2024 HTML5 Code Generator - La Trobe University</p>
          <p className="mt-2">
            Student: {studentName} ({studentNumber}) | Date: {currentDate}
          </p>
        </div>
      </div>
    </footer>
  )
}