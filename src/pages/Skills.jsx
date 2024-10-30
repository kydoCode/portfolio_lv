import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import softskillsData from '../data/softskills.json'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Skills() {
  const [openSection, setOpenSection] = useState(null)

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Header />
      <div className="mt-8">
        <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
      </div>
      <h1 className="text-3xl font-bold mb-4">Skills</h1>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Technical Skills</h2>
        {softskillsData.competences.techniques.map((skill, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold cursor-pointer" onClick={() => toggleSection(index)}>
              {skill.type}
            </h3>
            {openSection === index && (
              <ul className="list-disc list-inside">
                {skill.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Transversal Skills</h2>
        {softskillsData.competences.transversales.map((skill, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold cursor-pointer" onClick={() => toggleSection(index + softskillsData.competences.techniques.length)}>
              {skill.type}
            </h3>
            {openSection === index + softskillsData.competences.techniques.length && (
              <ul className="list-disc list-inside">
                {skill.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}
