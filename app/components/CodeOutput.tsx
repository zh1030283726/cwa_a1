'use client'

import { useState } from 'react'

interface CodeOutputProps {
  code: string
}

export default function CodeOutput({ code }: CodeOutputProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const downloadAsFile = () => {
    const blob = new Blob([code], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'generated-tabs.html'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
        <h3 className="text-white font-semibold">Generated HTML Code (No CSS Classes - Inline Styles Only)</h3>
        <div className="flex space-x-2">
          <button
            onClick={downloadAsFile}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            aria-label="Download HTML file"
          >
            Download HTML
          </button>
          <button
            onClick={copyToClipboard}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            aria-label="Copy code to clipboard"
          >
            {copied ? '✓ Copied!' : 'Copy Code'}
          </button>
        </div>
      </div>
      <pre className="p-4 overflow-x-auto max-h-96">
        <code className="text-green-400 text-sm font-mono">{code}</code>
      </pre>
    </div>
  )
}