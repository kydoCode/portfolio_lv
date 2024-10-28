import React from 'react'
import { Link } from 'react-router-dom'
import educationData from '../data/education.json'

export default function Education() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Education</h1>
      <ul>
        {educationData.education.map((education, index) => (
          <li key={index} className="mb-2">
            <h2 className="text-xl font-semibold">{education.intitule}</h2>
            <p>{education.annee}</p>
            <p>{education.etablissement}</p>
            {education.mention && <p>{education.mention}</p>}
          </li>
        ))}
      </ul>
      <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Back to Home</Link>
    </div>
  )
}
