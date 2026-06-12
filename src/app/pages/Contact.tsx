import React from 'react';
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';

export function Contact() {
  // Fix TypeScript error for form event submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Hna dir l-logique dyal l-envoi dyal l-message
    alert('Message envoyé avec succès !');
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-gray-900 mb-4" style={{ fontSize: '3rem', fontWeight: 700 }}>
            Contact
          </h1>
          <p className="text-xl text-gray-600">
            Nous sommes à votre écoute pour toute question ou demande de rendez-vous
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-gray-900 mb-6" style={{ fontSize: '2rem', fontWeight: 700 }}>
                  Informations de contact
                </h2>
                <p className="text-gray-600 text-lg">
                  N'hésitez pas à nous contacter pour prendre rendez-vous ou pour toute question concernant nos soins.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0057B8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1" style={{ fontWeight: 600 }}>Adresse</div>
                    <div className="text-gray-600">
                      45, Boulevard Hassan II<br />
                      Agadir, Maroc
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0057B8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1" style={{ fontWeight: 600 }}>Téléphone</div>
                    <div className="text-gray-600">
                      <a href="tel:0528XXXXXX" className="hover:text-[#0057B8] transition-colors">
                        05 28 XX XX XX
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0057B8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1" style={{ fontWeight: 600 }}>E-mail</div>
                    <div className="text-gray-600">
                      <a href="mailto:contact@Physio-span.ma" className="hover:text-[#0057B8] transition-colors">
                        contact@Physio-span.ma
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0057B8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1" style={{ fontWeight: 600 }}>Horaires d'ouverture</div>
                    <div className="text-gray-600 space-y-1">
                      <div>Lundi – Vendredi : 8h30 – 18h30</div>
                      <div>Samedi : 9h – 13h</div>
                      <div>Dimanche : Fermé</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-[#0057B8] p-6 rounded-r-lg">
                <p className="text-gray-700">
                  <strong>Consultations sur rendez-vous uniquement.</strong><br />
                  Pour toute urgence, veuillez nous contacter par téléphone.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <h3 className="text-gray-900 mb-6" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                Envoyez-nous un message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-gray-700 mb-2">Nom complet *</label>
                  <input
                    type="text"
                    placeholder="Votre nom et prénom"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0057B8] focus:border-transparent bg-white"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Téléphone *</label>
                  <input
                    type="tel"
                    placeholder="06 XX XX XX XX"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0057B8] focus:border-transparent bg-white"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">E-mail *</label>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0057B8] focus:border-transparent bg-white"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Sujet</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0057B8] focus:border-transparent bg-white">
                    <option value="">Sélectionnez un sujet</option>
                    <option value="rdv">Demande de rendez-vous</option>
                    <option value="info">Demande d'information</option>
                    <option value="autre">Autre question</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Message *</label>
                  <textarea
                    placeholder="Votre message..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0057B8] focus:border-transparent bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0057B8] hover:bg-[#004494] text-white py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                  style={{ fontWeight: 600 }}
                >
                  <Send className="w-5 h-5" />
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-gray-900 mb-8 text-center" style={{ fontSize: '2rem', fontWeight: 700 }}>
            Nous trouver
          </h2>
          <div className="w-full aspect-video md:h-[450px] bg-gray-200 rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <iframe
              title="Cabinet Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.1396112999715!2d-9.601956524673642!3d30.403816674744415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b6f8493dae6b%3A0xc07c4046cd4d32cf!2sBd%20Hassan%20II%2C%20Agadir%2080000!5e0!3m2!1sfr!2sma!4v1710000000000!5m2!1sfr!2sma"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen={true} // Fixed TypeScript boolean error
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}