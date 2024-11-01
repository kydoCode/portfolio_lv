import React from 'react'
import { Link } from 'react-router-dom'
import educationData from '../data/education.json'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Education() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <Header />
      <div className="w-full max-w-screen-lg">
        <div className="mt-8">
          <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
        </div>
        <h1 className="text-3xl font-bold mb-4">Education</h1>
        <ul>
          {educationData.education.map((education, index) => (
            <li className="mb-2 bg-white shadow-lg rounded-lg p-6 bg-cover bg-center" style={{ backgroundImage: `url(${education.backgroundImage})` }} key={index}>
              <a href={education.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between">
                <img src={education.logo} alt={`${education.intitule} logo`} className="h-12 w-12 logo-circle mr-4" />
                <div>
                  <h2 className="text-xl font-semibold">{education.intitule || 'Unknown Title'}</h2>
                  <p>{education.annees.join(', ') || 'Unknown Year'}</p>
                  {education.etablissement && <p>{education.etablissement}</p>}
                  {education.etablissements && (
                    <ul className="list-disc list-inside mt-2">
                      {education.etablissements.map((etab, etabIndex) => (
                        <li key={etabIndex}>
                          {etab.nom}
                          {etab.intitule && ` - ${etab.intitule}`}
                          {etab.mention && ` (${etab.mention})`}
                        </li>
                      ))}
                    </ul>
                  )}
                  {education.mention && <p>Mention: {education.mention}</p>}
                </div>
                <img src={education.logo} alt={`${education.intitule} logo`} className="h-12 w-12 education-logo ml-4" />
              </a>
            </li>
          ))}
        </ul>
        <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Back to Home</Link>
      </div>
      <Footer />
    </div>
  )
}
