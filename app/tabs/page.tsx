import TabGenerator from '../components/TabGenerator'

export default function TabsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Tabs Generator</h1>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6 border border-blue-200 dark:border-blue-800">
        <p className="text-sm">
          Configure your tabs below and generate standalone HTML5 code with JavaScript and inline CSS. 
          The generated code can be copied and pasted directly into any HTML file - no external dependencies!
        </p>
      </div>

      <TabGenerator />
    </div>
  )
}