import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronUp } from 'lucide-react'
import softskillsData from '../data/softskills.json'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Skills() {
  const [openSection, setOpenSection] = useState(null)

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <Header />
      <h1 className="text-3xl font-bold mb-4">Skills</h1>
      <div className="w-full max-w-screen-lg">
        <h2 className="text-2xl font-semibold mb-2 card">Technical Skills</h2>
        {softskillsData.competences.techniques.map((skill, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold cursor-pointer flex items-center justify-between card" onClick={() => toggleSection(index)}>
              {skill.type}
              {openSection === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </h3>
            {openSection === index && (
              <ul className="list-disc list-inside bg-white shadow overflow-hidden sm:rounded-lg p-4">
                {skill.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="text-gray-700">{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div className="w-full max-w-screen-lg">
        <h2 className="text-2xl font-semibold mb-2 card">Transversal Skills</h2>
        {softskillsData.competences.transversales.map((skill, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold cursor-pointer flex items-center justify-between card" onClick={() => toggleSection(index + softskillsData.competences.techniques.length)}>
              {skill.type}
              {openSection === index + softskillsData.competences.techniques.length ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </h3>
            {openSection === index + softskillsData.competences.techniques.length && (
              <ul className="list-disc list-inside bg-white shadow overflow-hidden sm:rounded-lg p-4">
                {skill.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="text-gray-700">{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
          Back to Home
        </Link>
      </div>
      <Footer />
    </div>
  )
}
