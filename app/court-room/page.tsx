export default function CourtRoomPage() {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Court Room Generator</h1>
        
        <div className="bg-yellow-50 dark:bg-yellow-900 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Coming Soon!</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            This feature is currently under development and will be available in Assignment 2.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            The Court Room Generator will allow you to create debate and discussion scenarios with:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600 dark:text-gray-400">
            <li>Role-based discussions</li>
            <li>Evidence presentation systems</li>
            <li>Argument tracking</li>
            <li>Verdict systems</li>
            <li>Case management</li>
          </ul>
        </div>
      </div>
    )
  }