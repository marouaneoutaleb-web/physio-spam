import { Star, Award, Heart, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router';

export function About() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-gray-900 mb-4" style={{ fontSize: '3rem', fontWeight: 700 }}>
            Le Cabinet
          </h1>
          <p className="text-xl text-gray-600">
            Découvrez notre cabinet et notre approche de la kinésithérapie
          </p>
        </div>
      </section>

      {/* About the Practitioner */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1645005512968-0c1fe99f0093?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkb2N0b3IlMjBwaHlzaW90aGVyYXBpc3QlMjBwYXRpZW50JTIwdHJlYXRtZW50fGVufDF8fHx8MTc4MDA3NDg1OHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Dr. kaoutar agnaou "
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#0057B8] text-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg" style={{ fontWeight: 600 }}>Diplômée  reconnu par l'État </span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="text-[#0057B8] mb-2" style={{ fontWeight: 600 }}>À PROPOS</div>
                <h2 className="text-gray-900 mb-4" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
                  Dr. kaoutar agnaou
                </h2>
                <div className="text-xl text-gray-600 mb-6">
                  Kinésithérapeute 
                </div>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                 Kinésithérapeute – Rééducation Fonctionnelle

Passionnée par la kinésithérapie et la rééducation fonctionnelle, j’accompagne mes patients dans leur parcours de soins grâce à une prise en charge personnalisée et adaptée à leurs besoins. Mon approche repose sur l’écoute, le professionnalisme et l’utilisation de techniques modernes afin d’optimiser la récupération et le bien-être de chaque patient.


« Mon engagement est de vous accompagner vers une récupération optimale et un meilleur confort de vie. »
                </p>
                <p>
                  Ma pratique se fonde sur une approche centrée sur le patient, combinant techniques manuelles
                  traditionnelles et méthodes modernes de rééducation fonctionnelle.
                </p>
                <p>
                  Je m'engage à fournir des soins personnalisés et de qualité, en m'adaptant aux besoins
                  spécifiques de chaque patient pour favoriser une récupération optimale.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-[#0057B8] p-6 rounded-r-lg">
                <p className="text-gray-700 italic">
                  "Mon rôle est de vous accompagner vers l'autonomie et le mieux-être, en vous aidant à
                  retrouver pleine mobilité et confiance dans votre corps."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Nos valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ce qui guide notre pratique au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0057B8] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2" style={{ fontWeight: 600 }}>Bienveillance</h3>
              <p className="text-gray-600">
                Une écoute attentive et un accompagnement personnalisé
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0057B8] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2" style={{ fontWeight: 600 }}>Excellence</h3>
              <p className="text-gray-600">
                Des soins de qualité basés sur les meilleures pratiques
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0057B8] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2" style={{ fontWeight: 600 }}>Approche humaine</h3>
              <p className="text-gray-600">
                Chaque patient est unique et mérite une attention particulière
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0057B8] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2" style={{ fontWeight: 600 }}>Résultats</h3>
              <p className="text-gray-600">
                Engagement vers votre rétablissement et autonomie
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-gray-900 mb-6" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            Prêt à commencer votre rééducation ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Prenez rendez-vous dès aujourd'hui
          </p>
          <Link
            to="/rendez-vous"
            className="inline-flex bg-[#0057B8] hover:bg-[#004494] text-white px-8 py-4 rounded-lg transition-colors"
            style={{ fontWeight: 600 }}
          >
            Prendre rendez-vous
          </Link>
        </div>
      </section>
    </>
  );
}
