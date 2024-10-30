import React from 'react'
import { Link } from 'react-router-dom'
import educationData from '../data/education.json'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Education() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Header />
      <div className="mt-8">
        <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
      </div>
      <h1 className="text-3xl font-bold mb-4">Education</h1>
      <ul>
        {educationData.education.map((education, index) => (
          <li key={index} className="mb-2">
            <h2 className="text-xl font-semibold">{education.intitule || 'Unknown Title'}</h2>
            <p>{education.annee || 'Unknown Year'}</p>
            <p>{education.etablissement || 'Unknown Institution'}</p>
            {education.mention && <p>{education.mention}</p>}
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  )
}
