import React from 'react'
import { Link } from 'react-router-dom'
import creationsData from '../data/creations.json'

export default function Creations() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Creations</h1>
      <ul>
        {creationsData.creations.map((creation, index) => (
          <li key={index} className="mb-2">
            <h2 className="text-xl font-semibold">{creation.type}</h2>
            <p>{creation.details}</p>
          </li>
        ))}
      </ul>
      <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Back to Home</Link>
    </div>
  )
}
