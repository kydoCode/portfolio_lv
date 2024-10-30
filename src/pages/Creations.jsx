import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import creationsData from '../data/creations.json'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Creations() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <Header />
      <div className="mt-8">
        <Link to="/" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md inline-flex items-center">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Home
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-4">Creations</h1>
      <ul className="space-y-4 w-full max-w-3xl">
        {creationsData.creations.map((creation, index) => (
          <li key={index} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold">{creation.type}</h2>
            <p>{creation.details}</p>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  )
}
