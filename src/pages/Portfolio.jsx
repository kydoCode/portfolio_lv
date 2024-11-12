import React from 'react'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <main className="py-12 px-4 sm:px-6 lg:px-8 w-full max-w-screen-xl">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img className="h-full w-full object-cover md:w-48" src="https://i.ibb.co/yN7YVXc/avatar-homepage.jpg" alt="Profile picture" />
            </div>
            <div className="p-8">
              <div className="text-sm font-semibold text-blue-600">Subtitle</div>
              <h2 className="mt-2 text-4xl font-bold text-gray-900">Title</h2>
              <p className="mt-2 text-gray-600">Description</p>
              <div className="mt-4">
                <a
                  href="/projects"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Call to Action
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
