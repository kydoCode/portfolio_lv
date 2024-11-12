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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Header />
      <h1 className="text-3xl font-bold mb-4 w-full max-w-screen-lg">Projects</h1>
      <div className="w-full max-w-screen-lg">
        <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows>
          {projectsData.map((project, index) => (
            <div key={index} className="relative">
              <img 
                src={project.image_path} 
                alt={project.name} 
                className="hover:opacity-75" 
                onClick={() => openModal(project)} 
              />
              <p className="legend bg-blue-600 text-white">{project.name}</p>
              <ul className="mt-2 space-y-1">
                {Object.entries(computeLanguagePercentages(project.languages)).map(([lang, percentage]) => (
                  <li key={lang} className="text-sm text-gray-500">{lang}: {percentage}%</li>
                ))}
              </ul>
            </div>
          ))}
        </Carousel>
      </div>

      {modalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
      <div className="mt-8 text-center">
        <Link to="/" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
          Back to Home
        </Link>
      </div>
      <Footer />
    </div>
  )
}
