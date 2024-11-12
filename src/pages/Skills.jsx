import React from 'react'
import { Link } from 'react-router-dom'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion'
import softskillsData from '../data/softskills.json'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Skills() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <Header />
      <h1 className="text-3xl font-bold mb-4">Skills</h1>
      <div className="w-full max-w-screen-lg">
        <Accordion type="single" collapsible>
          <h2 className="text-2xl font-semibold mb-2 card">Technical Skills</h2>
          {softskillsData.competences.techniques.map((skill, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-xl font-semibold cursor-pointer flex items-center justify-between card">
                {skill.type}
              </AccordionTrigger>
              <AccordionContent className="list-disc list-inside bg-white shadow overflow-hidden sm:rounded-lg p-4">

                {skill.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="text-gray-700">{detail}</li>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="w-full max-w-screen-lg">
        <Accordion type="single" collapsible>
          <h2 className="text-2xl font-semibold mb-2 card">Transversal Skills</h2>
          {softskillsData.competences.transversales.map((skill, index) => (
            <AccordionItem key={index} value={`item-${index + softskillsData.competences.techniques.length}`}>
              <AccordionTrigger className="text-xl font-semibold cursor-pointer flex items-center justify-between card">
                {skill.type}
              </AccordionTrigger>
              <AccordionContent className="list-disc list-inside bg-white shadow overflow-hidden sm:rounded-lg p-4">
                {skill.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="text-gray-700">{detail}</li>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
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
