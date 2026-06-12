import { Calendar, Clock, CheckCircle, User, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export function Appointment() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-gray-900 mb-4" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            Demande envoyée avec succès !
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Merci pour votre demande de rendez-vous. Notre équipe vous contactera dans les plus brefs délais
            pour confirmer votre créneau.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setSubmitted(false)}
              className="bg-[#0057B8] hover:bg-[#004494] text-white px-8 py-3 rounded-lg transition-colors"
              style={{ fontWeight: 600 }}
            >
              Faire une autre demande
            </button>
            <a
              href="/"
              className="bg-white hover:bg-gray-50 text-[#0057B8] px-8 py-3 rounded-lg transition-colors border-2 border-[#0057B8]"
              style={{ fontWeight: 600 }}
            >
              Retour à l'accueil
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-gray-900 mb-4" style={{ fontSize: '3rem', fontWeight: 700 }}>
            Prendre Rendez-vous
          </h1>
          <p className="text-xl text-gray-600">
            Remplissez le formulaire ci-dessous et nous vous contacterons pour confirmer votre rendez-vous
          </p>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h2 className="text-gray-900 mb-6 flex items-center gap-3" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                  <User className="w-6 h-6 text-[#0057B8]" />
                  Informations personnelles
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Nom complet *</label>
                    <input
                      type="text"
                      placeholder="Votre nom et prénom"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0057B8] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Date de naissance</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0057B8] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Téléphone *</label>
                    <input
                      type="tel"
                      placeholder="06 XX XX XX XX"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0057B8] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">E-mail *</label>
                    <input
                      type="email"
                      placeholder="votre@email.com"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0057B8] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-gray-900 mb-6 flex items-center gap-3" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                  <Calendar className="w-6 h-6 text-[#0057B8]" />
                  Détails du rendez-vous
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Motif de consultation *</label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0057B8] focus:border-transparent"
                    >
                      <option value="">Sélectionnez un motif</option>
                      <option value="ortho">Rééducation orthopédique</option>
                      <option value="respi">Kinésithérapie respiratoire</option>
                      <option value="douleur">Traitement des douleurs chroniques</option>
                      <option value="sport">Rééducation sportive</option>
                      <option value="perineal">Kinésithérapie périnéale</option>
                      <option value="geriatrique">Rééducation gériatrique</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Date souhaitée</label>
                    <input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0057B8] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Plage horaire préférée</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0057B8] focus:border-transparent">
                      <option value="">Pas de préférence</option>
                      <option value="matin">Matin (8h30 - 12h)</option>
                      <option value="aprem">Après-midi (14h - 18h30)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Première consultation ?</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0057B8] focus:border-transparent">
                      <option value="oui">Oui, première visite</option>
                      <option value="non">Non, patient régulier</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Informations complémentaires</label>
                <textarea
                  placeholder="Décrivez brièvement votre problème ou vos attentes..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0057B8] focus:border-transparent resize-none"
                />
              </div>

              <div className="bg-blue-50 border-l-4 border-[#0057B8] p-6 rounded-r-lg">
                <p className="text-gray-700">
                  <strong>Note importante :</strong> Cette demande n'est pas une confirmation de rendez-vous.
                  Notre équipe vous contactera dans les 24h pour confirmer la date et l'heure de votre consultation.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                style={{ fontWeight: 600, fontSize: '1.125rem' }}
              >
                <Calendar className="w-5 h-5" />
                Envoyer ma demande de rendez-vous
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Phone className="w-8 h-8 text-[#0057B8] mx-auto mb-3" />
              <div className="text-gray-900 mb-1" style={{ fontWeight: 600 }}>Par téléphone</div>
              <div className="text-gray-600">05 28 XX XX XX</div>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Clock className="w-8 h-8 text-[#0057B8] mx-auto mb-3" />
              <div className="text-gray-900 mb-1" style={{ fontWeight: 600 }}>Horaires</div>
              <div className="text-gray-600">Lun-Ven: 8h30-18h30</div>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Mail className="w-8 h-8 text-[#0057B8] mx-auto mb-3" />
              <div className="text-gray-900 mb-1" style={{ fontWeight: 600 }}>Par e-mail</div>
              <div className="text-gray-600 text-sm">contact@alshifaa-kine.ma</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
