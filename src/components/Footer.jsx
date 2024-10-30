import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="https://github.com/kydoCode" target="_blank" rel="noopener noreferrer">
            <Github className="h-6 w-6 text-white" />
          </a>
          <a href="https://www.linkedin.com/in/clementsylvain/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-6 w-6 text-white" />
          </a>
        </div>
        <div className="text-sm">
          2024 - Sylvain CLEMENT - All rights reserved
        </div>
      </div>
    </footer>
  );
}
