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
            <img 
              src={project.image_path || "/placeholder.svg?height=200&width=300"} 
              alt={project.name} 
              className="hover:opacity-75" 
              onClick={() => openModal(project)} 
            />
            <p className="legend">{project.name}</p>
          </div>
        ))}
      </Carousel>

      {modalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  )
}
