import { Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router';

export function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#0057B8] rounded-lg flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl text-gray-900" style={{ fontWeight: 600 }}>Cabinet Physio-spam</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`transition-colors ${
              isActive('/') ? 'text-[#0057B8]' : 'text-gray-700 hover:text-[#0057B8]'
            }`}
          >
            Accueil
          </Link>
          <Link
            to="/cabinet"
            className={`transition-colors ${
              isActive('/cabinet') ? 'text-[#0057B8]' : 'text-gray-700 hover:text-[#0057B8]'
            }`}
          >
            Le cabinet
          </Link>
          <Link
            to="/soins"
            className={`transition-colors ${
              isActive('/soins') ? 'text-[#0057B8]' : 'text-gray-700 hover:text-[#0057B8]'
            }`}
          >
            Nos soins
          </Link>
          <Link
            to="/blog"
            className={`transition-colors ${
              isActive('/blog') ? 'text-[#0057B8]' : 'text-gray-700 hover:text-[#0057B8]'
            }`}
          >
            Blog santé
          </Link>
          <Link
            to="/contact"
            className={`transition-colors ${
              isActive('/contact') ? 'text-[#0057B8]' : 'text-gray-700 hover:text-[#0057B8]'
            }`}
          >
            Contact
          </Link>
        </div>

        <Link
          to="/rendez-vous"
          className="bg-[#0057B8] hover:bg-[#004494] text-white px-6 py-2.5 rounded-lg transition-colors"
        >
          Prendre RDV
        </Link>
      </nav>
    </header>
  );
}
