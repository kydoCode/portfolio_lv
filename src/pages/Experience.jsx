import React from 'react'
import { Link } from 'react-router-dom'
import experienceData from '../data/experience.json'

export default function Experience() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Experience</h1>
      <ul>
        {experienceData.experience.map((experience, index) => (
          <li key={index} className="mb-2">
            <h2 className="text-xl font-semibold">{experience.poste}</h2>
            <p>{experience.annee || experience.annees.join(', ')}</p>
            <p>{experience.entreprise && experience.entreprise.join(', ')}</p>
            {experience.details && <p>{experience.details.join(', ')}</p>}
          </li>
        ))}
      </ul>
      <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Back to Home</Link>
    </div>
  )
}
