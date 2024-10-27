import React from 'react'
import  { Link } from 'react-router-dom'

export default function Skills() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Skills</h1>
      <p>This is the Skills page. List your technical skills here.</p>
      <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Back to Home</Link>
    </div>
  )
}