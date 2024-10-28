import React from 'react'
import { Link } from 'react-router-dom'
import hobbiesData from '../data/hobbies.json'

export default function Hobbies() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Hobbies</h1>
      <ul>
        {hobbiesData.hobbies.map((hobby, index) => (
          <li key={index} className="mb-2">
            <h2 className="text-xl font-semibold">{hobby.categorie}</h2>
            <p>{hobby.details.join(', ')}</p>
          </li>
        ))}
      </ul>
      <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Back to Home</Link>
    </div>
  )
}
