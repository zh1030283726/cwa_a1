'use client'

import { useState, useEffect } from 'react'
import CodeOutput from './CodeOutput'

interface Tab {
  id: string
  title: string
  content: string
}

export default function TabGenerator() {
  const [tabs, setTabs] = useState<Tab[]>([])
  const [newTabTitle, setNewTabTitle] = useState('')
  const [newTabContent, setNewTabContent] = useState('')

  // Load tabs from localStorage on mount
  useEffect(() => {
    const savedTabs = localStorage.getItem('generatorTabs')
    if (savedTabs) {
      try {
        const parsedTabs = JSON.parse(savedTabs)
        setTabs(parsedTabs)
      } catch (e) {
        // Initialize with default tabs if localStorage is corrupted
        const defaultTabs = [
          { id: '1', title: 'Tab 1', content: 'Content for tab 1' },
          { id: '2', title: 'Tab 2', content: 'Content for tab 2' },
          { id: '3', title: 'Tab 3', content: 'Content for tab 3' },
        ]
        setTabs(defaultTabs)
      }
    } else {
      // Initialize with default tabs
      const defaultTabs = [
        { id: '1', title: 'Tab 1', content: 'Content for tab 1' },
        { id: '2', title: 'Tab 2', content: 'Content for tab 2' },
        { id: '3', title: 'Tab 3', content: 'Content for tab 3' },
      ]
      setTabs(defaultTabs)
    }
  }, [])

  // Save tabs to localStorage whenever they change
  useEffect(() => {
    if (tabs.length > 0) {
      localStorage.setItem('generatorTabs', JSON.stringify(tabs))
    }
  }, [tabs])

  const addTab = () => {
    if (tabs.length >= 15) {
      alert('Maximum 15 tabs allowed!')
      return
    }
    
    if (newTabTitle && newTabContent) {
      const newTab = {
        id: Date.now().toString(),
        title: newTabTitle,
        content: newTabContent
      }
      setTabs([...tabs, newTab])
      setNewTabTitle('')
      setNewTabContent('')
    }
  }

  const removeTab = (id: string) => {
    if (tabs.length <= 1) {
      alert('Must have at least one tab!')
      return
    }
    setTabs(tabs.filter(tab => tab.id !== id))
  }

  const updateTab = (id: string, field: 'title' | 'content', value: string) => {
    setTabs(tabs.map(tab => 
      tab.id === id ? { ...tab, [field]: value } : tab
    ))
  }

  const generateHTML = () => {
    const tabButtons = tabs.map((tab, index) => 
      `    <button 
      onclick="showTab('${tab.id}')" 
      id="btn-${tab.id}" 
      style="padding: 10px 20px; margin-right: 5px; margin-bottom: -1px; border: 1px solid #ddd; background: ${index === 0 ? '#007bff' : '#f8f9fa'}; color: ${index === 0 ? 'white' : 'black'}; cursor: pointer; border-radius: 4px 4px 0 0; font-family: Arial, sans-serif; font-size: 14px; transition: all 0.3s ease;">
      ${tab.title}
    </button>`
    ).join('\n')

    const tabContents = tabs.map((tab, index) => 
      `    <div 
      id="content-${tab.id}" 
      style="display: ${index === 0 ? 'block' : 'none'}; padding: 20px; border: 1px solid #ddd; background: white; min-height: 100px; font-family: Arial, sans-serif; color: #333;">
      ${tab.content}
    </div>`
    ).join('\n')

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Generated Tabs - ${tabs.length} Tabs</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh;">
  <div style="max-width: 800px; margin: 0 auto; background: rgba(255, 255, 255, 0.95); border-radius: 10px; padding: 30px; box-shadow: 0 20px 60px rgba(0,0,0,0.3);">
    <h1 style="color: #333; margin-bottom: 30px; text-align: center; font-size: 28px; text-shadow: 2px 2px 4px rgba(0,0,0,0.1);">Interactive Tabs Component</h1>
    
    <div style="border-bottom: 2px solid #007bff; margin-bottom: -1px;">
${tabButtons}
    </div>
    
    <div style="background: white; border-radius: 0 0 5px 5px; overflow: hidden;">
${tabContents}
    </div>
    
    <div style="margin-top: 20px; padding: 15px; background: #f0f0f0; border-radius: 5px; text-align: center; color: #666; font-size: 12px;">
      Generated with HTML5 Code Generator | ${tabs.length} tabs | ${new Date().toLocaleDateString()}
    </div>
  </div>

  <script>
    function showTab(tabId) {
      // Hide all tab contents
      ${tabs.map(tab => `document.getElementById('content-${tab.id}').style.display = 'none';`).join('\n      ')}
      
      // Reset all button styles
      ${tabs.map(tab => `
      document.getElementById('btn-${tab.id}').style.background = '#f8f9fa';
      document.getElementById('btn-${tab.id}').style.color = 'black';
      document.getElementById('btn-${tab.id}').style.borderBottom = '1px solid #ddd';`).join('\n      ')}
      
      // Show selected tab content
      document.getElementById('content-' + tabId).style.display = 'block';
      
      // Highlight selected button
      document.getElementById('btn-' + tabId).style.background = '#007bff';
      document.getElementById('btn-' + tabId).style.color = 'white';
      document.getElementById('btn-' + tabId).style.borderBottom = '1px solid #007bff';
    }
    
    // Add hover effects
    ${tabs.map(tab => `
    document.getElementById('btn-${tab.id}').onmouseover = function() {
      if (this.style.backgroundColor !== 'rgb(0, 123, 255)') {
        this.style.backgroundColor = '#e9ecef';
      }
    };
    document.getElementById('btn-${tab.id}').onmouseout = function() {
      if (this.style.backgroundColor !== 'rgb(0, 123, 255)') {
        this.style.backgroundColor = '#f8f9fa';
      }
    };`).join('\n    ')}
  </script>
</body>
</html>`
  }

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-colors duration-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Configure Tabs</h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {tabs.length}/15 tabs
          </span>
        </div>
        
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {tabs.map((tab, index) => (
            <div key={tab.id} className="flex items-start space-x-4 p-4 border dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-lg font-bold text-gray-400">#{index + 1}</div>
              <div className="flex-grow space-y-2">
                <input
                  type="text"
                  value={tab.title}
                  onChange={(e) => updateTab(tab.id, 'title', e.target.value)}
                  className="w-full px-3 py-2 border dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white"
                  placeholder="Tab title"
                  aria-label={`Tab ${index + 1} title`}
                />
                <textarea
                  value={tab.content}
                  onChange={(e) => updateTab(tab.id, 'content', e.target.value)}
                  className="w-full px-3 py-2 border dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white"
                  placeholder="Tab content"
                  rows={3}
                  aria-label={`Tab ${index + 1} content`}
                />
              </div>
              <button
                onClick={() => removeTab(tab.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                aria-label={`Remove tab ${index + 1}`}
                disabled={tabs.length <= 1}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {tabs.length < 15 && (
          <div className="mt-4 p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
            <h3 className="font-semibold mb-2">Add New Tab</h3>
            <div className="space-y-2">
              <input
                type="text"
                value={newTabTitle}
                onChange={(e) => setNewTabTitle(e.target.value)}
                className="w-full px-3 py-2 border dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white"
                placeholder="New tab title"
                aria-label="New tab title"
              />
              <textarea
                value={newTabContent}
                onChange={(e) => setNewTabContent(e.target.value)}
                className="w-full px-3 py-2 border dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white"
                placeholder="New tab content"
                rows={3}
                aria-label="New tab content"
              />
              <button
                onClick={addTab}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                + Add Tab
              </button>
            </div>
          </div>
        )}
      </div>

      <CodeOutput code={generateHTML()} />
    </div>
  )
}