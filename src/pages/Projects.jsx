import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import reposData from '../data/repos_github_for_portfolio.json'
import "flowbite";

export default function Projects() {

  const Carousel = () => {
    const slides = [
      { id: 1, src: "https://via.placeholder.com/800x400?text=Slide+1", alt: "Slide 1" },
      { id: 2, src: "https://via.placeholder.com/800x400?text=Slide+2", alt: "Slide 2" },
      { id: 3, src: "https://via.placeholder.com/800x400?text=Slide+3", alt: "Slide 3" },
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <Carousel>
        {reposData.map((project, index) => (
          <div key={index}>
            <img src={project.image_path || "/placeholder.svg?height=200&width=300"} alt={project.name} />
            <p className="legend">{project.name}</p>
          </div>
        ))}
      </Carousel>
      <p>This is the Projects page. Add your project details here.</p>
      /* <div className="relative w-full max-w-lg mx-auto">
      <div className="overflow-hidden rounded-lg">
        <img src={slides[currentIndex].src} alt={slides[currentIndex].alt} className="w-full" />
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full"
      >
        ›
      </button>
      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>*/
    </div>
      <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Back to Home</Link>
    </div>
  )
}