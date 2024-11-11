import React from 'react'
import { Link } from 'react-router-dom'
import creationsData from '../data/creations.json'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Creations() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Header />
      <h1 className="text-3xl font-bold mb-4 mt-8">Creations</h1>
      <ul className="space-y-4 w-full max-w-3xl">
        {creationsData.creations.map((creation, index) => (
          <li key={index} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold">{creation.type}</h2>
            <p>{creation.details}</p>
          </li>
        ))}
      </ul>
      <div className="mt-8 text-center">
        <Link to="/" className="text-blue-600 hover:underline inline-block">Back to Home</Link>
      </div>
      <Footer />
    </div>
  )
}
