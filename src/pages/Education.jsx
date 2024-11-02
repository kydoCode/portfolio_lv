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
    {/* <div className="mt-8">
          <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
        </div>*/}
        <h1 className="text-3xl font-bold mb-4">Education</h1>
        <ul className="space-y-4 sm:space-y-6 md:space-y-8">
  {educationData.education.map((education, index) => (
    <li 
      key={index}
      className="relative bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${education.backgroundImage})` }}
      ></div>
      <div className="absolute inset-0 bg-white opacity-80"></div>
      <a 
        href={education.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="relative block p-4 sm:p-6"
      >
        <div className="flex items-center flex-wrap">
          <div className="w-16 h-16 flex-shrink-0 mr-4 overflow-hidden rounded-full">
            <img 
              src={education.logo} 
              alt={`${education.intitule} logo`} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-grow">
            <h2 className="text-xl font-semibold">{education.intitule || 'Unknown Title'}</h2>
            <p className="text-gray-600">{education.annees.join(', ') || 'Unknown Year'}</p>
            {education.etablissement && <p className="text-gray-600">{education.etablissement}</p>}
            {education.etablissements && (
              <ul className="list-disc list-inside mt-2 text-gray-600">
                {education.etablissements.map((etab, etabIndex) => (
                  <li key={etabIndex}>
                    {etab.nom}
                    {etab.intitule && ` - ${etab.intitule}`}
                    {etab.mention && ` (${etab.mention})`}
                  </li>
                ))}
              </ul>
            )}
            {education.mention && <p className="text-gray-600">Mention: {education.mention}</p>}
          </div>
          <div className="w-16 h-16 flex-shrink-0 ml-4 overflow-hidden">
            <img 
              src={education.logo} 
              alt={`${education.intitule} logo`} 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </a>
    </li>
  ))}
</ul>
        {/* <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Back to Home</Link> */}
      </div>
      <Footer />
    </div>
  )
}
