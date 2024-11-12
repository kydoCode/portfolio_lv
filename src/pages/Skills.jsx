import React from 'react'
import { Link } from 'react-router-dom'
import Accordion from '../components/Accordion.jsx'
import softskillsData from '../data/softskills.json'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Skills() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <Header />
      <h1 className="text-3xl font-bold mb-4">Skills</h1>
      <div className="w-full max-w-screen-lg">
        <Accordion items={softskillsData.competences.techniques} />
      </div>
      <div className="w-full max-w-screen-lg">
        <Accordion items={softskillsData.competences.transversales} />
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
