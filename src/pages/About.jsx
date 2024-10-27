import React from 'react'
import { Link } from 'react-router-dom'
import { Code, Globe, Lightbulb } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">About Me</h1>
        
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">John Doe</h2>
            <p className="text-gray-600 mb-6">
              Passionate Full Stack Developer | Problem Solver | Tech Enthusiast
            </p>
            <div className="prose max-w-none text-gray-500">
              <p>
                Hello! I'm John Doe, a full stack developer with a passion for creating elegant, efficient, and user-friendly web applications. With 5 years of experience in the tech industry, I've honed my skills in both front-end and back-end development, always staying up-to-date with the latest technologies and best practices.
              </p>
              <p className="mt-4">
                My journey in tech began with a fascination for how things work, which led me to pursue a degree in Computer Science. Since then, I've worked on a diverse range of projects, from small business websites to large-scale enterprise applications, always striving to deliver high-quality solutions that meet and exceed client expectations.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">What I Bring to the Table</h2>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                <div className="w-full flex items-center justify-between p-6 space-x-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-gray-900 text-sm font-medium truncate">Technical Expertise</h3>
                      <Code className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <p className="mt-1 text-gray-500 text-sm">Proficient in multiple programming languages and frameworks</p>
                  </div>
                </div>
              </li>
              <li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                <div className="w-full flex items-center justify-between p-6 space-x-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-gray-900 text-sm font-medium truncate">Problem-Solving Skills</h3>
                      <Lightbulb className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <p className="mt-1 text-gray-500 text-sm">Analytical thinker with a knack for innovative solutions</p>
                  </div>
                </div>
              </li>
              <li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                <div className="w-full flex items-center justify-between p-6 space-x-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-gray-900 text-sm font-medium truncate">Collaborative Approach</h3>
                      <Globe className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <p className="mt-1 text-gray-500 text-sm">Excellent communicator and team player</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">My Mission</h2>
            <p className="text-gray-600">
              My goal is to leverage my skills and passion for technology to create impactful digital solutions that solve real-world problems. I'm constantly learning and evolving, always excited to take on new challenges and push the boundaries of what's possible in web development.
            </p>
          </div>
        </div>
        
        <div className="mt-8">
          <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
        </div>
      </div>
    </div>
  )
}