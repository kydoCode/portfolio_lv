import React from 'react'
import { Link } from 'react-router-dom'

export default function Education() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Education</h1>
      <p>This is the Education page. List your educational background here.</p>
      <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Back to Home</Link>
    </div>
  )
}