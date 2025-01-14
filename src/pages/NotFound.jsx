import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function NotFound() {
  return (
    <div>
        <Header />
        <div>
          <h1 className="text-3xl font-bold mt-4 mb-4">404 - Page not found</h1>
          <p className="mt-1 text-sm text-gray-500">Désolé, la page que vous cherchez n'existe pas.</p>
        </div>
        <Footer />
    </div>
  );
}

export default NotFound;