import React from 'react';
import { motion } from 'framer-motion';

const LegalNotice = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold mb-8">Mentions légales</h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">Éditeur du site</h2>
              <p className="text-gray-700">
                BKR STUDIO<br />
                Auto-entrepreneur<br />
                SIRET : 940 412 612<br />
                Ville : Meaux<br />
                Téléphone : 07 67 70 23 23<br />
                E-mail : bkr-studio77@gmail.com
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Responsable de la publication</h2>
              <p className="text-gray-700">
                BKR STUDIO – Aboubakar Mahamadou
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Hébergeur</h2>
              <p className="text-gray-700">
                Hostinger International Ltd.<br />
                61 Lordou Vironos Street, 6023 Larnaca, Chypre<br />
                Site web : <a href="https://www.hostinger.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.hostinger.com/</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Propriété intellectuelle</h2>
              <p className="text-gray-700">
                L'ensemble des contenus présents sur le site (textes, photographies, vidéos, logo, etc.) sont la propriété exclusive de BKR STUDIO.<br /><br />
                Toute reproduction, représentation, diffusion ou utilisation, même partielle, des contenus, sans l'autorisation écrite préalable de l'auteur, est strictement interdite.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Données personnelles</h2>
              <p className="text-gray-700">
                Les informations collectées via le formulaire de contact sont destinées uniquement à permettre à BKR STUDIO de répondre à vos demandes.<br /><br />
                Conformément à la législation en vigueur (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles.<br /><br />
                Pour exercer ces droits, contactez : bkr-studio77@gmail.com
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Cookies et mesure d'audience</h2>
              <p className="text-gray-700">
                Ce site utilise Google Analytics pour analyser l'audience et améliorer l'expérience utilisateur. Des cookies peuvent être déposés sur votre navigateur à cet effet.<br /><br />
                Vous pouvez désactiver les cookies en configurant les paramètres de votre navigateur.<br /><br />
                Pour plus d'informations, consultez la politique de confidentialité de Google : <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Limitation de responsabilité</h2>
              <p className="text-gray-700">
                BKR STUDIO s'efforce de fournir des informations précises sur ce site. Cependant, il ne pourra être tenu responsable d'éventuelles erreurs, omissions ou indisponibilité des informations.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LegalNotice;