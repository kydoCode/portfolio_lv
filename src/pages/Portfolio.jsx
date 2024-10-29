import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import ProjectModal from '../components/ProjectModal'
import projectsData from '../data/repos_github_for_portfolio.json'
import { Carousel } from 'react-responsive-carousel'

export default function Portfolio() {
  const { t, i18n } = useTranslation()
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const featuredWork = [
    { title: t('nav.projects'), description: t('featuredWork.projectsDesc'), icon: 'laptop', link: '/projects' },
    { title: t('nav.skills'), description: t('featuredWork.skillsDesc'), icon: 'code', link: '/skills' },
    { title: t('nav.experience'), description: t('featuredWork.experienceDesc'), icon: 'briefcase', link: '/experience' },
    { title: t('nav.creations'), description: t('featuredWork.creationsDesc'), icon: 'palette', link: '/creations' },
    { title: t('nav.education'), description: t('featuredWork.educationDesc'), icon: 'graduation-cap', link: '/education' },
    { title: t('nav.hobbies'), description: t('featuredWork.hobbiesDesc'), icon: 'heart', link: '/hobbies' },
    { title: t('nav.about'), description: t('featuredWork.aboutDesc'), icon: 'user', link: '/about' },
    { title: t('nav.contact'), description: t('featuredWork.contactDesc'), icon: 'mail', link: '/contact' },
  ]

  const openModal = (project) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedProject(null)
  }

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-800">{t('header.title')}</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              {['Home', 'Projects', 'Skills', 'Experience', 'Creations', 'Education', 'Hobbies', 'About', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-gray-500 hover:text-gray-900"
                >
                  {t(`nav.${item.toLowerCase()}`)}
                </Link>
              ))}
            </nav>
            <div className="flex items-center">
              <Globe className="h-5 w-5 text-gray-400 mr-2" />
              <select
                onChange={(e) => changeLanguage(e.target.value)}
                className="bg-white border-gray-300 rounded-md text-gray-700 text-sm"
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="zh">中文</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img className="h-48 w-full object-cover md:w-48" src="/placeholder.svg?height=300&width=300" alt="Profile" />
            </div>
            <div className="p-8">
              <div className="text-sm font-semibold text-blue-600">{t('hero.subtitle')}</div>
              <h2 className="mt-2 text-4xl font-bold text-gray-900">{t('hero.title')}</h2>
              <p className="mt-2 text-gray-600">{t('hero.description')}</p>
              <div className="mt-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  {t('hero.cta')}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">{t('featuredWork.title')}</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredWork.map((item, index) => (
              <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img src={`/placeholder.svg?text=${item.icon}&width=24&height=24`} alt={item.title} className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">{item.title}</dt>
                        <dd className="mt-1 text-sm text-gray-900">{item.description}</dd>
                      </dl>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <Link
                        to={item.link}
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        {t('featuredWork.viewButton')}
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">{t('latestProjects.title')}</h2>
          <Carousel>
            {projectsData.slice(0, 6).map((project, index) => (
              <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{project.description || t('latestProjects.noDescription')}</p>
                  <div className="mt-4">
                    <img src={project.image_path || "/placeholder.svg?height=200&width=300"} alt={project.name} className="w-full h-48 object-cover rounded-md" />
                    <button
                      onClick={() => openModal(project)}
                      className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      {t('latestProjects.viewDetails')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </main>

      {modalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  )
}
