import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import projectsData from '../data/repos_github_for_portfolio.json'
import ProjectModal from '../components/ProjectModal'
import Header from '../components/Header'
import Footer from '../components/Footer'

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

  const computeLanguagePercentages = (languages) => {
    const totalBytes = Object.values(languages).reduce((acc, bytes) => acc + bytes, 0)
    return Object.entries(languages).reduce((acc, [lang, bytes]) => {
      if (lang !== 'not available') {
        acc[lang] = ((bytes / totalBytes) * 100).toFixed(2)
      }
      return acc
    }, {})
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Header />
      <div className="mt-8">
        <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
      </div>
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <Carousel>
        {projectsData.map((project, index) => (
          <div key={index} className="relative">
            <a href={project.site_url} target="_blank" rel="noopener noreferrer">
              <img 
                src={project.image_path} 
                alt={project.name} 
                className="hover:opacity-75" 
                onClick={() => openModal(project)} 
              />
            </a>
            <p className="legend">{project.name}</p>
            <ul className="mt-2 space-y-1">
              {Object.entries(computeLanguagePercentages(project.languages)).map(([lang, percentage]) => (
                <li key={lang} className="text-sm text-gray-500">{lang}: {percentage}%</li>
              ))}
            </ul>
          </div>
        ))}
      </Carousel>

      {modalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
      <Footer />
    </div>
  )
}
