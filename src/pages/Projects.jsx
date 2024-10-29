import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import projectsData from '../data/repos_github_for_portfolio.json'
import ProjectModal from '../components/ProjectModal'

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const openModal = (project) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mt-8">
        <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
      </div>
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <Carousel>
        {projectsData.map((project, index) => (
          <div key={index} className="relative">
            <img src={project.image_path || "/placeholder.svg?height=200&width=300"} alt={project.name} className="hover:opacity-75" />
            <p className="legend">{project.name}</p>
            <button
              onClick={() => openModal(project)}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              View Details
            </button>
          </div>
        ))}
      </Carousel>

      {modalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  )
}
