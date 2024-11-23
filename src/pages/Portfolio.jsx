import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import ProjectModal from '../components/ProjectModal';
import reposData from '../data/repos_github_for_portfolio.json';
import { useTranslation } from 'react-i18next';

export default function Portfolio() {
  const { t, i18n } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setModalOpen(true);
    setSelectedProject(project);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  const computeLanguagePercentages = (languages) => {
    if (!languages) return {};
    const totalLines = Object.values(languages).reduce((sum, lines) => sum + lines, 0);
    return Object.fromEntries(
      Object.entries(languages).map(([lang, lines]) => [lang, Math.round((lines / totalLines) * 100)])
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <main className="py-12 px-4 sm:px-6 lg:px-8 w-full max-w-screen-xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Portfolio</h1>

        {/* Latest Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('latestProjects.title')}</h2>
          <div className="w-full max-w-4xl mx-auto">
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              useKeyboardArrows
              centerMode
              centerSlidePercentage={80}
              className="custom-carousel"
            >
              {reposData.slice(0, 6).map((project, index) => (
                <div key={index} className="bg-white overflow-hidden shadow rounded-lg p-5 mx-2">
                  <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{project.description || t('latestProjects.noDescription')}</p>
                  <div className="mt-4">
                    <img
                      src={project.image || '/placeholder.svg?height=200&width=300'}
                      alt={project.name}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <button
                      onClick={() => openModal(project)}
                      className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mb-4"
                    >
                      {t('latestProjects.viewDetails')}
                    </button>
                    <ul className="mt-2 space-y-1">
                      {Object.entries(computeLanguagePercentages(project.languages)).map(([lang, percentage]) => (
                        <li key={lang} className="text-sm text-gray-500">{lang}: {percentage}%</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>

        {/* All Projects Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reposData.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={project.image || '/placeholder.svg?height=200&width=300'}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <button
                    onClick={() => openModal(project)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {modalOpen && selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
