import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import projectsData from '../data/repos_github_for_portfolio.json'

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mt-8">
        <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
      </div>
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <Carousel>
        {projectsData.map((project, index) => (
          <div key={index}>
            <img src={project.image_path || "/placeholder.svg?height=200&width=300"} alt={project.name} />
            <p className="legend">{project.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
  )
}
