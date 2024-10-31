import React from 'react'
import { Link } from 'react-router-dom'
import experienceData from '../data/experience.json'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Experience() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <Header />
      <div className="w-full max-w-screen-lg">
        <h1 className="text-3xl font-bold mb-4">Experience</h1>
        <ul>
          {experienceData.experience.map((experience, index) => (
            <li key={index} className="mb-2 bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold">{experience.poste}</h2>
              <p>{experience.annees.join(', ')}</p>
              {experience.entreprise && <p>{experience.entreprise}</p>}
              {experience.details && (
                <ul className="list-disc list-inside mt-2">
                  {experience.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Back to Home</Link>
      </div>
      <Footer />
    </div>
  )
}