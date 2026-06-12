import { Bone, Wind, Zap, Activity, Heart, User, CheckCircle } from 'lucide-react';
import { Link } from 'react-router';

export function Services() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-gray-900 mb-4" style={{ fontSize: '3rem', fontWeight: 700 }}>
            Nos Soins
          </h1>
          <p className="text-xl text-gray-600">
            Des soins adaptés à vos besoins, dispensés avec expertise et bienveillance
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Bone className="w-7 h-7 text-[#0057B8]" />
              </div>
              <h3 className="text-gray-900 mb-3" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                Rééducation orthopédique
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Prise en charge post-opératoire, traumatismes, entorses, fractures. Restauration de la mobilité
                et renforcement musculaire progressif pour un retour optimal à vos activités.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Récupération post-chirurgicale</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Traitement des entorses et fractures</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Renforcement musculaire</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Wind className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-gray-900 mb-3" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                Kinésithérapie respiratoire
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Traitement des pathologies respiratoires chroniques (BPCO, asthme), désencombrement bronchique,
                rééducation ventilatoire pour améliorer votre capacité respiratoire.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Désencombrement bronchique</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Rééducation ventilatoire</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Gestion BPCO et asthme</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-gray-900 mb-3" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                Traitement des douleurs chroniques
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Lombalgie, cervicalgie, tendinites, sciatique. Techniques manuelles et exercices thérapeutiques
                pour soulager durablement et prévenir les récidives.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Lombalgie et cervicalgie</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Sciatique et névralgies</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Tendinites chroniques</span>
                </li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Activity className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-gray-900 mb-3" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                Rééducation sportive
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Accompagnement des sportifs après blessure, préparation physique, prévention des blessures.
                Programmes personnalisés pour un retour sécurisé à la performance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Récupération après blessure</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Préparation physique</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Prévention des blessures</span>
                </li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-gray-900 mb-3" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                Kinésithérapie périnéale
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Rééducation post-partum, troubles de la continence, préparation à l'accouchement.
                Soins discrets et professionnels dans un cadre bienveillant.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Rééducation post-partum</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Troubles de la continence</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Préparation à l'accouchement</span>
                </li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <User className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-gray-900 mb-3" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                Rééducation gériatrique
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Maintien de l'autonomie, prévention des chutes, rééducation de l'équilibre et de la marche.
                Accompagnement adapté aux besoins des seniors.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Maintien de l'autonomie</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Prévention des chutes</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Rééducation de l'équilibre</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0057B8]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white mb-6" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            Besoin d'un de ces soins ?
          </h2>
          <p className="text-blue-100 text-xl mb-8">
            Prenez rendez-vous dès aujourd'hui pour une consultation personnalisée
          </p>
          <Link
            to="/rendez-vous"
            className="inline-flex bg-white hover:bg-gray-100 text-[#0057B8] px-8 py-4 rounded-lg transition-colors"
            style={{ fontWeight: 600 }}
          >
            Prendre rendez-vous
          </Link>
        </div>
      </section>
    </>
  );
}
