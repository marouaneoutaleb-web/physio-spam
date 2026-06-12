import { Heart } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0057B8] rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span style={{ fontWeight: 600 }}>Cabinet  Physio-spam</span>
          </Link>

          <div className="text-gray-400 text-center">
            © 2026 Cabinet Physio-spam. Tous droits réservés.
          </div>

          <div className="text-sm text-gray-500 text-center md:text-right">
            Cabinet de Kinésithérapie agréé<br />
            Dr. kaoutar agnaou - D.E. N° XXXXX
          </div>
        </div>
      </div>
    </footer>
  );
}
