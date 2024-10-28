import React from 'react'
import { Link } from 'react-router-dom'
import softskillsData from '../data/softskills.json'

export default function Skills() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Skills</h1>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Technical Skills</h2>
        {softskillsData.competences.techniques.map((skill, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold">{skill.type}</h3>
            <ul className="list-disc list-inside">
              {skill.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Transversal Skills</h2>
        {softskillsData.competences.transversales.map((skill, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold">{skill.type}</h3>
            <ul className="list-disc list-inside">
              {skill.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Back to Home</Link>
    </div>
  )
}
