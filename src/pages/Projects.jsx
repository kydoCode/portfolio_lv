import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import projectsData from '../data/projects.json'

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <Carousel>
        {projectsData.projets.map((project, index) => (
          <div key={index}>
            <img src={project.image || "/placeholder.svg?height=200&width=300"} alt={project.nom} />
            <p className="legend">{project.nom}</p>
          </div>
        ))}
      </Carousel>
      <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Back to Home</Link>
    </div>
  )
}
