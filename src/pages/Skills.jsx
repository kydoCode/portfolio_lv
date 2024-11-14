import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Accordion from '../components/Accordion.jsx'
import softskillsData from '../data/softskills.json'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../index.css'

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

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <Header />
      <h1 className="text-3xl font-bold mb-4">Skills</h1>
      <div className="w-full max-w-screen-lg">
        <h2 className="text-2xl font-semibold mb-2">Hard Skills</h2>
        <Accordion items={softskillsData.competences.techniques} onChange={handleAccordionChange} />
      </div>
      <div className="w-full max-w-screen-lg mt-8">
        <h2 className="text-2xl font-semibold mb-2">Soft Skills</h2>
        <Accordion items={softskillsData.competences.transversales} onChange={handleAccordionChange} />
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
