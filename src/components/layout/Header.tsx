import React from 'react';
import { Activity } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="bg-black border-b border-[#00ff9d] py-4">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 text-[#00ff9d] hover:text-[#00ffd5] transition-colors">
            <Activity className="h-8 w-8" />
            <span className="text-xl font-bold">MediCheck</span>
          </Link>
          
          <div className="flex space-x-8">
            {[
              { path: '/', label: 'Symptom Checker' },
              { path: '/encyclopedia', label: 'Encyclopedia' },
              { path: '/about', label: 'About' }
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg ${
                  location.pathname === link.path
                    ? 'text-[#00ff9d] font-medium'
                    : 'text-gray-300 hover:text-[#00ff9d]'
                } transition-colors`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;