import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Accordion from '../components/Accordion.jsx'
import softskillsData from '../data/softskills.json'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../index.css'
import { Html5, Css3, Javascript, ReactLogo, Tailwind, Bootstrap, Php, Mysql, Nodejs, Express, Vuejs, Python, Postgresql, Nosql, Swift, Swiftui, Kanban, Scrum, Trello, Vscode, Xcode, Github, Blackbox, Copilot, Chatgpt, Linters, Figma } from 'lucide-react'

export default function Skills() {
  const [accordionState, setAccordionState] = useState({});

  useEffect(() => {
    // Initialize accordion state
    const initialState = {};
    softskillsData.competences.techniques.forEach((item, index) => {
      initialState[`item-${index}`] = false;
    });
    softskillsData.competences.transversales.forEach((item, index) => {
      initialState[`item-${index}`] = false;
    });
    setAccordionState(initialState);
  }, []);

  const handleAccordionChange = (itemId) => {
    setAccordionState((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

  const getIcon = (skill) => {
    switch (skill.toLowerCase()) {
      case 'html': return <Html5 className="h-5 w-5 text-gray-400 mr-2" />;
      case 'css': return <Css3 className="h-5 w-5 text-gray-400 mr-2" />;
      case 'javascript': return <Javascript className="h-5 w-5 text-gray-400 mr-2" />;
      case 'react': return <ReactLogo className="h-5 w-5 text-gray-400 mr-2" />;
      case 'tailwind css': return <Tailwind className="h-5 w-5 text-gray-400 mr-2" />;
      case 'bootstrap': return <Bootstrap className="h-5 w-5 text-gray-400 mr-2" />;
      case 'php': return <Php className="h-5 w-5 text-gray-400 mr-2" />;
      case 'mysql': return <Mysql className="h-5 w-5 text-gray-400 mr-2" />;
      case 'node.js': return <Nodejs className="h-5 w-5 text-gray-400 mr-2" />;
      case 'express.js': return <Express className="h-5 w-5 text-gray-400 mr-2" />;
      case 'vue.js': return <Vuejs className="h-5 w-5 text-gray-400 mr-2" />;
      case 'python': return <Python className="h-5 w-5 text-gray-400 mr-2" />;
      case 'postgresql': return <Postgresql className="h-5 w-5 text-gray-400 mr-2" />;
      case 'nosql': return <Nosql className="h-5 w-5 text-gray-400 mr-2" />;
      case 'swift': return <Swift className="h-5 w-5 text-gray-400 mr-2" />;
      case 'swiftui': return <Swiftui className="h-5 w-5 text-gray-400 mr-2" />;
      case 'kanban': return <Kanban className="h-5 w-5 text-gray-400 mr-2" />;
      case 'scrum': return <Scrum className="h-5 w-5 text-gray-400 mr-2" />;
      case 'trello': return <Trello className="h-5 w-5 text-gray-400 mr-2" />;
      case 'vs code': return <Vscode className="h-5 w-5 text-gray-400 mr-2" />;
      case 'xcode': return <Xcode className="h-5 w-5 text-gray-400 mr-2" />;
      case 'github': return <Github className="h-5 w-5 text-gray-400 mr-2" />;
      case 'blackbox ai': return <Blackbox className="h-5 w-5 text-gray-400 mr-2" />;
      case 'copilot': return <Copilot className="h-5 w-5 text-gray-400 mr-2" />;
      case 'chatgpt': return <Chatgpt className="h-5 w-5 text-gray-400 mr-2" />;
      case 'linters': return <Linters className="h-5 w-5 text-gray-400 mr-2" />;
      case 'figma': return <Figma className="h-5 w-5 text-gray-400 mr-2" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center text-center">
      <Header />
      <h1 className="text-3xl font-bold mb-4">Skills</h1>
      <div className="w-full max-w-screen-lg">
        <h2 className="text-2xl font-semibold mb-2">Hard Skills</h2>
        <Accordion items={softskillsData.competences.techniques.map(item => ({
          ...item,
          details: item.details.map(detail => ({
            text: detail,
            icon: getIcon(detail)
          }))
        }))} onChange={handleAccordionChange} className="accordion-component" />
      </div>
      <div className="w-full max-w-screen-lg mt-8">
        <h2 className="text-2xl font-semibold mb-2">Soft Skills</h2>
        <Accordion items={softskillsData.competences.transversales.map(item => ({
          ...item,
          details: item.details.map(detail => ({
            text: detail,
            icon: getIcon(detail)
          }))
        }))} onChange={handleAccordionChange} className="accordion-component" />
      </div>
      <div className="mt-8 text-center">
        <Link to="/" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
          Back to Home
        </Link>
      </div>
      <Footer />
    </div>
  )
}
