import React from 'react';
import Header from '../components/Header';

function NotFound() {
  return (
    <div>
      <Header />
      <h1>404 - Page not found</h1>
      <p>Désolé, la page que vous cherchez n'existe pas.</p>
      <Footer />
    </div>
  );
}

export default NotFound;