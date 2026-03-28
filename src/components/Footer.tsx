import { Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">BKR Studio</h3>
            <p className="text-gray-400 leading-relaxed">
              Studio de création visuelle spécialisé dans la production football en Île-de-France.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>+33 7 67 70 23 23</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>bkr.studio77@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>Île-de-France</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Expertises</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/services" className="hover:text-white transition-colors">
                  Matchday Production
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition-colors">
                  Academy Immersion
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition-colors">
                  Club Branding &amp; Social
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/bakar_tout_long?igsh=ZHJtNTdpczRvbXM4&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@BKR-STUDIO-Prod"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p className="text-sm">
            © {new Date().getFullYear()} BKR Studio. Tous droits réservés.
          </p>
          <div className="mt-4 space-x-4 text-sm">
            <a href="/mentions-legales" className="hover:text-white transition-colors">
              Mentions légales
            </a>
            <span>|</span>
            <a href="/politique-confidentialite" className="hover:text-white transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
