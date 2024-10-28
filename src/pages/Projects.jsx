import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import reposData from '../data/repos_github_for_portfolio.json'

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <Carousel>
        {reposData.map((project, index) => (
          <div key={index}>
            <img src={project.image_path || "/placeholder.svg?height=200&width=300"} alt={project.name} />
            <p className="legend">{project.name}</p>
          </div>
        ))}
      </Carousel>
      <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Back to Home</Link>
    </div>
  )
}