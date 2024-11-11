import React from 'react'
import { Link } from 'react-router-dom'
import hobbiesData from '../data/hobbies.json'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Hobbies() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <Header />
      <h1 className="text-3xl font-bold mb-4">Hobbies</h1>
      <ul className="space-y-4 w-full max-w-3xl">
        {hobbiesData.hobbies.map((hobby, index) => (
          <li key={index} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold">{hobby.categorie}</h2>
            <p>{hobby.details.join(', ')}</p>
          </li>
        ))}
      </ul>
      <div className="mt-8 text-center">
        <Link to="/" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
          Back to Home
        </Link>
      </div>
      <Footer />
    </div>
  )
}
