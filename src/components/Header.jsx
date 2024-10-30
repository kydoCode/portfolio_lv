import React from 'react';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
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
  );
}
