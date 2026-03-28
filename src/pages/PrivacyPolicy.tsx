import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold mb-8">Politique de confidentialité</h1>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Identité du responsable du traitement</h2>
              <p className="text-gray-700">
                Le responsable du traitement des données personnelles collectées sur ce site est :<br />
                BKR STUDIO – Auto-entrepreneur<br />
                Ville : Meaux<br />
                E-mail : bkr-studio77@gmail.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Données collectées</h2>
              <p className="text-gray-700 mb-4">
                Les données susceptibles d'être collectées sur ce site sont :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Données d'identification : nom, prénom, adresse e-mail (lors de l'utilisation du formulaire de contact)</li>
                <li>Données de navigation : via des cookies, notamment Google Analytics (adresses IP, données de navigation, type d'appareil, navigateur…)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Finalités de la collecte</h2>
              <p className="text-gray-700 mb-4">
                Les données collectées sont utilisées pour :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Répondre à vos demandes via le formulaire de contact</li>
                <li>Améliorer le site et mesurer son audience (statistiques de fréquentation)</li>
                <li>Garantir la sécurité et la performance du site</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Base légale du traitement</h2>
              <p className="text-gray-700 mb-4">
                Les traitements de données sont fondés sur :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Votre consentement (envoi d'un message via le formulaire, acceptation des cookies)</li>
                <li>L'intérêt légitime du responsable du site (analyse statistique de la fréquentation)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Destinataires des données</h2>
              <p className="text-gray-700">
                Les données sont réservées à l'usage exclusif de BKR STUDIO et de ses éventuels sous-traitants techniques (hébergeur, outils d'analyse web).<br /><br />
                Les données issues de Google Analytics peuvent être transférées en dehors de l'Union européenne. Google s'engage à respecter les règles du RGPD et à garantir un niveau de sécurité adéquat.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Durée de conservation</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Données transmises via le formulaire de contact : conservées le temps du traitement de la demande et au maximum 12 mois après la dernière prise de contact.</li>
                <li>Cookies et données de navigation : selon la durée définie par l'outil utilisé (généralement 13 mois maximum).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Exercice des droits</h2>
              <p className="text-gray-700 mb-4">
                Conformément à la réglementation, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Droit d'accès, de rectification, d'effacement, de limitation du traitement, d'opposition et de portabilité de vos données.</li>
                <li>Pour toute demande, contactez bkr-studio77@gmail.com</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Vous avez également le droit d'introduire une réclamation auprès de la CNIL (www.cnil.fr).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Cookies</h2>
              <p className="text-gray-700 mb-4">
                Le site utilise des cookies pour :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Mesurer l'audience via Google Analytics</li>
                <li>Optimiser votre navigation</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Vous pouvez accepter, refuser ou paramétrer les cookies en modifiant les réglages de votre navigateur.<br /><br />
                Pour en savoir plus sur la gestion des cookies : <a href="https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Sécurité</h2>
              <p className="text-gray-700">
                BKR STUDIO met en œuvre toutes les mesures techniques et organisationnelles appropriées pour garantir la sécurité de vos données personnelles et empêcher leur perte, altération ou accès non autorisé.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Modification de la politique de confidentialité</h2>
              <p className="text-gray-700">
                BKR STUDIO se réserve le droit de modifier la présente politique à tout moment. La version en vigueur est celle publiée sur ce site.<br /><br />
                Pour toute question relative à la protection de vos données personnelles, vous pouvez écrire à bkr-studio77@gmail.com.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;